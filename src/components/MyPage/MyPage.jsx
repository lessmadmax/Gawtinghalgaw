import React from "react";
import Navigation from "../Navigation";
import Card from 'react-bootstrap/Card';
import User from "../Matchings/user.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile(){

    //닉네임은 아이디에 따라 유일하다. 해당 닉네임은 데이터베이스에 저장돼있을 것. 그렇다면 useState이용?
    const [nickname, setNickname] = useState("지적인 기린");
    const [universityName, setUniversityName] = useState("경희대학교");
    const [age, setAge] = useState(22);
    const [completionPercent, setCompletionPercent] = useState(0)
    const navigate = useNavigate();

    return(
        <div>
            
            <img alt="user" src={User} style={{width: "70px", height: "70px"}}/>
            {nickname} / {universityName} ({age})
            <br/><br/>
            <Card 
                style={
                    { width: '18rem',  display: 'flex', alignItems: 'center',}
            }>
            <Card.Body>
                <div
                    onClick={() => {
                        navigate("profilesettingpage")
                    }}
                    style={{
                        cursor: "pointer"
                    }}
                >프로필 수정</div>
                <div>완성도 {completionPercent}%</div>
            </Card.Body>
            </Card>
        </div>
    )
}

function Status(){

    const [likes, setLikes] = useState(9);
    const [requests, setRequests] = useState(29);
    const [visitors, setVisitors] = useState(639);

    return(
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between', // 카드들 사이에 여유 공간 추가
                flexWrap: 'wrap', // 화면 크기에 따라 카드가 줄 바꿈되도록 함
                gap: '16px', // 카드들 사이의 간격 추가
            }}
        >
            <Card body>
                {likes}<br/>
                받은 좋아요
            </Card>
            <Card body>
                {requests}<br/>
                받은 요청
            </Card>
            <Card body>
                {visitors}<br/>
                방문자
            </Card>
        </div>
    )
}

function Features(){
    return(
        <div>
            친구 초대<br/>
            대학교 인증<br/>
            같은 학교 피하기<br/>
            아는 사람 피하기<br/>
            환경설정
        </div>
    )
}

function MyPage(){
    return(
        <>
            <Navigation/>
            <Profile/>
            <Status/>
            <Features/>
        </>
    )
}

export default MyPage;