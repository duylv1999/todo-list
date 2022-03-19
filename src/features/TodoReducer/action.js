import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

export const setJobs = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

// ADD JOB
export const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

// DELETE JOB
export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}