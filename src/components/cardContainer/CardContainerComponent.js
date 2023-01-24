import React from "react";
import CardComponent from "../card/CardComponent";
import "./cardContainerComponent.css";
class CardContainer extends React.Component {
  constructor(props) {
    console.log("CardContainer constructor");
    super(props);
    this.cards = this.props.filteredMemebers?.map((member) => {
      return <CardComponent members={member} key={member?.login} />;
    });
  }
  componentDidMount() {
    console.log("CardContainer componentDidMount");
  }
  componentDidUpdate() {
    console.log("CardContainer componentDidUpdate");
  }
  render() {
    console.log("CardContainer render");
    return (
      <div className="flex flex-wrap gap-y-10 gap-x-2 pl-20 pt-10">
        {this.cards}
      </div>
    );
  }
}
export default CardContainer;
