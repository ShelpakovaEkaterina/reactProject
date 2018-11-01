export default ({ message, minLength }) => value => value && value.length < minLength && message;
