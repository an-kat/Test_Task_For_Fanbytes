import React from 'react';
import s from './Player.module.css';
import profilePhoto from "../../../assets/images/profilePhoto.png";

interface PlayerInfo {
    position: number,
    profileImage: typeof profilePhoto,
    username: string,
    points: number
}

function Player(props: PlayerInfo) {

    return (
        <div className={s.container}>
            <p className={s.position}>{props.position}</p>
            <img className={s.profileImage} alt='Avatar' src={props.profileImage}/>
            <p className={s.username}>{props.username}</p>
            <p className={s.points}>{props.points}</p>
        </div>
    );
}

export default Player;
