import React,{useState,useContext} from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
   

} from 'reactstrap' 

import {Link} from 'react-router-dom'
import { UserContext } from "../context/UserContext";
import '../App.css'
const Header = () => {

    const context = useContext(UserContext)

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
 
    return(
        <Navbar color = "info" light expand = "md">
            <NavbarBrand tag={Link} to="/">Git User Finder</NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email  :""
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen = {isOpen} navbar>
                <Nav className="ml-auto" navbar>
                {
                    context.user ? (<NavItem  className= 'b'>
                        <NavLink onClick={()=>{context.setUser(null)}}>
                            <button>Logout</button>
                        </NavLink>
                    </NavItem>): (

                        <>
                        <NavItem className= 'b'>
                        <NavLink tag={Link} to='/signup'>
                            Signup
                        </NavLink>
                    </NavItem>
                    <NavItem className= 'b'>
                        <NavLink tag={Link} to='/signin'>
                            Signin  
                        </NavLink>
                    </NavItem>
                        </>
                    )
                }
                    
                    

                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header