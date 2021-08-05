import profilePhoto from '../assets/images/profilePhoto.png'

const ADD_PLAYER = 'test_task/users/ADD_PLAYER';
const REMOVE_PLAYER = 'test_task/users/REMOVE_PLAYER';
const CHANGE_POINTS_AMOUNT = 'test_task/points/ADD_POINTS';
const CHANGE_POSITION = 'test_task/points/CHANGE_POSITION';

interface Action {
    type: string,
    data: {
        position?: number,
        username?: string,
        points?: number,
        id?: string
    }
}

let initialState = {
    playersList: [{
        position: 1,
        profileImage: profilePhoto,
        username: 'Majorie Kane',
        points: 325,
        id: '08339a'
    }]
};

const playersReducer = (state  = initialState, action: Action) => {
    switch (action.type) {
        case ADD_PLAYER:
            let newPlayer = {
                position: state.playersList.length + 1,
                profileImage: profilePhoto,
                username: action.data.username,
                points: action.data.points,
                id: Math.floor((1 + Math.random()) * 0x1000000)
                    .toString(16)
                    .substring(1),
            }

            const playerExists = (username: string) => {
                return state.playersList.some((player) => {
                    return player.username === username;
                })
            }

            if (playerExists(action.data.username as string)) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    playersList: [...state.playersList, newPlayer]
                }
            }
        case REMOVE_PLAYER:
            let indexForPlayerRemove = state.playersList.findIndex(item => item.id === action.data.id)

            return {
                ...state,
                playersList: [...state.playersList.slice(0, indexForPlayerRemove), ...state.playersList.slice(indexForPlayerRemove + 1)]
            }
        case CHANGE_POINTS_AMOUNT:
            let clonePlayersList = [...state.playersList]
            let playerIndex = clonePlayersList.findIndex((obj => obj.id === action.data.id))
            clonePlayersList[playerIndex].points = action.data.points as number

            return {
                ...state,
                playersList: clonePlayersList
            }
        case CHANGE_POSITION:
            let clonePlayersListSecond = [...state.playersList]
            let sortedPlayersList = clonePlayersListSecond.sort(({points:a}, {points:b}) => b-a);
            sortedPlayersList.forEach((item, index)=>{
                item.position = index + 1
            })

            return {
                ...state,
                playersList: sortedPlayersList
            }
        default:
            return state;
    }
}

export const addPlayer = (username: string, points: number) => ({
    type: ADD_PLAYER,
    data: {
        username: username,
        points: points
    }
});

export const removePlayer = (id: string) => ({
    type: REMOVE_PLAYER,
    data: {
        id: id
    }
});

export const changePointsAmount = (points: number, id: string) => ({
    type: CHANGE_POINTS_AMOUNT,
    data: {
        points: points,
        id: id
    }
});

export const changePosition = () => ({
    type: CHANGE_POSITION
});

export default playersReducer;