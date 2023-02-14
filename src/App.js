import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  // 개발용 : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjE5NjMwNjkzNjEiLCJhdXRoX2lkIjoiMiIsImV4cCI6MTY4Nzc1NzgwOSwiaWF0IjoxNjcyMjA1ODA5LCJuYmYiOjE2NzIyMDU4MDksInNlcnZpY2VfaWQiOiI0MzAwMTEzOTciLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4ifQ.htqs5StnygMPvqzS9ORovOh9UP81CwxxIahP6v0JSw0
  // 배포용 : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiMjAwMDA6MTAiLCJhY2NvdW50X2lkIjoiMTk2MzA2OTM2MSIsImF1dGhfaWQiOiI0IiwiZXhwIjoxNzM1Mjc4ODg5LCJpYXQiOjE2NzIyMDY4ODksIm5iZiI6MTY3MjIwNjg4OSwic2VydmljZV9pZCI6IjQzMDAxMTM5NyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9.RxiyCQGTEP4ebIuTY6zxrb502KVQ8jG8_oZHz-foINk
  // 카트라이더개발 : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiNTAwOjEwIiwiYWNjb3VudF9pZCI6IjE5NjMwNjkzNjEiLCJhdXRoX2lkIjoiMiIsImV4cCI6MTY5MTkxNTYwOCwiaWF0IjoxNjc2MzYzNjA4LCJuYmYiOjE2NzYzNjM2MDgsInNlcnZpY2VfaWQiOiI0MzAwMTEzOTMiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4ifQ.rMSbUYb90yDJrOOrvcrsZRoQydYe6T0V-9eKcd12k8E
  // 카트라이더배포 : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiMjAwMDA6MTAiLCJhY2NvdW50X2lkIjoiMTk2MzA2OTM2MSIsImF1dGhfaWQiOiI0IiwiZXhwIjoxNzM5NDM5Nzc4LCJpYXQiOjE2NzYzNjc3NzgsIm5iZiI6MTY3NjM2Nzc3OCwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9._oUQsLPnViJrP7Ah1-fkL5iC_-uSWdid7f5_QZqnRqY
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJYLUFwcC1SYXRlLUxpbWl0IjoiMjAwMDA6MTAiLCJhY2NvdW50X2lkIjoiMTk2MzA2OTM2MSIsImF1dGhfaWQiOiI0IiwiZXhwIjoxNzM5NDM5Nzc4LCJpYXQiOjE2NzYzNjc3NzgsIm5iZiI6MTY3NjM2Nzc3OCwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsInRva2VuX3R5cGUiOiJBY2Nlc3NUb2tlbiJ9._oUQsLPnViJrP7Ah1-fkL5iC_-uSWdid7f5_QZqnRqY";

    // "https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results?count=10&date=2022-12-27&cursor=";
  const Api_url = "https://api.nexon.co.kr/kart/v1.0/users/nickname/뉴월드혀누";
  const onClick = async () => {
    await axios.get(Api_url, {
      headers: {
        Authorization: accessToken,
      },
    }).then((response) => {console.log(response)});
  };
  return (
    <div className="App">
      <button onClick={onClick}>조회하기</button>
      <div>{data}</div>
      <p>Data based on NEXON DEVELOPERS</p>
    </div>
  );
}

export default App;
