import CardComponent from "../components/CardComponent";

const CardContainer = ({filteredMemebers}) => {
    const cards = filteredMemebers?.map((member) =>{
        return  <CardComponent members={member} key={member.id}/>
    })
   return <div className="cardContainer">{cards}</div>;
}


export default CardContainer;