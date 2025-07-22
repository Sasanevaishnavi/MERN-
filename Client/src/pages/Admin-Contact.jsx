import { useState , useEffect } from "react";
import {useAuth} from "../store/auth";

export const AdminContact = () => {
    const {authorizationToken} = useAuth();
    const [contacts, setContacts] = useState([]);

    // function to get all contact data fron server
    const getAllContactData = async () => {
        try {
            const responce = await fetch("http://localhost:5000/api/admin/contacts", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                }
            });
            const data = await responce.json();
            console.log("aaall contact data ", data);
            setContacts(data);

        } catch (error) {
            console.log("unable to fetch contact data from server ", error);
        }
    }

    // function for delete contact
    const deleteContact =async(id)=>{
        try {
            
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': authorizationToken,  
                }
                });
                console.log("get id responce in delet contact ", response);
                


            if(response.ok){
                const data  =  await response.json();
                console.log(`user after delete  ${data}`);
                getAllContactData();
                alert("delated successfily")
            }else {
                const errorText = await response.text();
                console.error("Failed to delete contact. Server said:", errorText);
            }
        } catch (error) {
            console.log("unable to fetch data on deletecontact");
          
        }
    } 

    // useEffect to load data on mount
    useEffect(() => {

        getAllContactData();
    }, []);


    return (
        <>
            <section className="admin-user-section">
                <div className="container">
                    <h1>Contact  User Data</h1>

                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Message</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curContat, index) => {
                                return <tr key={index}>
                                    <td>{curContat.username}</td>
                                    <td>{curContat.email}</td>
                                    <td>{curContat.message}</td>
                                    <td><button className="btn"  onClick={()=> deleteContact(curContat._id)}>Delete</button></td>
                                </tr>
                            })}

                        </tbody>
                    </table>

                </div>

            </section>



        </>
    )
}
