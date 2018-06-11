import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import {
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

    axios.post(API_PAYMENT_STRIPE_URI, { produit, token })
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
  
    return (
      <div>
        <h3>{produit.nom}</h3>
        <p>{produit.description}</p>
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
        {!paymentError && !paymentSucess && (
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
            <button>Bouton de paiement</button>
          </StripeCheckout>
        )}
      </div>
    )
  }
}

export default Produit
