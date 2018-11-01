const cteateValidators = config => (values) => {
    const result = Object.keys(config).map((fieldName) => {
        const validators = config[fieldName];
        const fieldValue = values.get(fieldName);

        let fieldResult;

        validators.some((validator) => {
            fieldResult = validator(fieldValue);
            return fieldResult;
        });

        return { [fieldName]: fieldResult };
    });

    return Object.assign(...result);
};

export default cteateValidators;
