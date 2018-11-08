module.exports = {
    env: {
        browser: true,
        es6: true,
        'jest/globals': true
    },
    plugins: ['jest'],
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4]
    }
};
