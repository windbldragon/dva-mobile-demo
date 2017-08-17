const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const {apiPrefix} = config

module.exports = {
  [`POST ${apiPrefix}/user/policy`](req,res){
    if(req){
      res.json({ success: true, message: 'Ok',policyInfo:{a:1,b:2}})
    }
    else {
      res.status(400).end()
    }
  }
}
