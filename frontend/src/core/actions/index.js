export const changeFilter = newFilter => ({
    type: 'CHANGE_FILTER',
    filter: newFilter
});

export const fetchTasksAction = () => ({
    type: 'FETCH_TASKS'
});

export const fetchTasksSuccessAction = data => ({
    type: 'FETCH_TASKS_SUCCESS',
    data
});

export const fetchTasksErrorAction = message => ({
    type: 'FETCH_TASKS_ERROR',
    message
});

export const taskDeleteAction = id => ({
    type: 'DELETE_TASK',
    id
});

export const taskDeleteSuccessAction = id => ({
    type: 'DELETE_TASK_SUCCESS',
    id
});
