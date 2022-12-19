import CardComponent from "../components/CardComponent";
import NoResultsFoundComponenet from "../components/NoResultsFoundComponent";
import  "../components/cardContainerComponent.css";

const CardContainer = ({filteredMemebers}) => {
    const cards = filteredMemebers?.map((member,index) =>{
      return (
         <CardComponent members={member} key={member.id}/>
      )
    })
   return(<div className="cardContainer">{cards}</div>)
}

export default CardContainer;