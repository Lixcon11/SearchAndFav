import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { data } from './App/Features/globalData/globalDataSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path={data.forSearch.path} element={<App/>}/>
          <Route path={data.forFavs.path} element={<App/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
