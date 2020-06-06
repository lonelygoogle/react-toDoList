import { takeEvery, put } from 'redux-saga/effects'
import { INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'
import axios from 'axios'
// import store from '../store'

function* getInitList () {
    const res = yield axios.get('/list.json')
    const action = initListAction(res.data)
    yield put(action)
}

function* mySaga() {
    yield takeEvery(INIT_LIST, getInitList)
  }
  
  export default mySaga;