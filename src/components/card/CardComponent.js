import React from "react";
import { Link } from "react-router-dom";
import data from "../../utils/constants/data.json";
import "./cardComponent.css";

/** display user information in a card */
class CardComponent extends React.Component {
  memberLink = data?.find((mem) => mem.id == this.props.login);

  constructor(props) {
    console.log("CardComponent constructor");
    super(props);
  }
  componentDidMount() {
    console.log("CardComponent componentDidMount");
  }
  componentDidUpdate() {
    console.log("CardComponent componentDidUpdate");
  }
  render() {
    console.log("CardComponent render");
    return (
      <>
        <Link to={`/teamMember/${this.props.members.login}`}>
          <div
            id="card"
            className="w-96 h-56 p-1 flex flex-row gap-7 rounded-3xl text-2xl font-sans cursor-pointer bg-purple-100 dark:bg-slate-300 text-slate-800 "
          >
            <img
              className="h-52 w-52 float-left   rounded-3xl p-1"
              src={this.props.members.avatar_url}
            ></img>
            <div className="pt-2">
              <div className="pt-2">{this.props.members.name}</div>
              <div className="pt-2">{this.props.members.company}</div>
              <div className="pt-2">{this.props.members.location}</div>
            </div>
          </div>
        </Link>
        <a href={this.memberLink?.linkedIn}>
          <i className="fa fa-linkedin-square fa-3x green" />
        </a>
      </>
    );
  }
}
export default CardComponent;
