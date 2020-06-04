import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM } from './actionType'


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value) => ({
    type: ADD_LIST_ITEM,
    value
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})
