/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAIL = 'POSTS_FAIL'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function postsRequest (value: array = []): Action {
  return {
    type: POSTS_REQUEST,
    payload: value
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [POSTS_REQUEST]: (state: blog, action: {payload: blog}): blog => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [{
  title: 'What to expect',
  body: 'What should you expect from this blog?'
},{
  title: 'My second blog'
}]
export default function blogReducer (state: blog = initialState, action: Action): blog {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
