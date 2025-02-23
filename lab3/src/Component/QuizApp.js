import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

class QuizApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        questions: [
          {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
          },
          {
            id: 2,
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Mars", "Earth"],
            answer: "Jupiter",
          },
        ],
        currentQuestion: 0,
        score: 0,
        quizEnd: false,
      };
    }
  
    handleAnswer = (selectedOption) => {
      const { currentQuestion, questions, score } = this.state;
  
      // Check answer and update score
      if (selectedOption === questions[currentQuestion].answer) {
        this.setState({ score: score + 1 });
      }
  
      // Move to the next question or end quiz
      if (currentQuestion + 1 < questions.length) {
        this.setState({ currentQuestion: currentQuestion + 1 });
      } else {
        this.setState({ quizEnd: true });
      }
    };
  
    restartQuiz = () => {
      this.setState({ currentQuestion: 0, score: 0, quizEnd: false });
    };
  
    render() {
      const { questions, currentQuestion, quizEnd, score } = this.state;
  
      return (
        <div>
          <h1>Quiz Application</h1>
          {quizEnd ? (
            <Result score={score} total={questions.length} restart={this.restartQuiz} />
          ) : (
            <Question
              question={questions[currentQuestion]}
              handleAnswer={this.handleAnswer}
            />
          )}
        </div>
      );
    }
  }
  
  export default QuizApp;
  