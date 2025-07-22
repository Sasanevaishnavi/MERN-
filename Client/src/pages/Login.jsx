
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/auth";
import { toast } from 'react-toastify';

export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

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
        console.log("Login attempt with:", { email: user.email, password: "***" }); // Don't log password

        try {
            console.log("Attempting login...");

            const response = await fetch("https://mern-j2ip.onrender.com/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });

            console.log("Response Status:", response.status);
            
            // Always try to get response data
            const data = await response.json();
            console.log("Response Data:", data);
            

            if (response.ok) {
                // Store token if provided

                storeTokenInLS(data.token);

                // Reset form
                setUser({
                    email: "",
                    password: "",
                });

                toast.success("Login successful!");
                navigate("/"); // Navigate to home page
                
                
            } else {
                // Show specific error message from server
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                toast.error(data.message || "Login failed");
            }

        } catch (error) {
            console.error("Login error:", error);
            toast.error("Login failed. Please check your connection and try again.");
        }
    }

    return (
        <section>
            <main>
                <div className="section-registraion">
                    <div className="containers">
                    <div className=" grid grid-two-cols" >
                        <div className="registration-image">
                            <img 
                                src="/login.png"
                                alt="pic for registration"
                                width="500"
                                height="500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mg-3">Login Form</h1>
                            <br/>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" // Changed from "text" to "email"
                                        name="email"
                                        placeholder="Enter your email"
                                        id="email"
                                        required
                                        autoComplete="email"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password" 
                                        placeholder="Enter your password"
                                        id="password" 
                                        value={user.password}
                                        onChange={handleInput}
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                                
                                <br/>
                                <button type="submit" className="btn btn-submit">Login</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </section>
    );
}


















