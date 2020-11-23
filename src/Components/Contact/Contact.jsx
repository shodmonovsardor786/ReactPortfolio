import React from 'react'
import './Contact.css'
import { FaFacebook, FaGithub, FaInstagram, FaMobileAlt, FaTelegram, FaTwitter } from 'react-icons/fa'


const Contact = () => {
    return (
        <>
            <div id="section4" className="contact">
                <ul className="contact_list">
                    <li className="contact_item">
                        <a href="https://t.me/sardor_shodmonov">
                            <span><FaTelegram/></span>
                            <p>Telegram</p>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a href="https://www.facebook.com/shodmonovsardor786">
                            <span><FaFacebook/></span>
                            <p>Facebook</p>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a href="https://www.twitter.com/shodmonov786">
                            <span><FaTwitter/></span>
                            <p>Twitter</p>
                        </a>
                    </li>
                    <li className="contact_item">
                        <a href="https://www.instagram.com/coder_786_">
                            <span><FaInstagram/></span>
                            <p>Instagram</p>
                        </a>
                    </li>
                     <li className="contact_item">
                        <a href="https://github.com/shodmonovsardor786/">
                            <span><FaGithub/></span>
                            <p>Github</p>
                        </a>
                    </li>
                         <li className="contact_item">
                        <a href="tel:+998977666063">
                            <span><FaMobileAlt/></span>
                            <p>Phone</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Contact