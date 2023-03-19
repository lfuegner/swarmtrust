import React, {useState} from 'react'
import styles from '../styles/components/Traits.module.scss'

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



    return (
        <div className={styles.wrapper}>
                <div className={styles.trait}>
                    <h3>Poap Traits</h3>
                    <button
                    onClick={TraitSwitch}>Arrow</button>
                </div>

                <div className={traitSwitchToggled ? styles.region : styles.hidden}>
                    <ColorTrait />
                    <AnimalTrait />
                    <FibonacciTrait />
                </div>
                
                <hr className={styles.separator}></hr>

                <div className={styles.trait}>
                    <h3>Information</h3>
                    <button
                    onClick={InfoSwitch}>Arrow</button>
                </div>

                <div className={infoSwitchToggled ? styles.region : styles.hidden}>
                    <h1>{color}, {animal}, {fibonacci}</h1>
                </div>

                <hr className={styles.separator}></hr>
            </div>
    )
}

function ColorTrait({}) {

    const [color, setColor] = useState('black');
    

    return(
        <div>
            <h4 className={styles.h4}>Color Trait: {color}</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: Black */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='Color Trait' 
                    value='black'
                    onChange={e=>setColor(e.target.value)}>    
                    </input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: White */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='Color Trait' 
                    value='white' 
                    onChange={e=>setColor(e.target.value)}>
                    </input>
                    <div className={styles.button}></div>
                </label>

            </div>
        </div>
        )
}

function AnimalTrait() {

    const [animal, setAnimal] = useState('Whale')
    
    return(
        <div>
            <h4 className={styles.h4}>Animal Trait: {animal}</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: Whale */}
                <label>
                    <input 
                    className={styles.input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Whale'
                    onChange={e => setAnimal(e.target.value)}>
                    </input>
                    <div className={styles.button}>
                    <div>
                            <div>
                                <span>Whale</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Shark */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Shark' 
                    onChange={event=>setAnimal(event.target.value)}></input>
                    <div className={styles.button}>
                    <div>
                            <div>
                                <span>Shark</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Flipper */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Flipper' 
                    onChange={e=>setAnimal(e.target.value)}>
                    </input>
                    <div className={styles.button}>
                        <div>
                            <div>
                                <span>Flipper</span>
                            </div>
                        </div>
                    </div>
                </label>

                {/*Color Label: Sea eagle */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='Animal Trait' 
                    value='Sea eagle' 
                    onChange={e=>setAnimal(e.target.value)}></input>
                    <div className={styles.button}>
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
    return(
        <div>
            <h4 className={styles.h4}>Fibonacci Trait: {fibonacci}</h4>
            <div className={styles.radiogroup} role='radiogroup'>
                {/*Color Label: Off */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='color trait' 
                    value='off'
                    onChange={e => setFibonacci(e.target.value)}>
                    </input>
                    <div className={styles.button}></div>
                </label>

                {/*Color Label: On */}
                <label>
                    <input className={styles.input} 
                    type='radio' 
                    name='color trait' 
                    value='on' 
                    onChange={e => setFibonacci(e.target.value)}>
                    </input>
                    <div className={styles.button}></div>
                </label>

            </div>
        </div>
    )
}