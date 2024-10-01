
import VitaminB12 from "./Layout/Component/VitaminB12"
import Foundation from "./Layout/Component/Foundation"
import CardLayout from "./Layout/Component/LayoutComponent/CardLayout"
import Joinus from "./Layout/Component/LayoutComponent/Joinus"
import Map from "./Layout/Component/LayoutComponent/Map"
import MySwiper from "./Swiper"
import Footer from "./Layout/Component/LayoutComponent/Footer"
import ThreeCardComponent from "./Layout/Component/LayoutComponent/ThreeCardComponent"

const Home= ()=>{
    return(
        <>
        <VitaminB12></VitaminB12>
        <Foundation></Foundation>
        <CardLayout></CardLayout>
        <Joinus></Joinus>
        <ThreeCardComponent></ThreeCardComponent>
        <MySwiper></MySwiper>
        <Map></Map>
        <Footer></Footer>
        </>
    )
}
export default Home