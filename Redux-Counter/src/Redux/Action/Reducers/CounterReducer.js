
let initialstate = 0;

const counter = (state = initialstate, Action) => {

    switch(Action.type){
        case 'inc':
        return state + 1
        default :
        return state;
    }
}

export default counter