import { request, config } from 'utils'

const { api } = config
const { insurePolicy } = api
const { getPolicy } = api

export async function insure(params) {
  return request({
    url:insurePolicy,
    method:'post',
    data:params
  })
}

export async function query(params) {
  return request({
    url:getPolicy,
    method:'get',
    data:params
  })
}
