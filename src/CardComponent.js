/** display user information in a card */
const CardComponent = ({members}) =>{
    const {img,name,city,company} = members;
    return (
       <div id="card" className="card">
           <img src={img}></img>
           <div className="details">
            <h2>{name.toUpperCase()}</h2> 
            <h3>{city}</h3>
            <h3>{company}</h3>
           </div>
       </div>
    )
}

export default CardComponent;