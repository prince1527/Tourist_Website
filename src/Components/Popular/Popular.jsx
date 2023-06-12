import React from 'react'
import './popular.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Popular Destination</h2>
                        <p>From historical cities to natural specteculars ,  come see the best of the world!</p>
                    </div>
                    <div className="iconDiv flex">
                        < BsArrowLeftShort className="icon" />
                        <BsArrowRightShort className="icon" />
                    </div> 
                </div>

                               
            </div>
        </section>
    )
}

export default Popular