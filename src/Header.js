import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png'

class Header extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
      }

    handleScroll = (event) => {
        let scrollTop = window.pageYOffset
        let header = document.getElementById('header')

        if(scrollTop > 100) {
            header.classList.add('Header-show')
        } else {
            header.classList.remove('Header-show')
        }
    }

    render () {
        return (
            <div className="Header" id="header">
                <a className="Header-logo" href=""><img src={logo}width="100" /></a>
                <a className="Header-link" href="">Chapter</a>
                <a className="Header-link" href="">Sign in</a>
            </div>
        )
    }
}

export default Header