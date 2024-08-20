import React from "react";
import Navigation from "../Navigation";
import User from "./user.png";
import EmptyHeart from "./EmptyHeart.png";
import FullHeart from "./FullHeart.png";
import { useState } from "react";

function UserImages(){
    return(
        <>
        <img 
            src={User}
            alt="user"
            style={{
                width: "200px",
                height: "200px"
            }}
        />
        </>
    )
}

function HeartImage(){

    const [heart, setHeart] = useState(EmptyHeart);

    return(
        <>
        <img 
            src={heart}
            alt="heart"
            style={{
                width: "40px",
                height: "40px"
            }}
            onClick={(event) => {
                setHeart(event.target.src===FullHeart ? EmptyHeart : FullHeart);
            }}
        />
        </>
    )
}

function PersonalInformation(){

    const information = [
        "컴퓨터공학과",
        "27살",
        "ENTJ",
        "자기소개"
    ]

    return(
        <>
        <ul>
            {information.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}

function PersonalDetail(){
    return(
        <>
        <Navigation/>
        <br/><br/>
        <div>
        <UserImages/>
        <HeartImage/>
        </div>
        <br/><br/><br/><br/>
        <PersonalInformation/>
        </>
    )
}

export default PersonalDetail;