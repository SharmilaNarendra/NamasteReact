import {Link} from "react-router-dom"
import data from "../utils/constants/data.json"
import "../components/cardComponent.css"


/** display user information in a card */
const CardComponent = ({members:{avatar_url,name,location,company,login}}) =>{
    const memberLink = data.filter((mem)=> (mem.id == login));
    return (
        <>
        <Link to={`/teamMember/${login}`}>
        <div id="card" className="card">
                <img src={avatar_url}></img>
                <div className="details">
                <h2>{name}</h2>
                <h3>{company}</h3> 
                <h3>{location}</h3>
                </div>
        </div>
        </Link>
        <a href={memberLink[0].linkedIn} > <i className="fa fa-linkedin-square fa-3x"/></a>
       </>
    )
}

export default CardComponent;