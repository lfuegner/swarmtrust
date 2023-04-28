import {useRouter} from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import { useState, useEffect} from 'react' 
import {ethers, BigNumber} from 'ethers';
import poap from './SWRMPP.json';
import { addAffiliate, affiliateCollection } from '@/firebase/controller'
import { onSnapshot } from 'firebase/firestore'

const poapAddress = "0x7e25d7Ff02cC2057EcF8D2FBf5d053619CE7b541" //from Etherscan

declare var window: any;

export default function Mint() {
  const router = useRouter()
  const {tokenID} = router.query
  //console.log(tokenID) war der undefined log

  //Video
  const [accounts, setAccounts] = useState([])
  const [mintAmount, setMintAmount] = useState<number>(1)
  const isConnected = Boolean(accounts[0]);

  const [tokenId, setTokenId] = useState<number>(1)

  
  /* useEffect(()=> onSnapshot(affiliateCollection, (snapshot) => {
    console.log(snapshot)
  })) */

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccounts(accounts);
    } 
  }

  async function handleMintClick(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        poapAddress,
        poap.abi, 
        signer
      );
      try{
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString())
        });
        const hash:string = response.hash
        const from:string = response.from
        
        /* await addAffiliate({
          tokenId: tokenId,
          hash: hash,
          from: from,
          valid: false,
        }); */
        console.log('response: ',response)
      } catch (err) {
        console.log('error: ',err)
      }
    }
  }

  interface MyDictionary {
    hash: string;
    from: string;
  } 

  {/*TEST FUNCTION to save to data properly*/}
  async function handleFirebaseClick(){
    
    const response2:MyDictionary = {
      hash: "rdhsh",
      from: "erahseh"
    }
    
    const hash:string = response2.hash
    const from:string = response2.from
    console.log("TEST",hash)
    console.log(response2)
    console.log("TEST",from)

    /* addAffiliate({
      tokenId: tokenId,
      hash: hash,
      from: from,
      valid: false,
    }); */
  }

  const cssButton="w-40 h-12  text-white bg-green-500 rounded-lg opacity-75 hover:opacity-100"

  return (
    <>
      <Head>
        <title>Swarmtrust | Mint</title>
        <meta name="description" content="Mint our Community Poap NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
          <div className="relative flex flex-col justify-center items-center pt-16">
            {isConnected ? 
            (<p>Connected</p>) : 
            (<button
              className={cssButton}
              onClick={connectAccount}>
              Connect
            </button>)
            }
              
            {isConnected ? 
            (<button
              className={cssButton}
              onClick={handleMintClick}>
              Mint
            </button>) : (
            <p> You must be connected</p>)
            }

            <button className={cssButton} onClick={handleFirebaseClick}>
              Firestore Eintrag
            </button>
          </div>
      </main>
    </>
  )
}
