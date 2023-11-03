'use client'

import Link from "next/link"
import Image from "next/image"

const Navbar = () => {

  const cssLink:string = ""

  return(
    <div className="flex relative justify-between items-center">
      {/*Logo*/}
      <Link 
        href = "/" 
        className="z-20 no-underline cursor-pointer"
      >
        <Image
<<<<<<< HEAD
          src="/frontend/public/Logo.svg" 
=======
          src="/Logo.svg" 
>>>>>>> 08099502e5d7eb7cbadbcc86e856582939ecd273
          alt=" Swarmtrust Logo"
          width={128}
          height={36}
        />     
      </Link>     
             
      {/*Navbar flex-col justify-start pt-16*/}
      <ul 
        className="
          hidden 
          lg:flex lg:items-center lg:flex-row lg:pt-0 
        "
      >
        <li className="opacity-75 hover:opacity-100">
          <Link 
            href = "/mint" 
            className="
              relative 
              block 
              py-2 
              px-[.875rem] 
              w-full 
              font-semibold 
              font-gray-700
              text-sm
              text-left
              no-underline
            "
          >
            Mint
          </Link>
        </li>
        <li className="opacity-75 hover:opacity-100">
          <Link href = "/gdpr"
           className="
              relative 
              block 
              py-2 
              px-[.875rem] 
              w-full 
              font-semibold 
              font-gray-700
              text-sm
              text-left
              no-underline
            ">
            GDPR
          </Link>
        </li>
        <li className="opacity-75 hover:opacity-100">
          <Link href = "/impressum" className="
              relative 
              block 
              py-2 
              px-[.875rem] 
              w-full 
              font-semibold 
              font-gray-700
              text-sm
              text-left
              no-underline
            ">
            Impressum
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar