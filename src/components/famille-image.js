import React from 'react'
import './famille-image.css'

const FamilleImage = ({ photo, paiement }) => (
  <img
    src={`https://media.graphcms.com/resize=w:350,h:230,fit:clip/${photo.handle}`}
    className={paiement ? 'couleur' : 'grisee'}
  />
)

export default FamilleImage