import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import createRequest from '../core/create-request';
// import { createTask, updateTask, deleteTask } from '../core/api-config';
import classNames from '../utils/class-names';

import Task from '../task/task';
import AddTask from '../add-task/add-task';

class Tasks extends Component {
    static propTypes = {
        activeFilter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
        isLoading: PropTypes.bool.isRequired,
        changeFilter: PropTypes.func.isRequired,
        fetchTasks: PropTypes.func.isRequired,
        deleteTask: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { fetchTasks } = this.props;

        fetchTasks();
    }

    changeFilter = (event) => {
        const { filter } = event.currentTarget.dataset;
        const { changeFilter } = this.props;

        changeFilter(filter);
    }

    deleteTask = (id) => {
        const { deleteTask } = this.props;
        
        deleteTask(id);
    }

    // updateTask = (id) => {
    //     const { tasks } = this.state;
    //     const isThatTaskCompletedNow = tasks.find(task => task.id === id).isCompleted;
    //     createRequest(updateTask, { id }, { isCompleted: !isThatTaskCompletedNow })
    //         .then(({ status, data }) => {
    //             if (status === 'OK') {
    //                 this.setState(state => ({
    //                     tasks: state.tasks.map((task) => {
    //                         if (task.id === id) {
    //                             return { ...task, isCompleted: !task.isCompleted };
    //                         }
    //                         return task;
    //                     })
    //                 }));
    //             }
    //         });
    // }

    // addTask = (text) => {
    //     this.setState({
    //         isLoading: true
    //     });

    //     createRequest(createTask, null, { text })
    //         .then(({ status, data }) => {
    //             if (status === 'OK') {
    //                 this.setState(({ tasks }) => ({
    //                     isLoading: false,
    //                     tasks: tasks.concat(data)
    //                 }));
    //             }
    //         });
    // }

    render() {
        const { activeFilter, isLoading, tasks } = this.props;

        return (
            <div className={ classNames('tasks', { loading: isLoading }) }>
            {['all', 'active', 'completed'].map(filterCode => (
                <div 
                    className={classNames('tasks-filter', {
                        active: activeFilter === filterCode
                    })}
                    onClick={this.changeFilter}
                    data-filter={filterCode}
                    key={filterCode}
                >
                    {filterCode}
                </div>
            ))
            }
            <div className="tasks__list">
                {tasks.map(task => (
                    <Task key={task.get('id')} task={task.toJS()} deleteTask={this.deleteTask}/>
                ))}
            </div>
                { !isLoading && <AddTask/> }
          </div>
        );
    }
}

export default Tasks;
