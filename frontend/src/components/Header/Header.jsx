import React from 'react'
import  { Container,Row,Button} from 'reactstrap'
import {NavLink,Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const  nav__links =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'#',
        display:'About'
    },
    {
        path:'/tour',
        display:'Tours'
    }
]
function Header() {
  return (
    <header className='header'>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center 
                justify-content-between">
                    {/* Logo */}
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    {/* Logo */}
                </div>
            </Row> 
        </Container>
    </header>
  )
}

export default Header