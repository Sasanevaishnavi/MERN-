
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const params = useParams(); 
  console.log("params single user: ", params);
  const { authorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `https://mern-j2ip.onrender.com/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json()
      console.log("its getsingleuserdata",data);
       setData({
      username: data.username,
      email: data.email,
      phone: data.phone,
    });
      
     
    } catch (error) {

      console.log(error);
    }
  };

 
  useEffect(() => {
    getSingleUserData();
  }, []);

 
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async(e)=>{

    e.preventDefault();
    try {
         const response = await fetch(`https://mern-j2ip.onrender.com/api/admin/user/update/${params.id}`, {
                method:  'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization':  authorizationToken,  
                },
                body:JSON.stringify(data)
                }
            );

            if(response.ok){
                alert("update successuly")
            }else{
                console.log("not updated");
                
            }
            navigate("/admin/users");
            
                console.log("get id responce", response);
        
    } catch (error) {
        console.log(error)
        
    }

  }

  return (
   
    <section className="section-contact">
      <div className="contact-content container">
        
        <h1>Update User Data</h1>

     
        <div className="container grid grid-two-cols">
          
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Mobile</label>
                <input
                  type="phone" 
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              
              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
};