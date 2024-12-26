import React from 'react'
import  { Container,Row,Button} from 'reactstrap'
import {NavLink,Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'

const  nav__links =[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
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
                    {/* menu Start */}
                    <div className="navigation">
                        <div className="menu d-flex align-items-center gap-5">
                            <ul className='menu d-flex align-items-center gap-5'>
                            {
                                nav__links.map((item,index)=>(
                                    <li className='nav_item' key={index}>
                                        <NavLink to={item.path} className={navClass=> navClass.isActive? 'active__link' : ''}>
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                    {/* menu end */}
                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className='nav__btns d-flex align-items-center gap-4'>
                            <Button className="btn secondary_btn">
                            <Link to='/login'>Login</Link></Button>
                            <Button className="btn primary_btn">
                                <Link to='/regiter'>Register</Link>
                            </Button>
                        </div> 
                        <span className='mobile_menu'>
                        <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row> 
        </Container>
    </header>
  )
}

export default Header