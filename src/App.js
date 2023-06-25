import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import QuestionComponent from "./ChatComponent";
import 시작사진 from "./image/시작사진.png"



function App() {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }; //모바일용 세로 크기 고려

  useEffect(() => {
    setVh();

    function onResize() {
      setVh();
    }

    window.addEventListener("resize", onResize);
  }, []); //리렌더링시마다 함수 호출

  const questionList = [
    {
      q: [
        "두근두근… 오늘은 드디어 CJ UNIT 에 들어와 첫 발대식 날이다.",
        "반가워요 UNIT 여러분~! 우선 모두 지정석에 앉아주세요. 각 자리엔 저희가 여러분께 선물로 드릴 웰컴키트가 놓여있습니다. 자유롭게 열어보세요",
        
        "아직 발대식 시작까지 시간이 조금 남았다. 시간이 남았을 때 나는?",
      ],
      a: [
        {
          type: "I",
          text: "한학기동안 함께 할 사람들이니, 옆에 앉아 있는 같은 팀원에게 용기내어 말 걸어보자! ",
        },
        {
          type: "E",
          text: "같은 팀원이랑만 친해지는걸론 부족하지~ 다른 조 팀원들한테도 한번 말 걸어봐야지",
        },
      ],
    },
    {
      q: ["질문2"],
      a: [
        { type: "I", text: "답변" },
        { type: "E", text: "답변" },
      ],
    },
    {
      q: ["질문3"],
      a: [
        { type: "I", text: "답변" },
        { type: "E", text: "답변" },
      ],
    },
    {
      q: ["질문4"],
      a: [
        { type: "S", text: "답변" },
        { type: "N", text: "답변" },
      ],
    },
    {
      q: ["질문5"],
      a: [
        { type: "S", text: "답변" },
        { type: "N", text: "답변" },
      ],
    },
    {
      q: ["질문6"],
      a: [
        { type: "S", text: "답변" },
        { type: "N", text: "답변" },
      ],
    },
    {
      q: ["질문7"],
      a: [
        { type: "F", text: "답변" },
        { type: "T", text: "답변" },
      ],
    },
    {
      q: ["질문8"],
      a: [
        { type: "F", text: "답변" },
        { type: "T", text: "답변" },
      ],
    },
    {
      q: ["질문9"],
      a: [
        { type: "F", text: "답변" },
        { type: "T", text: "답변" },
      ],
    },
    {
      q: ["질문10"],
      a: [
        { type: "P", text: "답변" },
        { type: "J", text: "답변" },
      ],
    },
    {
      q: ["질문11"],
      a: [
        { type: "P", text: "답변" },
        { type: "J", text: "답변" },
      ],
    },
    {
      q: ["질문12"],
      a: [
        { type: "P", text: "답변" },
        { type: "J", text: "답변" },
      ],
    },
  ];

  

  const [mbtiList, setMbtiList] = useState([
    { name: "I", count: 0 },
    { name: "E", count: 0 },
    { name: "S", count: 0 },
    { name: "N", count: 0 },
    { name: "F", count: 0 },
    { name: "T", count: 0 },
    { name: "P", count: 0 },
    { name: "J", count: 0 },
  ]);

  const handleCkAnswer = (type, idx) => {
    let ls = mbtiList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }
    setMbtiList(ls);
    if (idx === 0 && (type === "I")){
      setPage(page + 20)
    }
    else if (idx === 2 && (type === "I"))
      setPage(page + 20)
    
    else {setPage(page + 1);}

    if (idx + 1 === questionList.length) {
      setMBTI();
    }
  };
  const [page, setPage] = useState(0);

    const handleClickNext = () => {
      setPage(page - 19);
    };

  const [mbtiContents, setmbtiContents] = useState([]);

  function setMBTI() {
    let mc = [
      { mbti: "ENTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISTP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INFJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ENFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "INFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISFP", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ESTJ", contents: ["설명1", "설명2", "설명3"] },
      { mbti: "ISTJ", contents: ["설명1", "설명2", "설명3"] },
    ];

    let IorE =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "I";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "E";
      }).count
        ? "I"
        : "E";
    let SorN =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "S";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "N";
      }).count
        ? "S"
        : "N";
    let ForT =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "F";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "T";
      }).count
        ? "F"
        : "T";
    let PorJ =
      // eslint-disable-next-line no-self-compare
      mbtiList.find(function (data) {
        return data.name === "P";
      }).count >
      mbtiList.find(function (data) {
        return data.name === "J";
      }).count
        ? "P"
        : "J";

    let mbti = IorE + SorN + ForT + PorJ;

    setmbtiContents(mc.filter((val) => val.mbti === mbti)[0]);
  }

  return (
    <div className="mbtilayout">
      {page === 0 ? (
        <div className="startPageLayout">
          <button onClick={() => setPage(1)} className="startButton">
            테스트 시작하기
          </button>
        </div>
      ) : page === 21 ? (
        <div className="customPageLayout">
          <div className="answerItemLayout">
         첫번째 질문 조건페이지
            
          </div>
          <button onClick={handleClickNext}>다음</button>
        </div>
      ) : page === 23 ? (
        <div className="customPageLayout">
          <div className="answerItemLayout">
            세번째 질문 조건페이지
          </div>
          <button onClick={handleClickNext}>다음</button>
        </div>
      ) : page <= questionList.length ? (
        <div className="questionLayout">
          <div className="mbtiTitle">
            <div>MBTI TEST</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>

          <div className="questionAnswerLayout">
            {questionList.map((val, idx) => (
              <div
                className="questionList"
                style={{
                  display: page === idx + 1 ? "flex" : "none",
                  backgroundImage: `url(${
                    idx < 3 ? require("./image/발대식.png") : ""
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                key={idx}
              >
                <div className="questionItemlayout">
                  <div className="chatListLayout">
                    <div className="questionItemlayout">
                      <div className="chatListLayout">
                        {val.q.map((qval, qidx) => (
                          <div key={qidx} className="chatBox">
                            <div></div> <div>{qval}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="answerItemLayout">
                  {val.a.map((aval, aidx) => (
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
            ))}
          </div>
        </div>
      ) : (
        <div className="questionLayout">
          <div className="mbtiTitle">
            <div>MBTI TEST</div>
            <div onClick={() => window.location.reload()}>다시하기</div>
          </div>

          <div>
            <div className="questionList" style={{ display: "flex" }}>
              <div className="questionItemlayout">
                <div className="chatListLayout">
                  <div className="chatBox">
                    <div></div>
                    <div>당신의 mbti는 {mbtiContents.mbti} 입니다.</div>
                  </div>

                  <div className="chatBox">
                    <div></div>
                    <div>{mbtiContents.mbti} 는</div>
                  </div>

                  {mbtiContents.contents.map((val, idx) => (
                    <div className="chatBox" key={idx}>
                      <div></div>
                      <div>{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
