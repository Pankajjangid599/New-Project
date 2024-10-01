import { Button } from "bootstrap"
import CardList from "./CardList"
const CardLayout=()=>{
    return(
        <>
            <div className="container-fluid mb-4 ">
                <div className="row ">
                    <div className="col-lg-4 col-sm-12 col-md-4 ">
                        <CardList imgPath="class-img1.jpg" cardTitle="Help the ecosystems" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."
                        Goal="$67,845
                        " Cardbutton={ <a className="donateNow  px-4 py-3" href="#">Donate</a>}></CardList>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-4 ">
                    <CardList imgPath="class-img2.jpg" cardTitle="Donate Vitamin B12 Program" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."
                        Goal="$67,845
                        " Cardbutton={ <a className="donateNow  px-4 py-3" href="#">Donate</a>}></CardList>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-4  ">
                    <CardList imgPath="class-img3.jpg" cardTitle="View Savers In Deworm Program" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn."
                        Goal="$67,845
                        " Cardbutton={ <a className="donateNow  px-4 py-3" href="#">Donate</a>}></CardList>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardLayout