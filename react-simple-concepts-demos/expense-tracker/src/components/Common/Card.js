import './Card.css';

const Card = (props)=>{
    const classnames = "card "+ props.className;
    return (
        <div className={classnames}>{props.children}</div>
    );
}

export default Card;