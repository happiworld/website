import React from 'react'
import Produit from '../components/produit'

const PageParrainerUneFamille = ({ data }) => (
  <div>
    <h1>Parrainer une famille</h1>
    {data.allProduits.edges.map(({ node }) => (
      <Produit key={node.id} produit={node} />
    ))}
  </div>
)

export default PageParrainerUneFamille

export const query = graphql`
  query GetProduits {
    allProduits {
      edges {
        node {
          id
          nom
          montant
          devise
          description
          photo {
            handle
            url
          }
        }
      }
    }
  }
`
