import React from 'react'
import './Main.css'
import { FaCamera } from 'react-icons/fa'
import image from '../../img/image2.jpg'

const Main = () => {
    return (
        <>
            <main id="section1" className="main">
                <div>
                    <div className="images">
                        <img className="my_img" src={image} alt="my" width="380" height="380"/>
                        <div className="camera">
                            <span><FaCamera/></span>
                        </div>
                    </div>
                    <h1 className="my_name">Sardor Shodmonov</h1>
                    <p className="main_text">Fullstack web developer</p>
                    <a className="resume" href="https://resume.io/r/Kg5U8GIWk">
                        <p>Resume</p>
                    </a>
                </div>
            </main>

        </>
    )
}

export default Main