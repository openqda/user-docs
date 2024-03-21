import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Data Collection',
    img: 'img/data_collection.png',
    description: (
      <>
        Here you upload, create or import data.</br>
        In the Early Access, you can only import .txt and .rtf file types.
      </>
    ),
  },
  {
    title: 'Data Preparation',
    img: 'img/data_preparation.png',
    description: (
      <>
        Here you prepare your data, e.g. you fix typos in your transcripts.
      </>
    ),
  },
  {
    title: 'Coding',
    img: 'img/data_coding.png',
    description: (
      <>
        Here you code your data and create your code systems.
      </>
    ),
  },
  {
    title: 'Analysis',
    img: 'img/data_analysis.png',
    description: (
      <>
        Here you analyse your coded data.
      </>
    ),
  }
]

function Feature ({ img, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={img}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
