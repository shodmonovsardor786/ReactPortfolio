import React from 'react'
import './Skills.css'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaSass, FaReact, FaNode, FaImages, FaDatabase, FaInfoCircle, FaInfo, FaRocket } from 'react-icons/fa'


const Skills = () => {
    return (
        <>
            <div id="section5" className="skills">
                <ul className="list">
                    <li className="item">
                        <span><FaHtml5 color="brown"/></span>
                        <p>Html</p>
                    </li>
                    <li className="item">
                        <span><FaCss3 color="skyblue"/></span>
                        <p>Css</p>
                    </li>
                    <li className="item">
                        <span><FaSass color="pink"/></span>
                        <p>Sass</p>
                    </li>
                    <li className="item">
                        <span><FaJs color="yellow"/></span>
                        <p>Javascript</p>
                    </li>
                    <li className="item">
                        <span><FaBootstrap color="#6a306a"/></span>
                        <p>Bootstrap</p>
                    </li>
                    <li className="item">
                        <span><FaGithub color="#222"/></span>
                        <p>Github</p>
                    </li>
                    <li className="item">
                        <span><FaImages color="#222"/></span>
                        <p>Photoshop</p>
                    </li>
                    <li className="item">
                        <span><FaReact color="blue"/></span>
                        <p>ReactJs</p>
                    </li>
                    <li className="item">
                        <span><FaNode color="green"/></span>
                        <p>NodeJs</p>
                    </li>
                    <li className="item">
                        <span><FaDatabase color="#333"/></span>
                        <p>PostgreSql</p>
                    </li>
                    <li className="item">
                        <span><FaInfo color="#111"/></span>
                        <p>RestApi</p>
                    </li>
                    <li className="item">
                        <span><FaInfoCircle color="#111"/></span>
                        <p>Apollo-server</p>
                    </li>
                    <li className="item">
                        <span><FaRocket color="orange"/></span>
                        <p>Postman</p>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Skills