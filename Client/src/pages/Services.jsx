import { useAuth} from "../store/auth";

import "../index.css"

export const  Services = () =>{

    const {service} = useAuth();

    return (

        <section className="section-services">
            <div className="container">
               <h1 className="main-heading">Services</h1>
            </div>

            <div className=" grid grid-three-cols">
                

                {service.map((curElem,intex) =>{
                    const {service: serviceName,description,provider,price} = curElem;

                    return(
                        <div className="card" key={intex}>
                        <div className="card-img">
                            <img src="./cource.png" alt="our services" width="200"/>
                        </div>

                        <div className="card-details">
                            <div className="grid grid-two-cols">
                                <p>{provider}</p>
                                <p>{price}</p>
                            </div>
                            <h2>{ serviceName}</h2>
                            <p>{description}</p>

                        </div>

                    </div>

                    );


                    
                })}

                
            </div>
        </section>
    );
}