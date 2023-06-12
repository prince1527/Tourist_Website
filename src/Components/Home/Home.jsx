import React from 'react'
import './home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">
                        plan your trip with XPLORE
                    </h1>

                    <p className="subTitle">
                        Travel to your favourite city with respectful of the environment
                    </p>

                    <button className="btn">
                        <a href="#">Explore Now</a>
                    </button>
                </div>

                <div className="homeCard grid">
                    <div className="locationDiv">
                        <label htmlFor="locationDiv">Loccation</label>
                        <input type="text" placeholder='Dream Destination'/>
                    </div>

                    <div className="distDiv">
                        <label htmlFor="distance">Loccation</label>
                        <input type="text" placeholder='11/Meters' />
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Loccation</label>
                        <input type="text" placeholder='₹ 3.5 -₹ 11k' />
                    </div>
                    <div className="btn">
                        Search
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home