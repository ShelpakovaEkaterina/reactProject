import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    static propTypes = {
        task: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool
        }).isRequired,
        updateTask: PropTypes.func,
        deleteTask: PropTypes.func
    };

    shouldComponentUpdate(nextProps) {
        const { task } = this.props;

        return nextProps.task.isCompleted !== task.isCompleted;
    }

    deleteTask = () => {
        const { deleteTask, task } = this.props;

        deleteTask(task.id);
    };

    updateTask = () => {
        const { updateTask, task } = this.props;

        updateTask(task.id);
    };

    render() {
        const { task } = this.props;
        return (
            <div>
            <span
                    className={`task ${task.isCompleted ? 'task__completed' : ''}`}
                    id={task.id}
                    onClick={this.updateTask}
              >
                {task.text}
              </span>
                <span className="task__delete" onClick={this.deleteTask}>
                    Удалить
              </span>
          </div>
        );
    }
}

export default Task;
