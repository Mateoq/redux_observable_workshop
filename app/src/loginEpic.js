import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/delay';

import { replace } from 'react-router-redux';

import {
  REQUEST_LOGIN,

  loginSucceded,
  hideLoading,
  hideToast,
  showLoading,
  showToast
} from './reducer';
import { HOME, API_URL } from './constants';

const showToast$ = message => (
  Observable.of(showToast(message))
    .delay(300)
);

const hideToast$ = () => (
  Observable.of(hideToast())
    .delay(1400)
);

const hideLoading$ = () => (
  Observable.of(hideLoading())
    .delay(1400)
);
