import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/25058652"} alt='Founder'/>
            <h2>Saurav Swaraj</h2>
            <p>Motivation is temporary</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href='https://youtube.com' target={"blank"}>
                    <AiFillYoutube />
                </a>
                <a href='https://instagram.com' target={"blank"}>
                    <AiFillInstagram />
                </a>
                <a href='https://facebook.com' target={"blank"}>
                    <AiFillFacebook />
                </a>
            </article>
        </aside>
        <a href='#home'>
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer