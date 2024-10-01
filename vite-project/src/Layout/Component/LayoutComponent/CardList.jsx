import { Button } from "bootstrap"

const CardList=({imgPath,cardTitle,cardText,Goal,Cardbutton})=>{
    return(
        <>
         <div class="card pb-3">
             <img src={imgPath} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h4 class="card-title">{cardTitle}</h4>
                 <p class="card-text">{cardText}</p>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <div className="col Goals">{Goal}</div>
                        <div className="col Goals">{Goal}</div>
                        <div className="col">{Cardbutton}</div>
                    </div>
                </div>
            </div>
            
         </div>
        </>
        
    )
}
export default CardList