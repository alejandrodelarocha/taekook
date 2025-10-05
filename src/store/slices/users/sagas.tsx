import { call, put, takeLatest } from 'redux-saga/effects'
import * as actionTypes from './types'
import * as actions from './actions';
import * as apiCalls from '../../services/Users';
import { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../../types';

function* fetchUser(action:PayloadAction<number>) {
  try {
    yield put(actions.setLoading(true));
    const user : User = yield call(apiCalls.getUserById, action.payload);
    yield put(actions.setUser(user));
    yield put(actions.setLoading(false));
  } catch (e) {
    yield put(actions.setLoading(true));
    console.error(e);
  }
}


function* usersSaga() {
  yield takeLatest(actionTypes.FETCH_USER_REQUEST, fetchUser);
}

export default usersSaga;