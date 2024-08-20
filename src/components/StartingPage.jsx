import React from 'react';
import {useNavigate} from "react-router-dom";

function Title(){
    return(
        <h1>과팅할과?</h1>
    )
}
//해당 버튼 누르면 로그인 페이지로 이동
function StartingButton(props){

    const navigate = useNavigate();

    return(
        <button
            onClick={() => {
                navigate("/login");
            }}
        >
            START !
        </button>
    )
}

function StartingPage(){

    
    return(
        <>
        <Title/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>

        <StartingButton/>
        </>
    )
}

export default StartingPage;