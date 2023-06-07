import "./Card.css";

const Card = (props) => {
  //Card.css 에 있는 스타일 말고도 원래 적용되어야했던 스타일까지 포함
  //아래것은 Expense.js에서 <div className = "card expenses">으로 쓰임
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
