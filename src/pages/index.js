import React from 'react'
import Link from 'gatsby-link'

import FamilleImage from '../components/famille-image'

const PageHome = ({ data }) => (
  <div className="main-content">
    <h2 className="mb-4">Home</h2>
    <p>
      L’association HAPPi a pour objectif de mener des campagnes d’électrification transparentes à l’occasion d’évènements sportifs internationaux. La Coupe du Monde FIFA 2018 se déroule du 14 juin au 15 juillet en Russie. A cette occasion, nous souhaitons rendre visite à nos amis du Sénégal, l’une des cinq nations qui représentera le continent Africain lors de la compétition. Les habitants de la région de Casamance, a l’extrême sud du pays, n’ont pas la chance d’avoir accès a l’électricité. Nous les rejoindrons, équipes d’un vidéoprojecteur, pour qu’ils puissent vivre ce moment de liesse, comme vous !
    </p>
    <p>
      Dans un deuxième temps, selon votre générosité, nous équiperons un maximum de familles de kits solaires, afin qu’ils puissent cuisiner, étudier, communiquer, lorsque la nuit est tombée ; et suivre les aventures de l’Equipe Nationale lors de la prochaine Coupe du Monde !
    </p>
    <p>
      Le principe est très simple, nous vous proposons de parrainer une famille qui souhaite recevoir un kit solaire. L’impact de votre don est sans intermédiaires et quasi immédiat.
    </p>
    <p className="pt-4 pb-4 center">
      <Link to="/parrainer-une-famille" className="primary-btn">Je parraine une famille</Link>
    </p>
    <p className="row">
      {data.allFamilleEclairees.edges.map(({ node }, key) => (
        <div className="col-md-4 photo-card">
          <FamilleImage key={key} {...node} />
        </div>
      ))}
    </p>
  </div>
)

export default PageHome

export const query = graphql`
  query GetFamilleEclairees {
    allFamilleEclairees {
      edges {
        node {
          id
          nom
          village
          photo {
            handle
            url
          }
          texte
          paiement {
            nom
          }
        }
      }
    }
  }
`