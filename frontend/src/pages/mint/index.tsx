import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import styles from '../../styles/Mint.module.scss'
import { useState } from 'react' 
import {ethers, BigNumber} from 'ethers';
//import poap from '.Poap.json';

 const poapAddress = "" //from Etherscan


export default function Mint() {
  const router = useRouter()
  const {tokenID} = router.query
  console.log(tokenID)

  //Video
  const [accounts, setAccounts] = useState([])
  const [mintAmount, setMintAmount] = useState(1)
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccounts(accounts);
    } 
  }

  async function handleMint(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        poapAddress,
        poap.abi, 
        signer
      );
      try{
        const response = await contract.mint(BigNumber.from(mintAmount));
        console.log('response: ',response)
      } catch (err) {
        console.log('error: ',err)
      }
    }
  }

  return (
    <>
      <Head>
        <title>Swarmtrust | Mint</title>
        <meta name="description" content="Mint our Community Poap NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.body}>
          <Header />


          
          <div className={styles.main}>
          {isConnected ? (
          <p>Connected</p>) : (
          <button
            className={styles.button}
            onClick={connectAccount}>
            Connect
            </button>)}
            
            {isConnected ? (<button
            className={styles.button}
            onClick={handleMint}>
            Mint
            </button>) : (
              <p> You must be connected</p>
            )
            }
            
          </div>
      </main>
    </>
  )
}
