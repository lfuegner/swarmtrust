import { useState} from 'react'
import { FaBars } from 'react-icons/fa';

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
      <div>
        <button
          className="
            relative
            z-10
            flex
            justify-center
            items-center
            w-9
            h-9
            rounded-md

            lg:hidden
          "
          onClick={handleClick}
        >
          <FaBars />
        </button>

      </div>
  )
}
export default Hamburger;