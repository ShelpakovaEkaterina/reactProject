import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, isSubmit, isDisabled }) {
    return (
        <button className="button" type={isSubmit && 'submit'} disabled={isDisabled}>
            {label}
      </button>
    );
}

export default Button;
