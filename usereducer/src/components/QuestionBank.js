
import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar, Row, Col, Alert } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timeLeft: 10,
  highScore: localStorage.getItem("highScore") || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;

      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
        feedback: isCorrect ? "Correct!" : `Incorrect! The correct answer is ${state.questions[state.currentQuestion].answer}`,
        timeLeft: 10,
        highScore: Math.max(newScore, state.highScore),
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: state.highScore,
      };

    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "UPDATE_HIGHSCORE":
      localStorage.setItem("highScore", state.highScore);
      return state;

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timeLeft, highScore } = state;

  useEffect(() => {
    if (!showScore) {
      const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
      if (timeLeft === 0) dispatch({ type: "NEXT_QUESTION" });
      return () => clearInterval(timer);
    }
  }, [showScore, timeLeft]);

  useEffect(() => {
    dispatch({ type: "UPDATE_HIGHSCORE" });
  }, [showScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="p-4 shadow-lg rounded-4">
            {showScore ? (
              <div className="text-center">
                <h2 className="mb-4">🎉 Your Score: {score} / {questions.length}</h2>
                <h4 className="text-primary">🏆 High Score: {highScore}</h4>
                <Button variant="success" size="lg" onClick={handleRestartQuiz} className="mt-4">
                  Restart Quiz
                </Button>
              </div>
            ) : (
              <div>
                <h4 className="mb-4 fw-bold">📚 Question {currentQuestion + 1}/{questions.length}</h4>
                <h5 className="mb-4">{questions[currentQuestion].question}</h5>

                <ProgressBar
                  now={((currentQuestion + 1) / questions.length) * 100}
                  className="mb-4"
                  variant="info"
                />

                <div className="mt-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOption === option ? "success" : "outline-primary"}
                      className="m-2 w-100 text-start"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {feedback && (
                  <Alert variant={feedback.includes("Correct") ? "success" : "danger"} className="mt-3">
                    {feedback.includes("Correct") ? <FaCheckCircle className="me-2" /> : <FaTimesCircle className="me-2" />} {feedback}
                  </Alert>
                )}

                <p className={`mt-3 fw-bold ${timeLeft <= 5 ? "text-danger" : "text-dark"}`}>⏳ Time Left: {timeLeft}s</p>

                <Button
                  variant="primary"
                  className="mt-4 w-100"
                  disabled={!selectedOption}
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                </Button>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionBank;



