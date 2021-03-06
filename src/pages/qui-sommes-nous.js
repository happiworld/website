import React from 'react'
import Link from 'gatsby-link'

const PageQuiSommesNous = ({ data }) => {
  const photoStack = data.allStaffs.edges.map(({ node }) => node)
  const photoLines = []

  while (photoStack.length > 0) {
    photoLines.push(photoStack.splice(0, 3))
  }

  return (
    <div>
      <h2>Qui sommes nous</h2>
      <h3>Notre histoire</h3>
      <p>Créée en 2018 par des jeunes passionnés de sports et sensibles aux causes humanitaires, l’association HAPPI (Help Abroad to Play Progress & Improve) a pour objectif de mener des actions solidaires à travers des événements sportifs internationaux.</p>
      <p>L’accès a l’électricité est une problématique importante, pour laquelle de nombreuses solutions techniques existent. Cependant, des efforts considérables restent à fournir pour équiper les 1,1 milliards d’habitants de la planète qui en sont aujourd’hui dépourvus.</p>
      <table className="table">
        <thead>
          <tr>
            <th colSpan="3">Population privée d'accès à l'électricité, selon la région du monde</th>
          </tr>
          <tr>
            <th></th>
            <th>Part en %</th>
            <th>Nombre en millions</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>Afrique subsaharienne</td>
          <td>62,5</td>
          <td>609</td>
        </tr>
        <tr>
          <td>Asie du Sud</td>
          <td>19,9</td>
          <td>343</td>
        </tr>
        <tr>
          <td>dont Inde</td>
          <td>20,8</td>
          <td>270</td>
        </tr>
        <tr>
          <td>Reste du monde</td>
          <td>3,0</td>
          <td>108</td>
        </tr>
        <tr>
          <td>Monde</td>
          <td>14,7</td>
          <td>1060</td>
        </tr>
        </tbody>
      </table>
      <p>Un focus particulier nous a semblé important sur l’Afrique, qui abrite plus de 62% de la population mondiale privée d’électricité.</p>
      <p>HAPPI souhaite travailler main dans la main avec des associations dont la présence sur des zones non-éclairées est consolidée, afin de garantir le suivi de l’installation et la pérennité des solutions électriques qui seront proposées.</p>
      <p>Notre premier partenaire, l’association Futur au Présent (FAP), intervient dans la région de Casamance, au sud du Sénégal, depuis 2012. Leur connaissance des besoins des populations locales est un réel atout pour HAPPi.</p>
      <h3>Notre équipe</h3>
      <p>
        L’Equipe de l’association HAPPi est composée de profils diversifies. Certains travaillent dans la communication, d’autres dans l’humanitaire, l’informatique, l’énergie ou encore la gestion. Ce mélange de compétences est d’une grande utilité pour les projets menés. Il offre une complémentarité sur les différents aspects a aborder dans la mise en place de nos actions, et permet à l’équipe de prendre du recul sur ses décisions.
      </p>
      {photoLines.map((photoLine, lineKey) => (
        <div key={lineKey} className="row">
          {photoLine.map((node, key) => (
            <div className="col-4 photo-card">
              <img src={node.photo.url} alt={`Photo de ${node.nom}`} style={{ width: '189px', height: '270px' }}  /> <span>{node.nom}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PageQuiSommesNous

export const query = graphql`
  query GetStaffs {
    allStaffs {
      edges {
        node {
          id
          nom
          role
          photo {
            handle
            url
          }
        }
      }
    }
  }
`