import { Map } from 'immutable';

const defaultState = Map({
    activeFilter: 'all',
    data: [],
    isLoading: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
    case 'FETCH_TASKS':
        return state.set('isLoading', true);

    case 'FETCH_TASKS_SUCCESS':
        return state.merge({ isLoading: false, data: action.data });

    case 'FETCH_TASKS_ERROR':
        return state.merge({ isLoading: false, messages: action.messages });

    case 'CHANGE_FILTER':
        return state.set('activeFilter', action.filter);

    case 'DELETE_TASK':
        return state;

    case 'DELETE_TASK_SUCCESS':
        return state.set(
            'data',
            state.get('data').filter(task => task.get('id') !== action.id)
        );

    default:
        return state;
    }
};
