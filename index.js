const ApolloFetch = require('apollo-fetch')
const PDFDocument = require('pdfkit')
const Stripe = require('stripe')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const express = require('express')
const http = require('http')
const https = require('https')
const mjml = require('mjml')
const nodemailer = require('nodemailer')
const path = require('path')

const {
  // CORS_WHITELIST,
  EMAIL_TRANSPORTER,
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  API_PAYMENT_STRIPE_URI,
  PAYMENT_STRIPE_ECHO_URI,
  SERVER_PORT,
  STRIPE_SECRET_KEY,
  SSL
} = require('./config.server')

const EMAIL_PAIEMENT_MODEL_HTML = fs.readFileSync(__dirname + '/src/email-paiement.mjml', 'utf-8')
const EMAIL_PAIEMENT_MODEL_TEXT = fs.readFileSync(__dirname + '/src/email-paiement.txt', 'utf-8')

function createPaiementEmail(paiement) {
  const replacePlaceholders = text => text
    .replace('__PAIEMENT_NOM__', paiement.nom)
    .replace('__PAIEMENT_NUM_ORDRE__', paiement.numOrdre)
    .replace('__PAIEMENT_MONTANT__', paiement.montant)
    .replace('__PAIEMENT_DEVISE__', paiement.devise)
  
  const { html } = mjml(replacePlaceholders(EMAIL_PAIEMENT_MODEL_HTML))
  const recu = createPaiementPdf(paiement)
  recu.end()
  return {
    from: '"Happi" <inahappiworld@gmail.com>',
    to: `"${paiement.nom}" <${paiement.email}>`,
    subject: 'Votre reçu fiscal',
    text: replacePlaceholders(EMAIL_PAIEMENT_MODEL_TEXT),
    html: html.replace('https://www.facebook.com/sharer/sharer.php?u=', ''),
    attachments: [
      {
        filename: 'recu-fiscal-happi.pdf',
        contentType: 'application/pdf',
        content: recu,
      }
    ]
  }
}

function createPaiementPdf(paiement) {
  const doc = new PDFDocument()
  const today = (new Date()).toISOString().split('T').shift().split('-').reverse().join('/')

  doc
    .fill("#000")
    .text('RECU POUR UN DON', 70, 80, { align: 'center' })
    .moveTo(70, 95)
    .lineTo(70, 96)
    .lineTo(530, 96)
    .lineTo(530, 95)
    .fill("#000")
    .text('Articles 200, 238 bis et 885-0 V bis A du code général des impôts (CGI)', 70, 105, { align: 'center' })
    .text('N° d\'ordre', 75, 145)
    .text(paiement.numOrdre, 140, 145)
    .moveTo(70, 165)
    .lineTo(70, 185)
    .lineTo(530, 185)
    .lineTo(530, 165)
    .fill("#ccc")
    .fill('#000')
    .text('Bénéficiaire du versement', 75, 170)
    .text('Nom', 75, 195)
    .text('Help Abroad to Play Progress and Improve (HAPPI)', 140, 195)
    .text('Adresse', 75, 220)
    .text('52, rue Jean-Baptiste Pigalle 75009 Paris', 140, 220)
    .text('Statut', 75, 245)
    .text('Organisme d\'intérêt général', 140, 245)
    .moveTo(70, 265)
    .lineTo(70, 285)
    .lineTo(530, 285)
    .lineTo(530, 265)
    .fill("#ccc")
    .fill("#000")
    .text('Donateur', 75, 270)
    .text('Nom', 75, 295)
    .text(`${paiement.nom}`, 140, 295)
    .text('Adresse', 75, 320)
    .text(`${paiement.adresse}`, 140, 320)
    .text(`Le bénéficiaire reconnaît avoir reçu au titre des dons et versements ouvrant droit à réduction d'impôt, la somme de : ***${paiement.montant}*** ${paiement.devise}.`, 75, 360)
    .text('Le bénéficiaire certifie sur l\'honneur que les dons et versements qu\'il reçoit ouvrent droit à la réduction d\'impôt prévue aux articles 200 et 238 bis du CGI.', 75,  400)
    .text('Date du versement ou du don', 75, 460)
    .text(`${paiement.datePaiement}`, 260, 460)
    .text('Forme du don', 75, 485)
    .text('Déclaration de don manuel', 260, 485)
    .text('Nature du don', 75, 510)
    .text('Numéraire', 260, 510)
    .text(`Le ${today}`, 75, 560)
    .moveDown(2)
    .text('Signature')
    .image(__dirname + '/src/email-sign.png', { width: 100 })

  return doc
}

