import React from 'react'
import ReactDom from 'react-dom'
import App from './container/app'

ReactDom.render(<App />, document.getElementById('root'))
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      console.log('SW registered');
    }).catch(err => {
      console.log('SW registration failed: ', err);
    });
  });
}