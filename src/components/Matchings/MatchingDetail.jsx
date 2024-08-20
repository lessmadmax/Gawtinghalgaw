import React from "react";
import Navigation from "../Navigation";
import {Card, CardBody} from "react-bootstrap";
import user from "./user.png";
import EmptyHeart from "./EmptyHeart.png";
import FullHeart from "./FullHeart.png";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function GroupContainer(){

    const navigate = useNavigate();
    const [heart, setHeart] = useState(EmptyHeart);

    return(
        <Card 
        style={{ width: '28rem', height: '28rem', backgroundColor: '#a8b0b8bc' }}>
        <CardBody
            style={{
                display: 'flex',
                justifyContent: 'center', // 가로 중앙 정렬
                alignItems: 'center', // 세로 중앙 정렬
                height: '100%', // 카드 높이에 맞게 조정
                padding: 0 // 패딩 제거
              }}
        ><img 
            src={user} 
            alt="user"
            onClick={() => {
                navigate("personaldetail");
            }}
            style={{
                cursor: 'pointer',
                width: "300px",
                height: "300px"
            }}
        />
        <img 
            src={heart}
            alt="heart"
            style={{
                width: "100px",
                height: "100px"
            }}
            onClick={(event) => {
                setHeart(event.target.src===FullHeart ? EmptyHeart : FullHeart);
            }}
        />
        </CardBody>
      </Card>
    )
}

function MatchingDetail(){
    return(
        <>
        <Navigation/>
        <GroupContainer/>
        </>
    )
}

export default MatchingDetail;