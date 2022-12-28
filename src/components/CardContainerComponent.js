import CardComponent from "../components/CardComponent";
import  "../components/cardContainerComponent.css";

const CardContainer = ({filteredMemebers}) => {
    const cards = filteredMemebers?.map((member) =>{
      return (
         <CardComponent members={member} key={member?.login}/>
        )
    })
   return(<div className="cardContainer">{cards}</div>)
}

export default CardContainer;