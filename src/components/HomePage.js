import React from 'react'
// import logo from "../logo.svg"
import { Link } from 'react-router-dom'
import music from '../Music/background-music.mp3'

const HomePage = () => {
    let myStyle = {
        margin: "0px 150px 30px 150px",
    }

    return (
        <div className="App">
            <audio src={music} autoPlay loop />
            <header className="App-header">
            
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h2>
                    Happy birthday darling!
                </h2>
                <p className="container" style={myStyle}>
                    I've prepared something fun for you uwu but (hehe there is always a but)
                    you gotta find it out. The only hint I can give to you is, go check what Dumbuldore gave Harry on his 17th birthday.

                </p>
                <Link
                    className="App-link"
                    to="/Page1"
                    rel="noopener noreferrer"
                >
                    Game is a foot!
                </Link>
            </header>
            
        </div>
    )
}

export default HomePage
