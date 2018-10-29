import { Map } from 'immutable';

const defaultState = Map({
    activeFilter: 'all',
    data: [],
    loading: false
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

    default:
        return state;
    }
};
