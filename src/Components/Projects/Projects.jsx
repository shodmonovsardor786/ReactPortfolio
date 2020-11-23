import React from 'react'
import './Projects.css'
import ReactPlayer from 'react-player/youtube'
import appLab from '../../img/applab_500.jpg'
import appLab300 from '../../img/applab_300.jpg'
import football from '../../img/football_500.jpg'
import football300 from '../../img/football_300.jpg'
import calculator from '../../img/Calculator_500.jpg'
import calculator300 from '../../img/Calculator_300.jpg'
import { FaEye } from 'react-icons/fa'
const Projects = () => {

    const [img1, setimg1] = React.useState(appLab)
    const [img2, setimg2] = React.useState(football)
    const [img3, setimg3] = React.useState(calculator)

    React.useEffect(() => {
        if(window.innerWidth < 800) {
            setimg1(appLab300)
            setimg2(football300)
            setimg3(calculator300)
        }
    }, [])
        
    return (
        <>
            <div id="section3" className="projects">
                <h1 className="projects_heading">My Projects</h1>
                <ul className="projects_list">
                    <li className="project_item">
                        <img src={img1} alt="img" width="400" height="225"/>
                        <div className="info">
                            <h2>Landing page</h2>
                            <a href="https://shodmonovsardor786.github.io/AppLab/" className="view"><FaEye/></a>
                        </div>
                    </li>
                    <li className="project_item">
                        <div>
                            <ReactPlayer url='https://youtu.be/efGjGfCaIbs' width="400" height="225"/>
                        </div>
                        <div className="info">
                            <h2>Telegram demo</h2>
                        </div>
                    </li>
                     <li className="project_item">
                        <img src={img2} alt="img" width="400" height="225"/>
                        <div className="info">
                            <h2>By ticket</h2>
                            <a href="https://shodmonovsardor786.github.io/Football-ticket/" className="view"><FaEye/></a>
                        </div>
                    </li>
                    <li className="project_item">
                        <div>
                            <ReactPlayer url='https://youtu.be/F7hvqq8x8_k' width="400" height="225"/>
                        </div>
                        <div className="info">
                            <h2>Rent Us</h2>
                        </div>
                    </li>
                    <li className="project_item">
                        <img src={img3} alt="img" width="400" height="225"/>
                        <div className="info">
                            <h2>Calculator</h2>
                            <a href="https://shodmonovsardor786.github.io/Calculator/" className="view"><FaEye/></a>
                        </div>
                    </li>
                </ul>
                <p className="create_by">Portfolio create by React Js</p>
            </div>
        </>
    )
}


export default Projects