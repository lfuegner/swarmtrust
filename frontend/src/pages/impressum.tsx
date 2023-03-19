import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Privacy.module.scss'

export default function Impressum() {

    return (
      <>
        <Head>
          <title>Swarmtrust | Impressum</title>
          <meta name="description" content="Swarmtrust | Impressum | Information according to 5§ TGM" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.body}>
          <Header />
        <main className={styles.main}>
            <h1 className={styles.h1}>Impressum</h1>
            <span className={styles.underline}></span>
            <h2 className={styles.h2}>Information according to §5 TGM</h2>
            <p className={styles.text}>
            Griesheimer Erbschafts- und Vermögensberatung UG (haftungsbeschränkt)<br/>
            <br/>
            Pfützenstraße 22<br/>
            64347 Griesheim<br/>
            Germany<br/>
            Managing Director: Johannes Peters, M.Sc.<br/>
            <br/>
            Contact: +49 178 3319 741<br/>
            E-Mail: jpeters@nojpeg.io<br/>
            Website: nojpeg.io<br/>
            <br/>
            Register Court: Darmstadt<br/>
            Registration Number: HRB 100366<br/>
            Tax ID according to § 27a UStG: DE 330540114
            </p>
          
        </main>
        </div>
      </>
    )
  }