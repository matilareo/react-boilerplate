/**
 * Root Sagas
 */
 import { all } from 'redux-saga/effects';

 // sagas
 import apiSagas from './Api';

 
 export default function* rootSaga() {
   yield all([
     apiSagas(),
   ]);
 }
 