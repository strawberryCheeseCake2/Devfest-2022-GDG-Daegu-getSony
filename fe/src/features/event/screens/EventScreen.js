import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';

import "./event-screen.css";

const EventScreen = () => {
  let { id } = useParams();
  id = id - '0';
  
  const [res, setRes] = useState({});

  // useEffect(async () => {
  //   const result = await axios.get(
  //     `http://dev.uksfirstdomain.shop/events/${id}`
  //   );
  //   setRes(result.data);
  //   console.log(result)
  // }, []);
  useEffect(() => {
    // fetchData란 비동기함수 생성
    const fetchRes = async () => {
      const result = await axios.get(
        `http://dev.uksfirstdomain.shop/events/${id}`
      );
      setRes(result.data.result.result[0]);
    };
    // 실행함으로써 데이타를 fetching합니다.
    fetchRes();
    console.log(res)
  }, []);
  console.log(res)
  //let res;
  // useEffect(() => {
  //    const response = axios.get(
  //     `http://dev.uksfirstdomain.shop/events/${id}/`);
   
  //     console.log(response.data);
  //     setRes(response.data.result.result[0])
      
  //     //console.log(res)
  
  // }, [])
  
  // console.log(res)
  const {eventName, eventLogo, period, Dday,
     contentImageUrl, applicantCount, link, viewCount} = res;
  // const {eventName} = res;
  // console.log(res)
  return (
    <div>
      <div className="chatBar"></div>
      <div className="leftSide">
        <div className="evtInfo">
          <img
            src={eventLogo}
            alt="이벤트 로고"
            style={{ width: "200px", height: "200px", border: "1px black" }}
          />
          <div>
            <h1>{eventName}</h1>
            {/* <h1>Event Name</h1> */}
            
            <p>{period}</p>
            <p></p>
            <p></p>
            <a href={link}>
            <button>신청하기</button></a>
            <button>일정 공유</button>
            <p>지원자 수 123
              {applicantCount}
             즐겨찾기 123 공고조회수 123
             {viewCount}
             </p>
          </div>
        </div>
        <img 
        src={contentImageUrl}
        // src={"http://dev.uksfirstdomain.shop/content/1.png"}
         style={{ width: "100%" }} />
        <div style={{ backgroundColor: "#E2E2E2" }}>
          <h2>이런 이벤트는 어떠세요?</h2>
          <div className="rcBoxList">
            <div className="rcBox">
              <p className="rcEvtCategory">해커톤</p>
              <p className="rcEvtCatego">GDG Daegu Festa</p>
              <p id="applicant1">지원자 수 app1</p>
            </div>
            <div className="rcBox">
              <p className="rcEvtCategory">학회</p>
              <p className="rcEvtCatego">GDG Daegu Festa</p>
              <p id="applicant2">지원자 수 app2</p>
            </div>
            <div className="rcBox">
              <p className="rcEvtCategory">공모전</p>
              <p className="rcEvtCatego">GDG Daegu Festa</p>
              <p id="applicant3">지원자 수 app3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScreen;
