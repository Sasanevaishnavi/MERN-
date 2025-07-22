import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from 'react-toastify';

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "", 
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Submitting registration...");

            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

             // Always try to get response data
                const res_data = await response.json();
                console.log("Server response:", res_data.extraDetails);
            
            

            if (response.ok) {
                toast.success("Registration successful!");
                storeTokenInLS(res_data.token);
       
                // Reset form
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                
                // Navigate to login page
                navigate("/login");
                
            } else {
                // Show specific error message from server
                
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }
            
        } catch (error) {
            console.error("Register error:", error);
            toast.error("Registration failed. Please check your connection and try again.");
        }
    };

    return (
        <section>
            <main>
                <div className="section-registraion">
                    <div className="containers">
                    <div className=" grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                                src="/registration.png"
                                alt="pic for registration"
                                width="500px"
                                height="440"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mg-3">Registration Form</h1>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                        id="username"
                                        required
                                        autoComplete="username"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                               
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        autoComplete="email"
                                        value={user.email}
                                        onChange={handleInput}
                                        id="email"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        autoComplete="tel"
                                        id="phone"
                                        value={user.phone}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password" 
                                        placeholder="Enter password"
                                        autoComplete="new-password"
                                        id="password" 
                                        value={user.password}
                                        onChange={handleInput}
                                        required
                                    />
                                </div>
                                
                                <br/>
                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

