import CardList from "./CardList"
const TwoCardSection=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col pt-5 pb-5 text-center">
                        <p className="upcoming">Programs</p>
                        <h1 className="Donate">Ongoing progrmas</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <CardList imgPath="class-img1.jpg" cardTitle="Help The Ecosystem" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn" Goal="$67845" ></CardList>
                    </div>
                    <div className="col-lg-6">
                    <CardList imgPath="class-img2.jpg" cardTitle="Help The Ecosystem" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn" Goal="$67845" ></CardList>
                    </div>
                </div>
                <div className="row mt-5">
                <div className="col-lg-6">
                <CardList imgPath="class-img3.jpg" cardTitle="Help The Ecosystem" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn" Goal="$67845" ></CardList>
                </div>
                <div className="col-lg-6">
                <CardList imgPath="class-img2.jpg" cardTitle="Help The Ecosystem" cardText="Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet pulvinar ante start in life and the opportunity to learn" Goal="$67845" ></CardList>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default TwoCardSection