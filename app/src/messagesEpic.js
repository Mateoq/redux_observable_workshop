import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/delay';

import {
  SHOW_MESSAGES,

  addMessage,
  removeMessages
} from './reducer';

const delayedAction = (action) => (
  Observable.of(action)
    .delay(800)
);
