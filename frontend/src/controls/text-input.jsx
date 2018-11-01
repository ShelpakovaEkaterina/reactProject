import React from 'react';
import classNames from '../utils/class-names';

function TextInput({
    input, label, type, meta: { touched, error, warning }
}) {
    return (
        <div className={classNames('text-input', type)}>
        <label className="text-input__label" htmlFor={input.name}>
                {label}
          </label>
            <input className="text-input__input" {...input} id={input.name} type={type} />
            {touched
                && (error || warning) && (
                <div
                  className={classNames('text-input__message', {
                        error,
                        warning: !error && warning
                    })}
                >
                    {error || warning}
                </div>
            )}
      </div>
    );
}

export default TextInput;
