
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import { Services } from "./pages/Services";
import { Navbar} from "./Components/Navbar"
import {Footer} from "./Components/Footer";
import {Error} from "./pages/Error"
import { Logout } from "./pages/Logout";


const App = () => {
  return(
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/contact" element= {<Contact />}/>
        <Route path="/services" element= {<Services />}/>
        <Route path="/register" element= {<Register />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="*" element={<Error />} />
        <Route path="/logout" element={<Logout />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
export default App
