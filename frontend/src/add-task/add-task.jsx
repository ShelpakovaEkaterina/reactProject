import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
    textRef = createRef();

    static propTypes = {
        addTask: PropTypes.func.isRequired
    };

    onSubmit = (event) => {
        event.preventDefault();

        const { addTask } = this.props;

        addTask(this.textRef.current.value);
        this.textRef.current.value = '';
    };

    render() {
        return (
            <form className="add-task" onSubmit={this.onSubmit}>
                <input className="add-task__field" type="text" name="text" ref={this.textRef} />
                <input className="add-task__button" type="submit" value="Добавить" />
          </form>
        );
    }
}

export default AddTask;
