import classes from "./Card.module.css";

const Card = (props) => {
  const classnames = `${classes.card} ${props.className}`;
  return <div className={classnames}>{props.children}</div>;
};

export default Card;