const apollo = ApolloFetch.createApolloFetch({ uri: GRAPHCMS_ENDPOINT })

apollo.use(({ request, options }, next) => {
  if (!options.headers) {
    options.headers = {}
  }

  options.headers['Authorization'] = `Bearer ${GRAPHCMS_TOKEN}`

  next()
})

const stripe = Stripe(STRIPE_SECRET_KEY)

const transporter = nodemailer.createTransport(EMAIL_TRANSPORTER)

const app = express()

// const corsMiddleware = cors({
//   origin: (origin, callback) => (CORS_WHITELIST.indexOf(origin) !== -1)
//     ? callback(null, true)
//     : callback(new Error('Not allowed by CORS'))
// })
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())

app.post(API_PAYMENT_STRIPE_URI, (req, res) => {
  const { produit, token } = req.body

  const charge = {
    amount: produit.montant * 100,
    currency: produit.devise,
    description: produit.description,
    source: token.id,
  }

  console.info('POST', API_PAYMENT_STRIPE_URI, token.id, '--', 'request', produit.montant, produit.devise, produit.description)

  stripe.charges.create(charge, (stripeErr, stripeRes) => {
    const resStatus = stripeErr ? 500 : 200
    const resBody = stripeErr ? { error: stripeErr } : { success: stripeRes }

    console.info('POST', API_PAYMENT_STRIPE_URI, token.id, '--', stripeErr ? 'KO' : 'ok', 'numOrdre', stripeErr || stripeRes.id)

    res
      .status(resStatus)
      .send(resBody)
  
    if (!stripeErr) {
      const {
        id,
        email,
        card,
        created
      } = token
    
      apollo({
        query: `
          mutation CreatePaiement($numOrdre: String, $email: String, $nom: String, $adresse: String, $dateTime: DateTime, $produitId: ID!) {
            createPaiement(numOrdre: $numOrdre, email: $email, nom: $nom, adresse: $adresse, dateTime: $dateTime, produitId: $produitId) {
              id
              numOrdre
              email
              nom
              adresse
              dateTime
            }
          }
        `,
        variables: {
          numOrdre: `stripe/${stripeRes.id}`,
          email,
          nom: card.name,
          adresse: `${card.address_line1}, ${card.address_zip} ${card.address_city}, ${card.address_country}`,
          dateTime: new Date(created * 1000),
          produitId: produit.id
        }
      })
        .then(({ data }) => {
          console.info('POST', API_PAYMENT_STRIPE_URI, token.id, '--', 'registered')

          const {
            email,
            numOrdre,
            nom,
            adresse,
            dateTime
          } = data.createPaiement

          const paiement = {
            email,
            numOrdre,
            nom,
            adresse,
            montant:produit.montant,
            devise: produit.devise,
            datePaiement: dateTime.split('T').shift().split('-').reverse().join('/')
          }
          
          const emailOptions = createPaiementEmail(paiement)

          return new Promise((resolve, reject) => {
            transporter.sendMail(emailOptions, function (err, info) {
              if (err) {
                return reject(err)
              }

              resolve({ paiement, email: emailOptions, info })
            })
          })
        })
        .then(({ info }) => {
          console.info('POST', API_PAYMENT_STRIPE_URI, token.id, '--', 'email sent', info.messageId)
        })
        .catch(err => {
          console.error('POST', API_PAYMENT_STRIPE_URI, token.id, '--', 'ERROR', err)
        })
    }
  })
})

const server = SSL ? https.createServer(SSL, app) : http.createServer(app)

server.listen(SERVER_PORT, error => {
  if (error) {
    throw error
  }

  console.info('Server running on port', SERVER_PORT)
})
