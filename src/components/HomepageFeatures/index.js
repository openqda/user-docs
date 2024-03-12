import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'Data Collection',
    img: 'img/data_collection.png',
    description: (
      <>
        Some line on data collection
      </>
    ),
  },
  {
    title: 'Data Preparation',
    img: 'img/data_preparation.png',
    description: (
      <>
        Some lines on data preparation
      </>
    ),
  },
  {
    title: 'Coding',
    img: 'img/data_coding.png',
    description: (
      <>
        Some lines on coding
      </>
    ),
  },
  {
    title: 'Analysis',
    img: 'img/data_analysis.png',
    description: (
      <>
        Some lines on analysis
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
