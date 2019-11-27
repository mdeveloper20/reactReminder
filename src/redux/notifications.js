import { SHOW_NOTIFICATION,HIDE_NOTIFICATION } from './actions';

export function showNotification(text){
    return {
        text,
        type:SHOW_NOTIFICATION
    }
}
export function hideNotification(){
    return {
        type:HIDE_NOTIFICATION
    }
}

export function flashNotification(text,timeout){
    return function(dispatch,getState){
        dispatch(showNotification(text));
        setTimeout(() => {
            dispatch(hideNotification());
        }, timeout);
    }
}


export default function notifications (state={active:false,text:''}, action){
    switch(action.type){
        case SHOW_NOTIFICATION:
            return {
                ...state,
                active:true,
                text: action.text
            }
        case HIDE_NOTIFICATION:
            return {
                ...state,
                active:false,
                text: ""
            }
        default: 
            return state;
    }

}
