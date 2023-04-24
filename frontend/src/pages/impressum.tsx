import Head from 'next/head'
import Header from '../components/header'

export default function Impressum() {

    return (
      <>
        <Head>
          <title>Swarmtrust | Impressum</title>
          <meta name="description" content="Swarmtrust | Impressum | Information according to 5§ TGM" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header />
        <div className="flex flex-col px-12 pt-16 w-screen font-sans">
            <h1 className="text-5xl font-bold">Impressum</h1>
            <span className="my-4 w-full h-px bg-gray-700"></span>
            <h2 className="text-2xl font-semibold">Information according to §5 TGM</h2>
            <p className="mt-4">
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
          
        </div>
        </main>
      </>
    )
  }