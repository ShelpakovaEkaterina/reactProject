import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTaskForm from './add-task-form';

class AddTask extends Component {
    // static propTypes = {
    //     addTask: PropTypes.func.isRequired
    // };

    onSubmit = (values) => {
        console.log(values.toJS());

        // const { addTask } = this.props;

        // addTask(this.textRef.current.value);
        // this.textRef.current.value = '';
    };

    render() {
        return <AddTaskForm onSubmit={this.onSubmit} />;
    }
}

export default AddTask;
