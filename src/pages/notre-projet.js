import React from 'react'
import Link from 'gatsby-link'

import CarteVillagesImg from '../assets/images/villages.jpg'
import CasamanceImg from '../assets/images/casamance.jpg'
import KitSolaireImg from '../assets/images/kitsolaire.jpg'
import PhotoVillageImg from '../assets/images/villages2.png'
import RepartitionBudgetImg from '../assets/images/repartition-budget.jpg'
import SenegalImg from '../assets/images/senegal.jpg'

const PageNotreProjet = () => (
  <div className="main-content notre-projet">
    <h2 className="mb-4">Notre projet</h2>
    <h3>Aidez-nous à aller diffuser la coupe du monde de Football 2018 &amp; apporter des solutions électriques à des villages au Sénégal</h3>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/k6He8rTzxJ4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>Le football est le langage le plus parlé à travers le monde. N’importe quand et n’importe où, le football a le pouvoir d’unir un peuple, de faire naître des moments de communion et de fraternité exceptionnels.</p>
    <p><strong>La Coupe du Monde de football 2018 rassemblera 32 équipes et plus d’un milliard d’êtres humains autour d’une même passion</strong>. Certains se regrouperont, dans les stades, dans les bars, confortablement installés dans leur canapé devant leur télévision.</p>
    <p>D’autres n’auront pas cette chance.</p>
    <p><em>« Actionner l’interrupteur en rentrant chez soi, allumer la télévision, ouvrir le réfrigérateur. Tant de gestes quotidiens qui nous paraissent instinctifs. Nos vies occidentales sont connectées pour tout, partout, tout le temps. A tel point que nous n’imaginons pas qu’il y ait encore plus d’un milliard de personnes dans le monde vivant sans accès à l’électricité. »</em></p>
    <p>Au Sénégal en 2016, on estime que plus de 4 personnes sur 10 n’ont pas accès à l’électricité. Le pays présente un taux d’électrification de 56,7% en 2017. Seules 20% des personnes résidant en zones rurales bénéficient de ces avancées technologiques.</p>
    <p>L’accès à l’électricité est un facteur majeur de développement socio-économique, de lutte contre la pauvreté et d’amélioration des conditions de vie des populations. En effet, l’accès à l’électricité de manière pérenne a un impact sur de multiples dimensions : la lumière, la santé, l’alimentation, le commerce, la communication, ou encore le divertissement.</p>
    <p>Pas d’électricité signifie en effet aussi pour les supporters que nous sommes : pas de diffusion de la Coupe du monde de foot 2018 pour de nombreux Sénégalais, alors même que leur équipe nationale est sélectionnée pour la compétition et que le pays porte l’amour du football dans son ADN.</p>
    <h4>La Casamance</h4>
    <p>
      <img alt="Carte Afrique" src={SenegalImg} className="w50" />
      <img alt="Carte Sénégale" src={CasamanceImg} className="w50" />
    </p>
    <p>La Casamance, région située au Sud-Ouest du pays est particulièrement exposée à ces problématiques. Située entre l’océan Atlantique, la Guinée-Bissau et la Gambie, la région est traversée par le fleuve Casamance. Son économie se base principalement sur la pêche et la culture du riz.</p>
    <p>Théâtre d’un long conflit armé endormi depuis le début des années 1980, la Casamance est aujourd’hui relativement pacifiée mais souffre d’une pauvreté structurelle. Plus de 75% de ses habitants de Casamance vivent encore en dessous du seuil de pauvreté.</p>
    <h3>Notre projet : #LIGHTSONSENEGAL, MOBILE WORLD CUP</h3>
    <p>En réponse à ces inégalités, et dans le but de partager sa passion du football, l’association HAPPi a imaginé le projet <strong>#LightsOnSenegal : Mobile World Cup</strong> qui présente deux volets.</p>
    <h4 id="projet-phase-1">Phase 1: diffusion itinérante de la coupe du monde</h4>
    <p>Du 15 au 30 juin 2018, nous partirons en caméra embarquée et sillonnerons à bord d’un camion la région de Casamance, au sud du Sénégal, afin de diffuser en vidéoprotection sur un écran géant les 3 matchs de qualification du Sénégal dans des villages n’ayant pas accès à l’électricité, et donc à la télévision.</p>
    <p>Avec l’appui de l’ONG franco-sénégalaise Futur au Présent (FAP), nous avons identifié trois villages de Casamance qui répondent à nos critères afin de leur proposer de partager avec eux ces moments de sport et d’émotions.</p>
    <p>Les villages sélectionnés sont :</p>
    <ul>
      <li><strong>Kachouane</strong>, village abritant une centaine d’habitants, situé au bord du fleuve Casamance. Nous y diffuserons le match qui opposera la Pologne au Sénégal le 19 juin à 15h00.</li>
      <li><strong>Carabane</strong>, village de 131 habitants, situé sur un ilot proche de la mer où sera retransmis le match qui verra s’opposer le Japon au Sénégal le 24 juin à 15h00.</li>
      <li><strong>Affiniam Bouteme</strong>, situé dans les terres au nord de Ziguinchor compte environ 388 habitants. Nous encouragerons avec eux le Sénégal face à la Colombie le 28 juin à 14h00.</li>
    </ul>
    <p>
      <img alt="Carte villages" src={CarteVillagesImg} className="w50" />
      <img alt="Photo village" src={PhotoVillageImg} className="w50" />
    </p>
    <p>Ces journées seront également l’opportunité de mettre en place d’autres activités ludiques autour du sport et de ses valeurs, de l’environnement et de la découverte des pays contre lesquels joueront les lions de la Téranga.</p>
    <p>Dans le même temps, nous nous attellerons à proposer une vaste campagne de communication afin de diffuser sur les réseaux sociaux l’expérience vécue dans ces villages. Par là même, nous souhaitons également sensibiliser le grand public aux problématiques liées au non-accès à l’électricité afin de les inciter à participer au second moment de notre projet.</p>
    <h4 id="projet-phase-2">Phase 2 : équipement électrique des villages</h4>
    <p>La deuxième phase de notre projet débutera après la Coupe du Monde et aura pour but d’effectuer une distribution de matériel à énergie solaire permettant aux habitants des villages visités d’avoir accès à l’électricité et à la lumière. Au-delà d’une action ponctuelle, il nous paraît nécessaire de proposer des réponses durables aux défis du quotidien qu’entraîne l’absence d’accès à l’électricité.</p>
    <p>Pour cela nous avons tout d’abord identifié les besoins des populations locales en nous appuyant sur l’expertise de Futur Au Présent, notre partenaire pour le projet. Née en 2012, l’association Futur au Présent International a pour objectif de créer des programmes sociaux, diagnostiqués en amont par des études de recherche, et financés par des activités économiques. Implantée au Sénégal, FAP vise à contribuer à sortir de la pauvreté les familles les plus précaires en construisant un dispositif global et intégré agissant dans les domaines de la santé, de l’éducation, de l’habitat de l’alimentation ou encore de l’accès au numérique. Leur connaissance de la zone est un atout majeur dans la réalisation de notre projet.</p>
    <p>Dès lors, nous avons fait le choix d’une distribution de kits solaires conçus pour le quotidien d’un ménage de 3 à 6 personnes et contenant : 3 points d’éclairage + 1 prise USB pour recharger un téléphone portable ou de petits appareils électroniques + 1 smartphone proposant un contenu digital pédagogique autour de problématiques de santé, d’environnement ou encore d’éducation.</p>
    <p>Les villages ciblés par notre projet comptent environ 130 ménages. C’est autant de kits qu’il s’agit aujourd’hui de financer !</p>
    <p>A Cachouane, Karabane et Affiniam Bouteme, l’accès à l’énergie permettra aux habitants de s’éclairer en faisant la cuisine, aux enfants de faire leurs devoirs après la nuit tombée mais également de communiquer en chargeant leur téléphone portable par exemple.</p>
    <p>Seul(e) ou en famille, entre amis ou entre collègues aidez-nous à atteindre nos objectifs en finançant l’achat d’un ou plusieurs kits. Pour 117€, vous pouvez faire le choix de parrainer une des familles des villages que nous visiterons et de contribuer activement à l’amélioration de ses conditions de vie. Au-delà de moments de joie et de sport nous aurons alors aussi les moyens d’apporter des solutions durables et concrètes au problème de l’accès à l’électricité en Casamance.</p>
    <p className="center">
      <img alt="Kit solaire" src={KitSolaireImg} className="w50" />
    </p>

    <h3>À quoi va nous servir le financement ?</h3>
    <p>Nous souhaitons que les donateurs soient acteurs du projet, par leurs idées. Notre équipe sera très réactive sur les réseaux sociaux pour échanger et répondre aux questions. Construisons ce projet tous ensemble !</p>
    <p>HAPPI a imaginé un voyage en 2 étapes :</p>
    <h4>1 - Aller au Sénégal et diffuser la Coupe du Monde FIFA 2018</h4>
    <p>L’équipe HAPPI se rendra au Sénégal et louera les équipements nécessaires à la diffusion de 3 matchs dans 3 villages (traversées en bateau, camionnette, vidéoprojecteur et écran, système de son, générateur électrique, boitier Canal +, bâches, tapis etc.) Divers ateliers culturels seront également proposés une fois sur place. Le budget estimé est d’environ 3500 euros pour 17 jours. L’hébergement de l’équipe et les frais quotidiens seront à leurs frais : nous dormirons chez les familles des villages que nous visitons.</p>
    <p className="center">
      <img alt="Répartition budget" src={RepartitionBudgetImg} className="w50" />
    </p>
    <h4>2- Acheter du matériel électrique pour les villages</h4>
    <p>Nous avons récolté les 3500 euros nécessaires au financement de la phase de diffusion. Nous souhaitons désormais mettre en vente les kits qui permettront d’éclairer l’ensemble des familles de ces 3 villages.</p>
    <p>Il y a 130 foyers à équiper, et nous comptons sur vous pour poser votre pierre à l’édifice, ou plutôt votre lampe au plafond.</p>
  </div>
)

export default PageNotreProjet
