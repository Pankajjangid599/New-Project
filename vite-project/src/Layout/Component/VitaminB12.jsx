import Button from "./Button"

const VitaminB12= () =>{
    return(
        <>
           <div className="container-fluid b12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                           <img src="about1.jpg" className="image2 pt-5"  alt="" />
                        </div>
                        <div className="col-lg-6 mb-5">
                                    <p className="upcoming pt-5">Upcoming Program</p>
                                    <h1 className="Donate">Donate vitamin B12 supply program</h1>
                                    <p className="whena">When a child gets access to good food, it can change just about everything. Sed do eiusmod tempor incididunt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                    <div className="row">
                                        <div className="col-5  ">
                                            {/* <Button style={{border:"none",color:"white",backgroundColor:"#F15B43",padding:"18px 39px",fontWeight:"500"}}>Donate Now</Button> */}
                                            <Button btnClass="donateNow" width={200} height={60} border="none" >Donate Now</Button>
                                        </div>
                                        <div className="col-5">
                                            <Button btnClass="viewProgram" width={200}>View Programs</Button>
                                        </div>
                                    </div>
                        </div>  
                    </div>
                </div>
           </div>
        </>
    )
}
export default VitaminB12