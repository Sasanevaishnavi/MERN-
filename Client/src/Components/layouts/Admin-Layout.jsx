import { Navigate, NavLink, Outlet } from "react-router-dom"
import { FaUserAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";


export const AdminLayout = () =>{
    const { user ,isLoading} = useAuth();
    console.log("admin layout", user);

    if(isLoading){
        return <h1 style="text-aline:center" > Loading...</h1>
    }

    if(!user.isAdmin){
        return<Navigate to="/" />
    }
    
    return (
        <>
        <header>
            <div className="container">
                <ul>
                    <li>
                        <NavLink to="/admin/users"><FaUserAlt />Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/contacts"><MdContactPhone />contacts</NavLink>
                    </li>
                    <li><NavLink to="/services"><MdOutlineMessage />services</NavLink></li>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </div>


        </header>
        <Outlet/>
        </>
    )
}