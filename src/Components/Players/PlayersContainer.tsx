import {connect} from "react-redux";
import Players from "./Players";
import profilePhoto from "../../assets/images/profilePhoto.png";

interface Player {
    position: number,
    profileImage: typeof profilePhoto,
    username: string,
    points: number,
    id: string
}

interface State {
    players: {
        playersList: Player[]
    }
}

let mapStateToProps = ( state: State ) => {
    return {
        playersList: state.players.playersList
    }
}

const PlayersContainer = connect(mapStateToProps)(Players);

export default PlayersContainer;