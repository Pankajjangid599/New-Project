 const ThreeCard= ({Images,Heading,Content})=>{
    return(
        <>
            <div className="ThreeCard text-center">
                <img src={Images} alt="" />
                <h3 className="Heading">{Heading}</h3>
                <p className="Content pt-3">{Content}</p>
            </div>
        </>
    )
}
 export default ThreeCard