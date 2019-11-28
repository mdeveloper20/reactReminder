import { INCREMENT,DECREMENT,INCREMENT_ASYNC } from './actions';

export function increase(){
    return {
        type:INCREMENT
    }
}
export function decrease(){
    return {
        type:DECREMENT
    }
}
export function inc_async(){
    return {
        type:INCREMENT_ASYNC
    }
}


export default function counter (state={value:0}, action){
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                value: state.value +1
            }
        case DECREMENT:
            return {
                ...state,
                value: state.value -1
            }
        default: 
            return state;
    }

}
