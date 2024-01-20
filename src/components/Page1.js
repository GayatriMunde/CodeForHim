import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import img from '../Images/Page1_bg.jpg';
import music from '../Music/Page1_bg.mp3';

const Page1 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="https://www.youtube.com/watch?v=bV2GklFBaT8">H... Happy Birthday!  </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">
                        <Link
                            className="App-link"
                            to="/Stress"
                            rel="noopener noreferrer"
                        >22 ka ho gaya hai tu lmao</Link>

                    </span>
                </div>
            </nav>
            <audio src={music} autoPlay loop />
            <div className="container">
                <img
                    src={img}
                    alt="Full Length"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            <div className="card" >
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <div className="text-center">
                            <p>"Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?"</p>
                            <footer className="blockquote-footer">Prof. Albus Dumbledore in <cite title="Source Title">Harry Potter and the Deathly Hollows
                                <Link
                                    className="App-link"
                                    to="/Level1"
                                    rel="noopener noreferrer"
                                >.</Link>
                            </cite></footer>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default Page1
