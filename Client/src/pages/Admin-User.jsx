import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";
import { Link } from "react-router-dom";


export const AdminUser = ()=>{
    const [users,setuser] = useState([]);
    const {authorizationToken} = useAuth();
    
  const [userData, setUserData] = useState([{ username: "", email: "", phone: "",isAdmin:"", }]);

// function for token autharization
const getAllUserData = async () =>{
    try {
        const response = await fetch("https://mern-j2ip.onrender.com/api/admin/users",{
            method:"GET",
            headers:{
                Authorization:authorizationToken,
            },
        });
        const data  =  await response.json();
        console.log(` in getalluserdata user ${data}`);
        setuser(data);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

// function for delete user
    const deleteUser =async(_id)=>{
        try {
            
            const response = await fetch(`https://mern-j2ip.onrender.com/api/admin/users/delete/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': authorizationToken,  
                }
                });
                console.log("get id responce", response);
                


            if(response.ok){
                const data  =  await response.json();
                console.log(`user after delete  ${data}`);
                getAllUserData();
            }else {
                const errorText = await response.text();
                console.error("Failed to delete user. Server said:", errorText);
            }
        } catch (error) {
            console.log("unable to fetch data on deleteUser");
          
        }
    } 

// funcatnality to Update user 
    const updateUser = async() => {

        

        const response = await fetch(`https://mern-j2ip.onrender.com/api/admin/users/update/${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': authorizationToken,  
                },
                body: JSON.stringify(updateUser)
                });
                console.log("get responce from backend after uptating", response);

                const data = await response.json()
                setUserData(data.updatedUser);

    }

// function to get all contact data fron server
const getAllContactData = async ()=>{
    try {
        const responce = await fetch("https://mern-j2ip.onrender.com/api/admin/contacts",{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                Authorization:authorizationToken,

            }


        });
        const data = await responce.json();
        console.log("aaall contact data ",data);
        
        

        
        
    } catch (error) {
        console.log("unable to fetch contact data from server ",error);
        
    }

}

// useEffect to load data on mount
    useEffect(()=> {
            getAllUserData();
            getAllContactData();
        },[]);

  
    
        return(
            <>
            <section className="admin-user-section">
                <div className="container">
                    <h1>Admin User Data</h1>

                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUsers, index)=>{
                                return <tr key={index}>
                                    <td>{curUsers.username}</td>
                                    <td>{curUsers.email}</td>
                                    <td>{curUsers.phone}</td>
                                    <td>
                                        <Link to= {`/admin/users/${curUsers._id}/update`}>Edit</Link>
                                    </td>
                                    
                                    <td><button className="btn"  onClick={()=> deleteUser(curUsers._id)}>Delete</button></td>
                                </tr>
                            })}

                        </tbody>
                    </table>

                </div>

            </section>

            
            
            </>
        )
}