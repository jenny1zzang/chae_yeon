import React, { useState } from "react";



function ChatComponent({questionList}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = questionList.map((item) => item.q).flat();
  const answers = questionList.map((item) => item.a).flat();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className="chatComponent">
      <div className="chatListLayout">
        {questions[currentQuestionIndex] && (
          <div className="chatBox">
            <div></div>
            <div>{questions[currentQuestionIndex]}</div>
          </div>
        )}
      </div>
      <button onClick={handleNextQuestion}>다음</button>
    </div>
  );
}

export default ChatComponent;