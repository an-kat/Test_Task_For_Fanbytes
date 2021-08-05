import React from "react";
import s from "./EditPlayers.module.css"
import AddPlayersContainer from "../AddPlayers/AddPlayersContainer";
import profilePhoto from "../../assets/images/profilePhoto.png";
import ConfigurablePlayers from "./ConfigurablePlayers/ConfigurablePlayers";

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

const EditPlayers = (props: Props) => {

    return (
        <div className={s.container}>
            <AddPlayersContainer/>
            <ConfigurablePlayers changePosition={props.changePosition} changePointsAmount={props.changePointsAmount}
                                 removePlayer={props.removePlayer} playersList={props.playersList}/>
        </div>
    );
}

export default EditPlayers;