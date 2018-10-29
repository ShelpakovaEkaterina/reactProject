import { connect } from 'react-redux';
import {
    changeFilter,
    fetchTasksAction,
    fetchTasksSuccessAction,
    fetchTasksErrorAction
} from '../core/actions';
import createRequest from '../core/create-request';
import { fetchTasks } from '../core/api-config';
import Tasks from './tasks';

const filterTasksFunction = activeFilter => (task) => {
    switch (activeFilter) {
    case 'all':
        return true;
    case 'active':
        return !task.get('isCompleted');
    case 'completed':
        return task.get('isCompleted');
    default:
        return true;
    }
};

const mapStateToProps = (state) => {
    const { activeFilter } = state.getIn(['tasks', 'activeFilter']);

    return {
        activeFilter,
        tasks: state.getIn(['tasks', 'data']).filter(filterTasksFunction(activeFilter)),
        isLoading: state.getIn(['tasks', 'isLoading'])
    };
};

const mapDispatchToProps = dispatch => ({
    changeFilter: newFilter => dispatch(changeFilter(newFilter)),
    fetchTasks: () => {
        dispatch(fetchTasksAction());
        createRequest(fetchTasks).then((response) => {
            if (response.status === 'OK') {
                dispatch(fetchTasksSuccessAction(response.data));
            } else {
                dispatch(fetchTasksErrorAction(response.messages));
            }
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);
