import classes from './Card.module.css';

const Card = (props) => {
  const classnames = `${classes.card} ${props.className}`   //"card " + props.className;
  return (
    <div className={classnames}>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Card;
