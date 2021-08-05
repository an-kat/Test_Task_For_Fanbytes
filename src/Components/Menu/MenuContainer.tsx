import {connect} from "react-redux";
import profilePhoto from "../../assets/images/profilePhoto.png";
import Menu from "./Menu";
import {addPlayer} from "../../Redux/players-reducer";

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

const MenuContainer = connect(mapStateToProps, {addPlayer})(Menu);

export default MenuContainer;