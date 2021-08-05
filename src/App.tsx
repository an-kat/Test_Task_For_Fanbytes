import React from 'react';
import s from './App.module.css';
import PlayersContainer from "./Components/Players/PlayersContainer";
import MenuContainer from "./Components/Menu/MenuContainer";
import { Route, Redirect} from 'react-router-dom'
import EditPlayersContainer from "./Components/EditPlayers/EditPlayersContainer";

function App() {
    return (
        <div className={s.container}>
            <MenuContainer/>
            <Route exact path='/' render={() => <Redirect to={"/showMode"}/>}/>
            <Route path='/showMode' render={() => <PlayersContainer/>}/>
            <Route path='/editMode' render={() => <EditPlayersContainer/>}/>
        </div>
    );
}

export default App;