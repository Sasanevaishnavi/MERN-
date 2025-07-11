import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const  About = () =>{
    const {user } = useAuth();
   return(
    <>
         <section className="section-hero">
                <div className="container grid grid-two-cols" >
                    <div className="hero-content">
                        <p >Welcome, {
                            user ? `${user.username} to our website` : `to our website`
                            }
                        </p>
                        <h1 className="main-heading mg-3">Why Choose Us?</h1>
                        <p>
                            <p> Expertise:
                            Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends. </p>

                             <p> Customization:
                            We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals. </p>

                             <p> Customer-Centric Approach:
                            We prioritize your satisfaction and provide top-notch support to address your IT concerns. </p>

                            <p>Affordability:
                            We offer competitive pricing without compromising on the quality of our services.  </p>

                             <p> Reliability:
                            Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p> </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">connect now </button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">learn more </button>
                            </a>

                        </div>                    
                    
                    </div>
                    
                    

                    <div className="hero-image">
                        <img src="about.png" alt=" 3 people img" width="400" height="500" />
                    </div>
                
                
                </div>
                
            </section>    

        {/* 2nd Section - Analytics */}
                        <section className="section-analytics">
                        <div className="container grid grid-four-cols">
                            <div className="div1">
                            <h2>50+</h2>
                            <p>registered companies</p>
                            </div>
                            <div className="div1">
                            <h2>100,00+</h2>
                            <p>Happy Clients</p>
                            </div>
                            <div className="div1">
                            <h2>500+</h2>
                            <p>Well known Developers</p>
                            </div>
                            <div className="div1">
                            <h2>24/7</h2>
                            <p>Service</p>
                            </div>
                        </div>
                        </section>      
    </>
   )
}