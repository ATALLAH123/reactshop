import React from 'react'
import Products from './Products'
export default function Home() {
    return (
        <div className='Hero'>
            <div className="card text-bg-dark border-0 mb-0">
                <img src="./welcomeimg.webp" className="card-img" alt="Background" height="450px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="countainer">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS.</p>
                        <button id="bottone1"><strong>Discover features</strong></button>

                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
