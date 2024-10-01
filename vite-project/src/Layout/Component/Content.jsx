import Button from "./Button"
const Content =()=>{
   
    return(
        
        <>
            <div className="container ">
                <div className="row">
                    <div className="col mb-5">
                    <div data-aos="fade-up" data-aos-duration="3000">
                        
                    </div>
                        <h1 className="give ">Give a helping <br />hand to those <br />who need it!</h1>
                        <p className="when">When a child gets access to good food, it <br /> can change just about everything.</p>
                        {<Button btnClass="ongoingbutton" >Ongoing Program</Button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content