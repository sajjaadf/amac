import React from 'react'
import ReactDOM from 'react-dom'
// http://gaearon.github.io/react-hot-loader/getstarted/
import { AppContainer } from 'react-hot-loader'
import './index.less'

import Root from './components/Root'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./components/Root', () => { render(Root) })
}
