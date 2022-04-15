import Card from "../UI/Card";
import classes from "./Title.module.css";

const Title = props => {
  return (
    <Card className={classes.title}>
      <h3>Word Matching</h3>
      <p>Match the english words with their french counterparts</p>
    </Card>
  );
};

export default Title;
