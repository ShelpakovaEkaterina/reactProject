import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { TextInput, Button } from '../controls';
import { createValidators, requireValidator, minLengthValidator } from '../validators';

const validate = createValidators({
    text: [
        requireValidator({ message: 'Обязательно надо' }),
        minLengthValidator({ message: 'Больше пяти давай', minLength: 6 })
    ]
});

const warn = createValidators({
    text: [minLengthValidator({ message: 'Надо больше', minLength: 21 })]
});

function AddTaskForm({ handleSubmit, submitting }) {
    return (
        <form className="add-task-form" onSubmit={handleSubmit}>
            <Field name="text" type="text" component={TextInput} label="Добавить задачу: " />
            <Button isSubmit isDisabled={submitting} label="Добавить" />
      </form>
    );
}

export default reduxForm({ form: 'addTask', validate, warn })(AddTaskForm);
