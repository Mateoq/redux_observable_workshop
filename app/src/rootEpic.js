import { combineEpics } from 'redux-observable';

import login from './loginEpic';
import messages from './messagesEpic';

const rootEpic = combineEpics(login, messages);

export default rootEpic;
