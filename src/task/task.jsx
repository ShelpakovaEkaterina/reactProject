import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    static propTypes = {
        task: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool
        }).isRequired,
        toogleTask: PropTypes.func
    };

    shouldComponentUpdate(nextProps) {
        const { isCompleted } = this.props.task;

        return nextProps.task.isCompleted !== isCompleted;
    }

    render() {
        const { task, toogleTask } = this.props;
        console.log(task.id);
        return (
            <div
            className={`task ${task.isCompleted ? 'task__completed' : ''}`}
                onClick={toogleTask}
                data-id={task.id}
          >
                {task.text}
          </div>
        );
    }
}

export default Task;
