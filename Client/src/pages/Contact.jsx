import { useState } from "react"
import "../index.css" 
import { useAuth } from "../store/auth";

export const Contact = () => {
    const [contact, setcontact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const[userdata, setuserdata] = useState(true);
    const { user }= useAuth();

    if(userdata && user){
        setcontact({
            username:user.username,
            email:user.email,
            message:"",
        })

        setuserdata(false)
    }

    const handleInput = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;

        setcontact((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
             
           const response = await fetch("http://localhost:5000/api/form/contactFrom", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });
            console.log("show the contact from responce states", response.status);

            if(response.ok){

                alert(" message send successfuly")
                setcontact({
                    username:"",
                    email:"",
                    message:"",
                });

            }else{
                console.log("failed to send message");
                
            }

            
            
            
        } catch (error) {
            console.log("contact form submiting error ",error);
            
            
        }
        // Fixed: Convert object to string for alert
        alert(JSON.stringify(user, null, 2));
        console.log(user);
    }

    return (
        <section>
            <main>
                <div className="section-contact">
    
                        <h1 className="main-heading mg-3" >Contact Us</h1>
                   
                    <div className="container grid grid-two-cols">
                        <div className="contact-img">
                            <img 
                                src="/contact.png"
                                alt="pic for contact"
                                width="500"
                                height="500"
                            />
                        </div>
                        <div className="section-from">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        value={contact.username}
                                        onChange={handleInput}
                                    />
                                </div>
                               
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email" // Changed from "text" to "email"
                                        name="email"
                                        placeholder="email"
                                        value={contact.email}
                                        onChange={handleInput}
                                        id="email"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        name="message"
                                        placeholder="Write your message here..."
                                        id="message"
                                        value={contact.message}
                                        onChange={handleInput} 
                                        cols="30"
                                        rows="5"
                                        required
                                    />
                                </div>

                               
                                <br/>
                                <button type="submit" className="btn btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}