import React from "react"
import { useNavigate } from "react-router-dom";

function Title(){
    return(
        <>
        <h1>회원가입</h1>
        <br/><br/><br/>
        <br/><br/><br/>
        </>
    )
}

function Inputs(){
    //인풋간 일정 간격유지 css 필요
    return(
        <>
        <input type="text" placeholder="사용하실 아이디를 입력해주세요"/>
        <input type="text" value="중복 확인"/>
        <input type="text" placeholder="사용하실 비밀번호를 입력해주세요"/>
        <input type="text" placeholder="비밀번호를 한번 더 입력해주세요"/>
        <input type="text" placeholder="생년월일 입력"/>
        <input type="text" placeholder="재학중인 대학교"/>
        <input type="text" placeholder="학번"/>
        </>
    )
}

function Buttons(){

    const navigate = useNavigate();

    return(
        <>
        <button
            onClick={() => {
                navigate(-1)
            }}
        >뒤로</button>
        <button>다음</button>
        </>
    )
}

function RegisterPage(){
    return (
        <>
        <Title/>
        <Inputs/>
        <Buttons/>
        </>
    )
}

export default RegisterPage;