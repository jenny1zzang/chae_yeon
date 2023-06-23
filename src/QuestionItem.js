import React from "react";

const QuestionItem = ({ question, answers, handleCkAnswer, page, idx }) => {
  return (
    <div
      className="questionList"
      style={{ display: page === idx + 1 ? "flex" : "none" }}
      key={idx}
    >
      <div className="questionItemlayout">
        <div className="chatListLayout">
          {question.map((qval, qidx) => (
            <div key={qidx} className="chatBox">
              <div></div> <div>{qval}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="answerItemLayout">
        <div className="aChatBox">
          <div>+</div> <div>#</div>
        </div>
        {answers.map((aval, aidx) => (
          <div
            key={aidx}
            className="answerBox"
            onClick={() => handleCkAnswer(aval.type, idx)}
          >
            {aval.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
