import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import {
  BASE_URL,
  API_PAYMENT_STRIPE_URI,
  STRIPE_PUBLIC_KEY,
} from '../../config.browser'

class Produit extends React.Component {
  constructor(props) {
    super(props)

    this.onClosed = this.onClosed.bind(this)
    this.onOpened = this.onOpened.bind(this)
    this.onToken = this.onToken.bind(this)

    this.state = {
      paymentSucess: null,
      paymentError: null
    }
  }

  onClosed() {
    const { produit } = this.props

    this.safeGa('send', 'event', 'Payment', 'close', produit.nom, produit.montant)
  }

  onOpened() {
    const { produit } = this.props

    this.safeGa('send', 'event', 'Payment', 'open', produit.nom, produit.montant)
  }

  onToken(token) {
    const { produit } = this.props

    axios.post(BASE_URL + API_PAYMENT_STRIPE_URI, { produit, token })
      .then(data => {
        if (data.error) {
          throw new Error(data.error)
        }
  
        this.safeGa('send', 'event', 'Payment', 'made', produit.nom, produit.montant)

        this.setState({ paymentSucess: data })
      })
      .catch(err => {
        console.error(API_PAYMENT_STRIPE_URI, 'ERROR', err)

        this.setState({ paymentError: err })
      })
  }

  safeGa(...args) {
    console.info('GA', ...args)
  
    if (typeof window !== 'undefined' && window.ga) {
      ga(...args)
    }
  }

  render() {
    const { produit } = this.props
    const { paymentError, paymentSucess } = this.state

    const reductionImpots = parseFloat(produit.montant * 0.66).toFixed(2)
  
    return (
      <div className="product-card">
        <h3>{produit.nom} {produit.description}</h3>
        {!paymentError && !paymentSucess && (
          <div>
            {!produit.photo ? '' : (
              <p className="center">
                <img src={produit.photo.url} alt={`Photo ${produit.nom}`} />
              </p>
            )}
            <div className="center pb-4">
              <StripeCheckout
                name={produit.nom}
                description={`${produit.montant} ${produit.devise}`}
                image={produit.photo.url}
                ComponentClass="div"
                panelLabel="Payer"
                amount={produit.montant * 100}
                currency={produit.devise}
                stripeKey={STRIPE_PUBLIC_KEY}
                locale="fr"
                billingAddress={true}
                zipCode={true}
                allowRememberMe={false}
                token={this.onToken}
                opened={this.onOpened}
                closed={this.onClosed}
              >
                <button className="primary-btn">Faire un don de <strong>{produit.montant}&nbsp;{produit.devise}</strong></button>
              </StripeCheckout>
              <span>
                <a href="https://www.impots.gouv.fr/portail/particulier/questions/jai-fait-des-dons-une-association-que-puis-je-deduire" target="_blank">Réduction d'impôt</a> de {reductionImpots}&nbsp;{produit.devise}
              </span>
            </div>
            {!produit.details ? '' : produit.details.split('\n').map((detail, key) => (
              <p key={key}>{detail}</p>
            ))}
          </div>
        )}
        {paymentError && (
          <div>
            <p>Une erreur est survenue.</p>
            <p>Vous pouvez réessayer plus tard.</p>
          </div>
        )}
        {paymentSucess && (
          <div>
            <p>Merci {paymentSucess.data.success.source.name} pour votre soutien !,</p>
            <p>Vous recevrez dans quelques minutes un email de confirmation du paiement.</p>
          </div>
        )}
      </div>
    )
  }
}

export default Produit
