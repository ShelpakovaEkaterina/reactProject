import React, { Component } from 'react';

import Task from '../task/task';

class Tasks extends Component {
    state = {
        tasks: [
            { id: '1', text: 'один', isCompleted: true },
            { id: '2', text: 'два', isCompleted: false },
            { id: '3', text: 'три', isCompleted: false }
        ]
    };

    toogleTask = (event) => {
        const { id } = event.currentTarget.dataset;
        console.log(`update task-${id}`);
        this.setState(state => ({
            tasks: state.tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, isCompleted: !task.isCompleted };
                }
                return task;
            })
        }));
    };

    render() {
        return (
            <div className="tasks">
                {this.state.tasks.map(task => (
                    <Task key={task.id} task={task} toogleTask={this.toogleTask} />
                ))}
          </div>
        );
    }
}

export default Tasks;
