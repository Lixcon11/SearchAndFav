import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from  "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './App/store.js'
export const paths = {
  forSearch: "search",
  forFavs: "favs"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App/>}/>
          <Route path={paths.forSearch} element={<App colorModTheme={"--searchTheme"}/>}/>
          <Route path={paths.forFavs} element={<App colorModTheme={"--favsTheme"}/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
