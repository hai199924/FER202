const Result = ({ score, total, restart }) => {
    return (
      <div>
        <h2>Your Score: {score} / {total}</h2>
        <button onClick={restart}>Restart Quiz</button>
      </div>
    );
  };
  
  export default Result;