import {NavLink} from "react-router-dom";
import "./Navbar.css";
import {useAuth} from "../store/auth";

export const Navbar = () =>{

    
    const { isLoggeIn } = useAuth();
    return(
    <>
        <header >
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">Technical</NavLink>
                </div>

                <nav className="contaner_navelink">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>

                        {isLoggeIn ? (
                            <li><NavLink to="/logout">Logout</NavLink></li>
                            ) : (
                            <>
                                <li><NavLink to="/register">Register</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </>
                        )}
                                            
                        
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    </>
    )

}