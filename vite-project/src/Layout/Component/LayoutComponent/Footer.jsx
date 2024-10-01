import { Button } from "bootstrap"


const Footer =()=>{
    return(
        <>
            <div className="container-fluid footer">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="footer_First_colum">
                            <img src="logo.png" alt="" />
                            <p className="whenachild pt-3">When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua.</p>
                            <div className="socialmedia mt-4">
                                <div className="fb text-white pt-2"><i class="fa-brands fa-facebook"></i></div>
                                <div className="linkdin text-white pt-2"><i class="fa-brands fa-linkedin-in"></i></div>
                                <div className="inst text-white pt-2"><i class="fa-brands fa-instagram"></i></div>
                                <div className="youtube text-white pt-2"><i class="fa-brands fa-youtube"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-3  text-white">
                                <ul>
                                    <p className="Navigation" >Navigation</p>
                                
                                        <p>Home</p>
                                        <p>About</p>
                                        <p>Service</p>
                                        <p>Blog</p>
                                        <p>Contact</p>
                                 
                                </ul>
                            </div>
                            <div className="col-5 ">
                            <ul>
                                    <p className="Navigation" >Contact us</p>
                                
                                        <p>4486 Richards Avenue, Modesto CA - 95354</p>
                                        <p>209-818-6041</p>
                                        <p>charity90@gmail.com</p>
                                       
                                 
                                </ul>
                            </div>
                            <div className="col-4">
                            <ul>
                                    <p className="Navigation" > Support</p>
                                
                                        <p>When a child gets access to good food, it can change.</p>
                                       
                                        
                                        <p></p>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Footer