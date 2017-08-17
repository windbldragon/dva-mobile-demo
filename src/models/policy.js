import {insure} from '../services/policy'

export default {
  namespace: 'policy',
  state: {
    applicantName: '',
    applicantIDNum: ''
  },

  effects: {
    *insurePolicy({payload}, {put, call}){
      const data=yield call(insure,payload);
      const info={
        applicantName:'bbb',
        applicantIDNum:3,
      }
      yield put({type:'updatePolicy',
        payload:{
          applicantName:'bbb',
          applicantIDNum:3,
        }
      })
      if(data.success){
        alert(123);
      }else {
        throw data
      }
    }
  },

  reducers:{
    updatePolicy(state,{payload}){
      return {
        ...state,
        ...payload
      }
    },
  }
}
