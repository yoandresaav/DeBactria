import {LOAD_ACCOUNTS} from "../actionTypes";

const defaultState = {
    account : 0,
    accountObj: null,
}

export default function loadAccounts(state=defaultState,action){
    switch(action.type){
        case LOAD_ACCOUNTS:
            return {
                ...state,
                account: action.account,
                accountObj: action.accountObj,
            };
        default:
            return state;
    }
}