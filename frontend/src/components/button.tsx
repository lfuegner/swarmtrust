import * as React from 'react';
//import { MetaMaskInpageProvider } from '@metamask/providers';


//const ethereum = window.ethereum as MetaMaskInpageProvider;

declare var window: any
const MetamaskButton = () => {

  const [defaultAccount, setDefaultAccount] = React.useState(null)
  const [userBalance, setUserBalance] = React.useState(null)
  const [errorMessage, setErrorMessage] = React.useState<string>('')

  const connectWallet = () => {
  
      window.ethereum.request({method: 'eth_requestAccounts'}).then((result:any) =>
        accountChangeHandler(result[0]))
        .catch (setErrorMessage("Install Metamask")) 
    

  }

  const accountChangeHandler = (newAccount:any) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount)

  }

  const getUserBalance = (address:string) => {

  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Metamask</button>
      <h3>Address: {defaultAccount}</h3>
      <h3>Balance: {userBalance}</h3>
      {errorMessage}
    </div>
  )
}
    
export default MetamaskButton;