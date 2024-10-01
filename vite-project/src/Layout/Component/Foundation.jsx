import Button from "./Button"

const Foundation=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5 pt-5">
                    <p className="upcoming pt-5">About Us</p>
                                    <h1 className="Donate">We are tender heart <br /> charity foundation.</h1>
                                    <p className="whena pt-4">When a child gets access to good food, it can change <br /> just about everything. Sed do eiusmod tempor <br /> incididunt dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation</p>
                                    <Button btnClass="discover mt-4">Discover More</Button>
                    </div>
                    <div className="col-lg-6 pt-5 mb-5">
                        <img src="about2.png" width="105%" alt="" loading="Lazy" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Foundation