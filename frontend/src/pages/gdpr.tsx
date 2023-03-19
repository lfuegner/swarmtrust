import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Privacy.module.scss'

export default function GDPR() {

    return (
      <>
        <Head>
          <title>Swarmtrust | GDPR</title>
          <meta name="description" content="Swarmtrust | GDPR" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.body}>
          <Header />
        <main className={styles.main}>
            <h1 className={styles.h1}>Genral Data Protection Regulation</h1>
            <span className={styles.underline}></span>
            <h2 className={styles.h2}>1. Privacy at a Glance</h2>
            <p className={styles.text}>
            <strong className={styles.bold}>General information</strong><br/>
            The following notes provide a simple overview of what happens to your personal data when youvisit this website.
            Personal data is all data with which you can be personally identified. 
            Find detailed information on the subject of dataprotection. 
            Please see our data protection declaration listed under this text.<br/>
            <strong className={styles.bold}>Data collection on this website</strong><br/>
            <br/>
            <strong className={styles.bold}>Who is responsible for data collection on this website?</strong><br/>
            The dataprocessing on this website is carried out by the website operator. 
            Its contact details can be found inthe imprint of this website.
            </p>
          
        </main>
        </div>
      </>
    )
  }