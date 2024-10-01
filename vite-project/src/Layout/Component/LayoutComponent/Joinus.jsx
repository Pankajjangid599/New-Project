    import Button from "../Button"
const Joinus=()=>{
    return(
        <>
        <div className="container-fluid mt-5 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6  text-end mb-5">
                        <img src="about3.jpg" className="about3"   alt="" />
                    </div>
                    <div className="col-lg-6  helping ">
                    <p className="upcoming pt-5">Helping Today</p>
                                    <h1 className="Donate">What We Are Doing </h1>
                                    <p className="whena pt-4">When a child gets access to good food, it can change <br /> just about everything. Sed do eiusmod tempor <br /> incididunt dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation</p>
                                    <Button btnClass="discovermore mt-4">Join Us Today
                                        <div className="hovereffect"></div>
                                    </Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Joinus