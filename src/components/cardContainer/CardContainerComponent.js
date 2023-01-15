import CardComponent from "../card/CardComponent";
import "./cardContainerComponent.css";

const CardContainer = ({ filteredMemebers }) => {
  const cards = filteredMemebers?.map((member) => {
    return <CardComponent members={member} key={member?.login} />;
  });
  return (
    <div className="flex flex-wrap gap-y-10 gap-x-2 pl-20 pt-10">{cards}</div>
  );
};

export default CardContainer;
