import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


import './App.css'
import SearchScreen from '../SearchScreen/SearchScreen'

injectTapEventPlugin()

const App = props => (
  <MuiThemeProvider>
  <div className="App">
    <SearchScreen />
  </div>
</MuiThemeProvider>
)

export default App
