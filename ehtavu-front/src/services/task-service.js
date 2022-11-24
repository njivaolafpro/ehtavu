'use strict';

import axios from 'axios';

let requesterInstance;

const getTasksList = () => {
    return requesterInstance.get('tasks', { timeout: 1500 });
};

const createTask = (taskItem) => {
    return requesterInstance.post('tasks', { data: taskItem, timeout: 1500 });
};
/**
 * 
 * @param {String} apiUrl 
 * @returns 
 */
const buildTaskService = () => {
    requesterInstance = axios.create({
        baseURL: 'http://localhost:3000/api/',
        timeout: 1000,
        headers: {
            'X-Custom-Header': 'blabla',
            "Access-Control-Allow-Origin": "*" // TODO -> change
        }
    });


    return { getTasksList, createTask };
}

export default buildTaskService;
