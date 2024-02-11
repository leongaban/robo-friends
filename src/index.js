import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
// eslint-disable-next-line
import tachyons from 'tachyons'

const rootId = document.getElementById('app-root')

ReactDOM.createRoot(rootId).render(
  <>
    <App />
  </>
)
