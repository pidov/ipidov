import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'blog',
  getComponent (nextState, next) {
    require.ensure([
      './containers/BlogContainer',
      './modules/blog'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Blog = require('./containers/BlogContainer').default
      const reducer = require('./modules/blog').default

      injectReducer(store, { key: 'blog', reducer })

      next(null, Blog)
    })
  }
})
