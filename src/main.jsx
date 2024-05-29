import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import Favs from './FavsPage/Favs.jsx'
import Search from './SearchPage/Search.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="favs" element={<Favs/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
