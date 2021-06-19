import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Aside from './aside'

import './styles/header.css'
import logo from '../assets/svg/logo.svg'

class Header extends Component {
    componentDidMount(){
        // Header animations
        window.onscroll = function () {
            if (window.pageYOffset > 0) {
                this.document.getElementById("header").style.background = "#0a101e"
                this.document.getElementById("header").style.boxShadow = "0px 0px 50px 10px rgba(0, 0, 0, 1)"
            } else if (window.pageYOffset === 0) {
                this.document.getElementById("header").style.boxShadow = "none"
                this.document.getElementById("header").style.background = "transparent"
            }
        }

        // Close aside on click
        document.querySelectorAll('#aside nav ul li a').forEach((element) => {
            element.addEventListener('click', () => {
                setTimeout(()=>{
                    this.toggleMenu()
                },100)
            });
        });
    }

    // Panel lateral desplegable
    toggleMenu = () => {
        const main = document.getElementById('main')
        const footer = document.getElementById('footer')
        var menuIcon = document.getElementById('menu-icon')

        main.classList.toggle('opacity')
        footer.classList.toggle('opacity')
        document.getElementById('aside').classList.toggle('active') // Show aside
        document.getElementById('particles').classList.toggle('index') // Particles over everything
        menuIcon.classList.toggle('header__menu--icon') // Change the icon
        menuIcon.classList.toggle('header__menu-close--icon') // Change the icon

        main.removeEventListener("click", this.toggleMenu)
        if(document.getElementById("aside").classList.contains("active")){
            main.addEventListener("click", this.toggleMenu)
        }
    }

    // const animated = document.querySelectorAll('fadeInDown')
    // for(let i = 0; i <= animated; i++){
    //     animated[i].style.animationDelay = `${i+1}s`;
    //     console.log("Hola")
    // }

    render(){
        return(
            <header id="header" className="header">
                <div className="header__invisible">
                    <Link className="header__logo" to="/"><img className="header__logo-img" src={logo} alt="Logo" /></Link>
                    <div onClick={this.toggleMenu} className="header__menu--icon-container">
                        <div id="menu-icon" className="header__menu--icon"></div>
                    </div>
                    <nav className="header__navbar">
                        <ul>
                            <li><a className="underlined fadeInDown" href="#1">Sobre mí</a></li>
                            <li><a className="underlined fadeInDown" href="#2">Proyectos</a></li>
                            <li><a className="underlined fadeInDown" href="#3">Contacto</a></li>
                        </ul>
                    </nav>
                    <Aside />
                </div>
            </header>
        )
    }
}

export default Header;