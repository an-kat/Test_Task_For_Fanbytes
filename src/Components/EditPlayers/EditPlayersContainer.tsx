import {connect} from "react-redux";
import {addPlayer, changePointsAmount, changePosition, removePlayer} from "../../Redux/players-reducer";
import EditPlayers from "./EditPlayers";
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

let mapStateToProps = (state: State) => {
    return {
        playersList: state.players.playersList
    }
}

const EditPlayersContainer = connect(mapStateToProps, {addPlayer, removePlayer, changePointsAmount, changePosition})(EditPlayers);

export default EditPlayersContainer;