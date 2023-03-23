import Answer from "../../models/answer";
const QuestionCard: React.FC<Answer> = (props) => {
  return (
    <div>
      <p>
        Question: {props.questionNr} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question}}/>
         <div>
            {props.answers.map((answer) =>(
                <div>
                    <button disabled={props.userAnswer} onClick={props.callback}>
                      <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                    </button>
                </div>
            ))}
         </div>

    </div>
  );
};

export default QuestionCard;
