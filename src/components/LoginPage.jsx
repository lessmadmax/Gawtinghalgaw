import React from 'react';
import { useNavigate } from "react-router-dom";

function Title() {
    return (
        <>
            <h1>로그인</h1>
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

function Inputs() {
    return (
        <>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Passwrod' />
            <br />
        </>
    )
}

function Buttons() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/matchinglist');
    }

    return (
        <>
            <button
                onClick={handleClick}>
                로그인
            </button>
            <button
                onClick={handleClick}
            >에브리타임 ID로 로그인하기</button>
            <button
                onClick={handleClick}
            >Apple ID로 로그인하기</button>
            <button
                onClick={handleClick}
            >카카오톡으로 로그인하기</button>

            <div>
                <button
                    onClick={() => {
                        navigate('/register')
                    }}
                >회원가입</button>
                <button>아이디/비밀번호 찾기</button>
            </div>
        </>
    )
}

function LoginPage() {

    return (
        <>
            <Title />
            <Inputs />
            <Buttons />
        </>
    )
}

export default LoginPage;