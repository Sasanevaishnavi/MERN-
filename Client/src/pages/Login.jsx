
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

            const response = await fetch("http://localhost:5000/api/auth/login", {
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
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                                src="/login.png"
                                alt="pic for registration"
                                width="500"
                                height="500"
                            />
                        </div>
                        <div className="regidtration-from">
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
            </main>
        </section>
    );
}























// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//     const [user, setUser] = useState({
//         email: "",
//         password: "",
//     });

//     const navigate  = useNavigate();

//     const handleInput = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;

//         setUser((prev) => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Login attempt with:", { email: user.email, password: "***" });
//         try {
//             console.log("Attempting login...")

//             const response = await fetch("http://localhost:5000/api/auth/login",{
//                 method:"POST" ,
//                 headers:{
//                     "Content-Type": "application/json"

//                 },
//                 body:JSON.stringify(user),  
//             })
            
//             console.log("Response Status:", response.status);
//             const data = await response.json();
//             console.log("Response Data:", data);
            
            
//             if(response.ok){


//                 if (data.token) {
//                     localStorage.setItem('token', data.token);
//                 }

//                 setUser({
//                     email: "",
//                     password: "",
//                 });
//                 alert("Login sucessfuly");
//                 navigate("/");
//             } else {
//             alert(data.message || "Login failed");
//         }
             
//         } catch (error) {
//             console.error("Login  error:", error);
//             alert("Please Fill Data Correctly")
            
//         }
//     }

//     return (
//         <section>
//             <main>
//                 <div className="section-registraion">
//                     <div className="container grid grid-two-cols">
//                         <div className="registration-image">
//                             <img 
//                                 src="/registration.png"
//                                 alt="pic for registration"
//                                 width="500"
//                                 height="500"
//                             />
//                         </div>
//                         <div className="regidtration-from">
//                             <h1 className="main-heading mg-3">Login Form</h1>
//                             <br/>
//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label htmlFor="email">Email</label>
//                                     <input 
//                                         type="text"
//                                         name="email"
//                                         placeholder="email"
//                                         id="email"
//                                         required
//                                         value={user.email}
//                                         onChange={handleInput}
//                                     />
//                                 </div>
                               
                                
//                                 <div>
//                                     <label htmlFor="password">password</label>
//                                     <input
//                                         type="password"
//                                         name="password" 
//                                         placeholder="password"
//                                         id="password" 
//                                         value={user.password}
//                                         onChange={handleInput}
//                                         required
//                                     />
//                                 </div>
                                
//                                 <br/>
//                                 <button type="submit" className="btn btn-submit">Login</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </section>
//     )
// }