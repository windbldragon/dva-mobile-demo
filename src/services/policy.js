import { request, config } from 'utils'

const { api } = config
const { insurePolicy } = api

export async function insure(params) {
  return request({
    url:insurePolicy,
    method:'post',
    data:params
  })
}
