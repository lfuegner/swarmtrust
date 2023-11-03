import Head from 'next/head'
import Header from '../components/header'

export default function GDPR() {

    return (
      <>
        <Head>
          <title>Swarmtrust | GDPR</title>
          <meta name="description" content="Swarmtrust | GDPR" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Header />
        <div className="flex flex-col px-12 pt-16 w-screen font-sans">
            <h1 className="text-5xl font-bold">Genral Data Protection Regulation</h1>
            <span className="my-4 w-full h-px bg-gray-700"></span>
            <h2 className="text-2xl font-semibold">1. Privacy at a Glance</h2>
            <p className="mt-4">
            <strong className="">General information</strong><br/>
            The following notes provide a simple overview of what happens to your personal data when youvisit this website.
            Personal data is all data with which you can be personally identified. 
            Find detailed information on the subject of dataprotection. 
            Please see our data protection declaration listed under this text.<br/>
            <strong className="">Data collection on this website</strong><br/>
            <br/>
            <strong className="">Who is responsible for data collection on this website?</strong><br/>
            The dataprocessing on this website is carried out by the website operator. 
            Its contact details can be found inthe imprint of this website.
            </p>
          
        </div>
        </main>
      </>
    )
  }