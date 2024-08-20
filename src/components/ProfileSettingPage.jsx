import React from "react";
import Button from 'react-bootstrap/Button';
import EmptyPicture from "./emptypicture.png";
import { useNavigate } from "react-router-dom";

function Pictures(){
    return(
        <img 
            src={EmptyPicture}
            style={{
                width: "300px",
                height: "300px"
            }}
            onClick={() => {
                //갤러리 접근권한 요청 및 사진 선택 기능
            }}
        />
    )
}

function Information(){
    return(
        <>
            <input type="text" placeholder="대학교"/>
            <input type="text" placeholder="학번"/>
            <input type="checkbox"/>
            <label>졸업생</label>
        </>
    )
}

function ProfileSettingPage(){

    const navigate = useNavigate();

    return(
        <>
            <h3>프로필 작성</h3>
            <Pictures/>
            <Information/>
            <Button 
                variant="secondary"
                onClick={() => {
                    navigate("/mypage")
                }}
            >작성 완료</Button>
        </>
    )
}

export default ProfileSettingPage;