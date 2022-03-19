import { SET_JOB_INPUT, ADD_JOB, DELETE_JOB, DELETE_ALL_JOB, UPDATE_JOB } from './Constants'

export const setJob = payload => {
    return {
        type: SET_JOB_INPUT,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

export const deleteAllJob = () => {
    return {
        type: DELETE_ALL_JOB,
    }
}

export const updateJob = (payload, index) => {
    return {
        type: UPDATE_JOB,
        payload,
        index
    }
}

