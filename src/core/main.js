import { createElement } from 'react';
import ReactDom from 'react-dom';

import Root from './root';

const rootElement = document.querySelector('#root');

ReactDom.render(createElement(Root), rootElement);
