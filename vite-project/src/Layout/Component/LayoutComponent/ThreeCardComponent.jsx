import React from "react"
import ThreeCard from "./ThreeCard"
const ThreeCardComponent=()=>{
    return(
        <>
            <div className="container-fluid orangeBackground">
                <div className="container">
                    <div className="row">
                        <div className="col text-white text-center pt-5">
                            <p>Helping Today</p>
                            <h2>Who We Help People</h2>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 mb-5 pt-5">
                           <ThreeCard Images="services1.svg" Heading="Pure Food & Water" Content="Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante employees and organizations to support."></ThreeCard>
                        </div>
                        <div className="col-lg-4 mb-5 pt-5">
                            <ThreeCard Images="services2.svg" Heading="Pure Food & Water" Content="Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante employees and organizations to support."></ThreeCard>
                        </div>
                        <div className="col-lg-4 mb-5 pt-5">
                            <ThreeCard Images="services3.svg" Heading="Pure Food & Water" Content="Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante employees and organizations to support."></ThreeCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ThreeCardComponent