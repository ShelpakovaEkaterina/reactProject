export const fetchTasks = {
    path: '/api/v1/tasks',
    method: 'GET'
};

export const createTask = {
    path: '/api/v1/tasks',
    method: 'POST'
};

export const updateTask = {
    path: '/api/v1/tasks/:id',
    method: 'PATCH'
};

export const deleteTask = {
    path: '/api/v1/tasks/:id',
    method: 'DELETE'
};
