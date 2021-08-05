import {connect} from "react-redux";
import AddPlayers from "./AddPlayers";
import {addPlayer} from "../../Redux/players-reducer";

let mapStateToProps = () => {
    return {}
}

const AddPlayersContainer = connect(mapStateToProps, {addPlayer})(AddPlayers);

export default AddPlayersContainer;