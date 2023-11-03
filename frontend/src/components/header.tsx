import { useState } from 'react'
import Navbar from './header/navbar';
import Hamburger from './header/hamburger';

const Header = () => {
  const containerNav:string = "hidden lg:flex lg:relative lg:flex-row lg:justify-between"
    
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  const [menuClass, setMenuClass] = useState(containerNav)

<<<<<<< HEAD
  /* function handleButtonClick(clicked: boolean) {
    setIsButtonClicked(clicked);
    if(!isButtonClicked) {
      setMenuClass()

    } else {
      setMenuClass(containerNav)
    }
  } */
=======
  function handleButtonClick(clicked: boolean) {
    setIsButtonClicked(clicked);
    if(!isButtonClicked) {
      setMenuClass(containerNav)
      console.log('true')

    } else {
      setMenuClass(containerNav)
      console.log('mama')
    }
  } 
>>>>>>> 08099502e5d7eb7cbadbcc86e856582939ecd273
    
  return (
    <header 
      className="
        flex 
        fixed 
        z-50 
        justify-center 
        items-center 
        py-4 
        w-screen 
        h-16 
      bg-white
      "
    >
      <div 
        className="
          px-10 w-full 
          lg:mx-auto lg:max-w-screen-xl
        "
      >
        <div 
          className="
            flex 
            relative
            z-40
            flex-row 
            justify-between 
            items-center
          "
        >
          <Navbar/>  
          <Hamburger 
<<<<<<< HEAD
            onButtonClick={()=>{}}
=======
            onButtonClick={handleButtonClick}//(e)=>{console.log("Moin bin da",e)}
>>>>>>> 08099502e5d7eb7cbadbcc86e856582939ecd273
          />      
        </div>
      </div>
    </header>
  )
}

export default Header


