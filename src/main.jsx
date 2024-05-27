import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchApp from './SearchApp.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import FavsApp from './FavsApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchApp/>}/>
          <Route path="search" element={<SearchApp/>}/>
          <Route path="favs" element={<FavsApp/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
