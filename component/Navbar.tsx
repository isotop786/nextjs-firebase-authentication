import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const NavbarComp : React.FC = () =>{

    const {user, logout} = useAuth();
    const router = useRouter();

    const logoutFunc = async (e: any)=>{
        e.preventDefault();
        try{
            await logout();
            router.push('/login')
        }
        catch(err)
        {
            console.log(err)
        }
    }

    return(
        <Navbar variant='dark' bg='primary' expand='lg' >
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand>NextJS Auth</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {user ? (
                        <Nav.Link onClick={logoutFunc}>Logout</Nav.Link>
                    ):(
                        <Nav className='ml-auto'>
                        <Link href="/signup" passHref>
                            <Nav.Link>Signup</Nav.Link>
                        </Link>
                        <Link href="/login" passHref>
                            <Nav.Link>Login</Nav.Link>
                        </Link>
                    </Nav>
                    )}
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp;