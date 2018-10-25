import React, { Component } from 'react';
import createRequest from '../core/create-request';
import { fetchTasks, createTask, updateTask, deleteTask } from '../core/api-config';
import classNames from '../utils/class-names';

import Task from '../task/task';
import AddTask from '../add-task/add-task';

class Tasks extends Component {
    state = {
        tasks: [],
        isLoading: true
    };

    componentDidMount() {
        createRequest(fetchTasks).then((response) => {
            if (response.status === 'OK') {
                this.setState({ isLoading: false, tasks: response.data });
            }
        });
    }

    deleteTask = (id) => {
        createRequest(deleteTask, { id }, null)
            .then(({ status, data }) => {
                if (status === 'OK') {
                    this.setState(state => ({
                        tasks: state.tasks.filter((task) => {
                            if (task.id !== id) {
                                return task;
                            }
                            return null;
                        })
                    }));
                }
            });
    }

    updateTask = (id) => {
        const { tasks } = this.state;
        const isThatTaskCompletedNow = tasks.find(task => task.id === id).isCompleted;
        createRequest(updateTask, { id }, { isCompleted: !isThatTaskCompletedNow })
            .then(({ status, data }) => {
                if (status === 'OK') {
                    this.setState(state => ({
                        tasks: state.tasks.map((task) => {
                            if (task.id === id) {
                                return { ...task, isCompleted: !task.isCompleted };
                            }
                            return task;
                        })
                    }));
                }
            });
    }

    addTask = (text) => {
        this.setState({
            isLoading: true
        });

        createRequest(createTask, null, { text })
            .then(({ status, data }) => {
                if (status === 'OK') {
                    this.setState(({ tasks }) => ({
                        isLoading: false,
                        tasks: tasks.concat(data)
                    }));
                }
            });
    }

    render() {
        const { tasks, isLoading } = this.state;

        return (
            <div className={ classNames('tasks', { loading: isLoading }) }>
                {tasks.map(task => (
                    <Task key={task.id} task={task} updateTask={this.updateTask} deleteTask={this.deleteTask}/>
                ))}
                { !isLoading && <AddTask addTask={this.addTask}/> }
          </div>
        );
    }
}

export default Tasks;
