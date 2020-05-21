import React from 'react'
import ReactDom from 'react-dom'
import App from './container/app'
import serviceWorker from './sw';

ReactDom.render(<App />, document.getElementById('root'))
serviceWorker()