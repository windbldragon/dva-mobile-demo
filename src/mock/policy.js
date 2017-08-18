const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')
const {apiPrefix} = config

module.exports = {
  [`POST ${apiPrefix}/user/policy`](req,res){
    if(req){
      res.json({ success: true, message: 'Ok',policyInfo:req.body})
    }
    else {
      res.status(400).end()
    }
  },

  [`GET ${apiPrefix}/user/policyInfo`](req,res){
    const info={
      applicantName: '喜欢的人',
      applicantIDNum: '666',
      applicantPhone: '777',
      insuredName: '小龙',
      insuredIDNum: '222',
      insuredPhone: '333',
      applicantType:'行驶证'
    }
    if(req){
      res.json({ success: true, message: 'Ok',data:info})
    }
    else {
      res.status(400).end()
    }
  },
};
