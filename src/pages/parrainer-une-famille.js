import React from 'react'
import Produit from '../components/produit'

const PageParrainerUneFamille = ({ data }) => (
  <div>
    <h2>Parrainer une famille</h2>
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
          details
          photo {
            handle
            url
          }
        }
      }
    }
  }
`
