import { useEffect } from "react";
import { createContext , useContext, useState } from "react";
import { toast } from "react-toastify";



export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token , setToken] =useState(localStorage.getItem("token"));
    const [user , setuser] = useState("");
    const [service, setservice] = useState([]);
    const authorizationToken = `Bearer ${token}`;
    const [isLodding, setisLodding] = useState(true);


    
// function for store token  in local storage
    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken);
        localStorage.setItem("token", serverToken);

    };

    let isLoggeIn = !!token;
    console.log("isloggedin", isLoggeIn);

//logout function
    const LogoutUser = () =>{
        setToken("");
        
        return localStorage.removeItem("token");
    };
    


//JtWT AUTHONTICATION - to currenly loged in user data
        const userAuthontication = async() =>{
            try {
                setisLodding(true)
                const response = await fetch("https://mern-j2ip.onrender.com/api/auth/user" , {
                    method:"GET",
                    headers:{
                        Authorization:authorizationToken,
                    },
                    
                });
                console.log("currently loged user responcd", response);

                if(response.ok){
                    const data = await response.json();
                    console.log(" curent user data ", data.userData);
                    setuser(data.userData);
                    setisLodding(false)

                }else{
                    setisLodding(false);
                    
                }
                

                
                
            } catch (error) {
                console.log("error to fetch user data on contact page ");
                
            }
        }

 //fetch service data from database
        const getServicwsData = async () =>{
            try {

                    const response = await fetch( "https://mern-j2ip.onrender.com/api/data/service",{
                        method:"GET",    
                    });

                    console.log("featched services by server",response);
                    
                    if (response.ok){
                        const data = await response.json();
                        console.log("fetching services data ",data);
                           if (Array.isArray(data.msg)) {
                            setservice(data.msg);
                            } else {
                            console.error("Invalid response: msg is not an array");
                            }
                                                

                    }

                } catch (error) {
                    console.log(`services fetch fad ${error}`);
                    
                    
                }
            }
    
    
        useEffect(() => {
            if (token) {
                userAuthontication();
                getServicwsData();
            }
        }, [token]);


    return (
    <AuthContext.Provider value={{isLoggeIn ,LogoutUser ,  storeTokenInLS , user ,service , authorizationToken,isLodding}}>
        {children}
    </AuthContext.Provider>
);
};

export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
        
    }
    return authContextValue;
};

