import React from "react";
import {Card, CardBody} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import user from "./user.png";
import Button from 'react-bootstrap/Button';

function GroupContainers(){

    const groups = []
    const navigate = useNavigate()

    for (let i = 0; i < 6; i++){
        groups.push(
            <img src={user}
            alt="user"
            style={{
                cursor: 'pointer',
                width: "100px",
                height: "100px"
            }}
            ></img>
        )
    }

    return(
        <div className="card-container">
        {groups.map((group, index) => (
          <Card 
            key={index} 
            style={{ width: '4rem', height: '12rem', backgroundColor: '#a8b0b8bc'}}
            onClick={() => {
                navigate("matchingdetail")
        }}>
            <CardBody
                 style={{
                    display: 'flex',
                    justifyContent: 'center', // 가로 중앙 정렬
                    alignItems: 'center', // 세로 중앙 정렬
                    height: '100%', // 카드 높이에 맞게 조정
                    padding: 0 // 패딩 제거
                  }}
            >{group}</CardBody>
          </Card>
        ))}
      </div>
    )
}

function LogoutBUtton(){

    const navigate = useNavigate();

    return(
        <Button 
            variant="dark"
            onClick={() => {
                navigate("/");
            }}
        >로그아웃</Button>
    )
}

function MatchingList(){
    return(
        <>
        <Navigation/>
        <GroupContainers/>
        <LogoutBUtton/>
        </>
    )
}

export default MatchingList;