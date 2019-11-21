import {createTodoData} from "../Configs/helper";
import {INITIAL_TODOS} from "../Configs/constants";


/**
 * Actions types
 */

 export const ADD_WORK = "ADD_WORK";
 export const DELETE_WORK = "DELETE_WORK";
 export const UPDATE_WORK = "UPDATE_WORK";
 export const TOGGLE_DRAWER_DISPLAY = "TOGGLE_DRAWER_DISPLAY";
 export const CHANGE_ACTIVE_ROW_INDEX = "CHANGE_ACTIVE_ROW_INDEX";



export const initialState = {
    workList: INITIAL_TODOS,
    displayDrawer: false,
    activeRowIndex: undefined,
  };
export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_WORK:
            return Object.assign({}, state, {
                workList: state.workList.concat(createTodoData(...action.payload))
                  })
        case DELETE_WORK:
            return Object.assign({}, state, {
              workList: action.payload,
              activeRowIndex: undefined
            })
        case TOGGLE_DRAWER_DISPLAY: 
            return Object.assign({}, state, {
              displayDrawer: action.payload,
            })
        case CHANGE_ACTIVE_ROW_INDEX:
            return Object.assign({}, state, {
              activeRowIndex: action.payload,
            })
        case UPDATE_WORK:
            return Object.assign({}, state, {
              workList: action.payload,
            })
        default:
            return state;
    }
}