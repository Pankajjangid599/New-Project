import { NavLink, Link } from "react-router-dom";
import Content from "./Component/Content";
import Button from "./Component/Button";
import WhoWeAre from "../WhoWeAre";

const Navbar=()=>{
    return(
            <>  
            <div className=" container-fluid backgroundimg">
                <div className="row">
                    <div className="col">
                    <nav class="navbar  navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div className="row">
        <div className="col">
            
        </div>
    </div>
  
     < Link class="navbar-brand" to="/">
        <img src="logo.png" alt="" />
     </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink  class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link active" to="/WHOWEARE">Who We Are?</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link active" aria-current="page" to="/Programs">Progrmas</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link active" aria-current="page" to="/About">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink   class="nav-link active" aria-current="page" to="/">Blog</NavLink>
        </li>
        <li class="nav-item">
          <NavLink  class="nav-link menubar active" aria-current="page" to="/">Contact Us</NavLink>
        </li>
      </ul>
      <form class="d-flex">
       
        <button class="btn makea btn " type="submit"> <span><i class="fa-solid fa-heart" style={{color:"white"}}></i></span> Make A Donation</button>
      </form>
    </div>
  </div>
  
       
       </nav>   
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col text-start">
                                {<Content/>}
                               
                            </div>
                        </div>
                    </div>
                </div>
   
            </div>

   
            </>
               
                
           
                   
           
    )
}
export default Navbar