const envName = process.env.NODE_ENV || 'development'

const CONSTANTS_DEVELOPMENT = require('./.env.development')
const CONSTANTS_PRODUCTION = require('./.env.production')

const CONSTANTS_DEFAULT = {
  PRODUCTION: envName === 'production',
  EMAIL_TRANSPORTER_SERVICE: 'gmail',
  EMAIL_TRANSPORTER_AUTH_USER: 'inahappiworld',
  EMAIL_TRANSPORTER_AUTH_PASS: null,
  GRAPHCMS_ENDPOINT: null,
  GRAPHCMS_TOKEN: null,
  PAYMENT_STRIPE_URI: '/api/payment/stripe',
  SERVER_HOST: 'localhost',
  SERVER_PORT: 8080,
  SERVER_BASE_URI: 'http://localhost:8080',
  STRIPE_PUBLIC_KEY: null,
  STRIPE_SECRET_KEY: null,
  get CORS_WHITELIST() {
    return this.PRODUCTION
      ? [
          'https://www.happiworld.org',
          'https://happiworld.org',
          'https://happi-website.now.sh'
        ]
      : [ this.SERVER_BASE_URI ]
  },
  get EMAIL_TRANSPORTER() {
    return {
      service: this.EMAIL_TRANSPORTER_SERVICE,
      auth: {
        user: this.EMAIL_TRANSPORTER_AUTH_USER,
        pass: this.EMAIL_TRANSPORTER_AUTH_PASS
      }
    }
  },
  get PAYMENT_STRIPE_URL() {
    return this.SERVER_BASE_URI + this.PAYMENT_STRIPE_URI
  },
  get PAYMENT_STRIPE_ECHO_URL() {
    return this.SERVER_BASE_URI + this.PAYMENT_STRIPE_ECHO_URI
  },
}

const CONSTANTS_ENV = CONSTANTS_DEFAULT.PRODUCTION ? CONSTANTS_PRODUCTION : CONSTANTS_DEVELOPMENT

module.exports = Object.assign(CONSTANTS_DEFAULT, CONSTANTS_ENV)
