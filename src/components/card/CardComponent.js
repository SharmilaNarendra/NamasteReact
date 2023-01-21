import { Link } from "react-router-dom";
import data from "../../utils/constants/data.json";
import "./cardComponent.css";

/** display user information in a card */
const CardComponent = ({
  members: { avatar_url, name, location, company, login },
}) => {
  const memberLink = data?.find((mem) => mem.id == login);
  return (
    <>
      <Link to={`/teamMember/${login}`}>
        <div
          id="card"
          className="w-96 h-56 p-1 flex flex-row gap-7 rounded-3xl text-2xl font-sans cursor-pointer bg-purple-100 dark:bg-slate-300 text-slate-800 "
        >
          <img
            className="h-52 w-52 float-left   rounded-3xl p-1"
            src={avatar_url}
          ></img>
          <div className="pt-2">
            <div className="pt-2">{name}</div>
            <div className="pt-2">{company}</div>
            <div className="pt-2">{location}</div>
          </div>
        </div>
      </Link>
      <a href={memberLink?.linkedIn}>
        <i className="fa fa-linkedin-square fa-3x green" />
      </a>
    </>
  );
};

export default CardComponent;
