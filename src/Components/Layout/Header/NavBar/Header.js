import React, { useState, useRef } from 'react'

import './Header.css'
import { Link } from 'react-router-dom'

import Language from '../SwitchLanguage/Language'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScroll: false,
      locales: localStorage.getItem("locale"),
      
     
    
      


    }

  

  }




  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // this.setLocale()

    
  }


  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScroll: true })
    }
    else {
      this.setState({ hasScroll: false })
    }

  }



handleOpen=(event)=>{
const hamburger=document.querySelector(".hamburger");
const links=document.querySelector(".links");
const link=document.querySelector(".links ul ");
hamburger.addEventListener('click',()=>{
  links.classList.toggle('open')
})


}




  render() {


    return (
      <div className={this.state.hasScroll ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <a  className="logo"   href="/"><img  style={{width:"90px",height:"50px" }} src={this.state.hasScroll || document.location.pathname.length === 1 ? '/images/KwareLatest.png' : '/images/KwareLatest.png'} /></a>
         

          <ul className="links">
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services'  ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/" className="cool">Home</a></li>
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/products" className="cool">Products </a></li>
            <li className={document.location.pathname.length === 1  || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/services" className="cool">Services </a></li>
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/blog" className="cool">Blog</a></li>
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/sys-solutions" className="cool">Sys & Solutions </a></li>
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}  ><a href="/our-partners" className="cool">Our-Parteners</a></li>
            <li className={document.location.pathname.length === 1 || document.location.pathname === '/services' ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}> <a href="/our-clients" className="cool">Our-Clients</a> </li>


          </ul>


          <Language />
          <div className="display">
          <HamburgerMenu />
          </div>
         
          {/* <div className="hambuger" >
              

          

              </div>
     */}
        

        



        </div>
      </div>
    )

  }

}




export default Header


