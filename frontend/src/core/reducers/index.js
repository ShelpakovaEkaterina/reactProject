import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import tasks from './tasks';

export default combineReducers({ tasks, form });
