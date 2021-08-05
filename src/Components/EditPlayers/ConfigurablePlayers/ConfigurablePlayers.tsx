import React from "react";
import s from "./ConfigurablePlayers.module.css"
import ConfigurablePlayer from "./ConfigurablePlayer/ConfigurablePlayer";
import profilePhoto from "../../assets/images/profilePhoto.png";

interface PlayerInterface {
    position: number,
    profileImage: typeof profilePhoto,
    username: string,
    points: number,
    id: string
}

interface Props {
    playersList: PlayerInterface[],
    removePlayer: any,
    changePointsAmount: any,
    changePosition: any
}
const ConfigurablePlayers = (props : Props) => {

    let playersListJSX = props.playersList.map((playerInfo) => <ConfigurablePlayer key={playerInfo.id} changePosition={props.changePosition}
                                                                                   changePointsAmount={props.changePointsAmount}
                                                                                   id={playerInfo.id} removePlayer={props.removePlayer}
                                                                                   profileImage={playerInfo.profileImage}
                                                                                   username={playerInfo.username} points={playerInfo.points}/>)
    return (
        <div className={s.container}>
            {(playersListJSX.length > 0) ? playersListJSX : <p className={s.message}>There is no players :(</p>}
        </div>
    );
}

export default ConfigurablePlayers;