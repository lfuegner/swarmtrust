import React, {useState} from 'react'

//class hinzufügen hidden (display: none !important)

export function Trait() {

    const [color, setColor] = useState('black')
    const [animal, setAnimal] = useState('Whale')
    const [fibonacci, setFibonacci] = useState(false)
    
    const [traitSwitchToggled, setTraitSwitchToggeld] = useState(false)
    const [infoSwitchToggled, setInfoSwitchToggeld] = useState(false)

    const TraitSwitch = () => {
        traitSwitchToggled? setTraitSwitchToggeld(false) : setTraitSwitchToggeld(true);
    }

    const InfoSwitch = () => {
        infoSwitchToggled? setInfoSwitchToggeld(false) : setInfoSwitchToggeld(true);
    }

    const trait:string = "flex justify-between items-center px-4 h-12 text-white" 
    const region:string = "pt-0 px-4 pb-5"
    const hidden:string = "hidden"
    const separator:string = "w-full border-b border-gray-500 border-solid  opacity-60"


    return (
        <div className="flex flex-col">
                <div className={trait}>
                    <h3>Poap Traits</h3>
                    <button
                    onClick={TraitSwitch}>Arrow</button>
                </div>

                <div className={traitSwitchToggled ? region : hidden}>
                    <ColorTrait />
                    <AnimalTrait />
                    <FibonacciTrait />
                </div>
                
                <hr className={separator}></hr>

                <div className={trait}>
                    <h3>Information</h3>
                    <button
                    onClick={InfoSwitch}>Arrow</button>
                </div>

                <div className={infoSwitchToggled ? region : hidden}>
                    <h1>{color}, {animal}, {fibonacci}</h1>
                </div>

                <hr className={separator}></hr>
            </div>
    )
}

function ColorTrait({}) {

    const [color, setColor] = useState('black');

    const h4:string = "text-white font-normal opacity-50"
    const input:string = "absolute w-px h-px"
    const button:string = "flex justify-center items-center text-sm font-semibold rounded-lg bg-gray-500 h-16 cursor-pointer"
    const radiogroup:string = "grid grid-cols-[auto-fit_minmax(25%,_1fr)] p-1 bg-gray-500  rounded-lg"
    

    return(
        <div>
            <h4 className={h4}>Color Trait: {color}</h4>
            <div className={radiogroup} role='radiogroup'>
                {/*Color Label: Black */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='Color Trait' 
                    value='black'
                    onChange={e=>setColor(e.target.value)}>    
                    </input>
                    <div className={button}></div>
                </label>

                {/*Color Label: White */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='Color Trait' 
                    value='white' 
                    onChange={e=>setColor(e.target.value)}>
                    </input>
                    <div className={button}></div>
                </label>

            </div>
        </div>
        )
}

function AnimalTrait() {

    const [animal, setAnimal] = useState('Whale')

    const h4:string = "text-white font-normal opacity-50"
    const input:string = "absolute w-px h-px"
    const button:string = "flex justify-center items-center text-sm font-semibold rounded-lg bg-gray-500 h-16 cursor-pointer"
    const radiogroup:string = "grid grid-cols-[auto-fit_minmax(25%,_1fr)] p-1 bg-gray-500  rounded-lg"
    
    return(
        <div>
            <h4 className={h4}>Animal Trait: {animal}</h4>
            <div className={radiogroup} role='radiogroup'>
                {/*Color Label: Whale */}
                <label>
                    <input 
                    className={input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Whale'
                    onChange={e => setAnimal(e.target.value)}>
                    </input>
                    <div className={button}>
                    <div>
                            <div>
                                <span>Whale</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Shark */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Shark' 
                    onChange={event=>setAnimal(event.target.value)}></input>
                    <div className={button}>
                    <div>
                            <div>
                                <span>Shark</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Flipper */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Flipper' 
                    onChange={e=>setAnimal(e.target.value)}>
                    </input>
                    <div className={button}>
                        <div>
                            <div>
                                <span>Flipper</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Sea eagle */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Sea eagle' 
                    onChange={e=>setAnimal(e.target.value)}></input>
                    <div className={button}>
                        <div>
                            <div>
                                <span>Sea Eagle</span>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}

function FibonacciTrait() {

    const [fibonacci, setFibonacci] = useState('off')

    const h4:string = "text-white font-normal opacity-50"
    const input:string = "absolute w-px h-px"
    const button:string = "flex justify-center items-center text-sm font-semibold rounded-lg bg-gray-500 h-16 cursor-pointer"
    const radiogroup:string = "grid grid-cols-[auto-fit_minmax(25%,_1fr)] p-1 bg-gray-500  rounded-lg"
    return(
        <div>
            <h4 className={h4}>Fibonacci Trait: {fibonacci}</h4>
            <div className={radiogroup} role='radiogroup'>
                {/*Color Label: Off */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='color trait' 
                    value='off'
                    onChange={e => setFibonacci(e.target.value)}>
                    </input>
                    <div className={button}></div>
                </label>

                {/*Color Label: On */}
                <label>
                    <input className={input} 
                    type='radio' 
                    name='color trait' 
                    value='on' 
                    onChange={e => setFibonacci(e.target.value)}>
                    </input>
                    <div className={button}></div>
                </label>

            </div>
        </div>
    )
}