import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/components/Header.module.scss'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa';

const Header = () => {
    
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    
    const [menuClass, setMenuClass] = useState(styles.containerNav)
    

    function handleButtonClick(clicked: boolean) {
        setIsButtonClicked(clicked);
        if(!isButtonClicked) {
            setMenuClass(styles.containerNav2)

        } else {
            setMenuClass(styles.containerNav)
        }
    }
    
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.containerLogoNav}>
                        <Logo/>
                        <div className={menuClass}>
                            <Navbar/>
                        </div>
                    </div>
                    <div >
                    <Hamburger onButtonClick={handleButtonClick}/>
                    </div>       
                </div>
            </div>
        </header>
    )
}

export default Header
function Logo(){
    return(
        <Link href = "/" className={styles.logo}>
            <span className={styles.spanL}>
                <Image
                src="/Rastergrafik.svg" 
                alt=" Swarmtrust Logo"
                width={128}
                height={36}
                /> 
                
            </span>
        </Link>

    )
}

const Navbar = () => {
    return(
        <ul className={styles.nav}>
            <li className={styles.navItem}>
                <Link href = "/mint" className={styles.navLink}>Mint</Link>
            </li>
            <li className={styles.navItem}>
                <Link href = "/gdpr" className={styles.navLink}>GDPR</Link>
            </li>
            <li className={styles.navItem}>
                <Link href = "/impressum" className={styles.navLink}>Impressum</Link>
            </li>
        </ul>
    )
}



/* const Socialmedia = () => {
    return(
        <ul className={styles.nav}>
            <li className={styles.navItem}>
                <Link href = "https://discord.gg/AY4SHVYRT2" className={styles.navLink}>Discord</Link>
            </li>
            <li className={styles.navItem}>
                <Link href = "https://twitter.com/SWARMtrust" className={styles.navLink}>Twitter</Link>
            </li>
            <li className={styles.navItem}>
                <Link href = "https://opensea.io/" className={styles.navLink}>Opensea</Link>
            </li>
        </ul>
    )
} */

type HamburgerProps = {
    onButtonClick: (clicked: boolean) => void;
  };

const Hamburger = ({ onButtonClick }: HamburgerProps) => {

    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
 
    function handleClick() {
        setIsButtonClicked(!isButtonClicked);
        onButtonClick(!isButtonClicked);
      }
    
    return (
        <button
        className={styles.hamburger}
        onClick={handleClick}>
            <FaBars />
        </button>
    )
}
