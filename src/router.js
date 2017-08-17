import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from 'routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('models/user'))
          cb(null, { component: require('routes/home') })
        }, 'home')
      },
      childRoutes: [
        {
          path: 'home',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/home'))
            }, 'home')
          },
        }, {
          path: 'medicalInsurance',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('models/user'))
              cb(null, require('routes/medicalInsurance'))
            }, 'medicalInsurance')
          },
        }, {
          path: 'policy',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/policy'))
              cb(null, require('routes/policy/'))
            }, 'policy')
          },
        }, {
          path: 'login',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/login'))
              cb(null, require('routes/login/'))
            }, 'login')
          },
        }, {
          path: 'request',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/request/'))
            }, 'request')
          },
        }, {
          path: 'UIElement/iconfont',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/UIElement/iconfont/'))
            }, 'UIElement-iconfont')
          },
        } , {
          path: 'UIElement/editor',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/UIElement/editor/'))
            }, 'UIElement-editor')
          },
        }, {
          path: 'post',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/post'))
              cb(null, require('routes/post/'))
            }, 'post')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
