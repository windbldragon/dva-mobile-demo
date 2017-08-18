import {insure,query} from '../services/policy'
import pathToRegexp from 'path-to-regexp'

export default {
  namespace: 'policy',
  state: {
    applicantName: '',
    applicantIDNum: '',
    applicantPhone: '',
    insuredName: '',
    insuredIDNum: '',
    insuredPhone: '',
    applicantType:''
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        const match=pathToRegexp('/policy/:id').exec(location.pathname)
        if (match) {
          dispatch({
            type: 'queryPolicy',
            payload: {id:match[1]},
          })
        }
      })
    },
  },

  effects: {
    *insurePolicy({payload}, {put, call}){
      const data=yield call(insure,payload);
      yield put({type:'updatePolicy',
        payload:data.policyInfo
      })
      if(data.success){
        alert('保存成功');
      }else {
        throw data
      }
    },

    *queryPolicy({payload},{put,call}){
      const data=yield call(query,payload);
      if(data.success){
        yield put({type:'updatePolicy',
          payload:data.data})
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
  },

}
