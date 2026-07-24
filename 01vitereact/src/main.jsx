import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Alok from './alok.jsx'
import App from './App.jsx'

//react element 
// const anoElement=(
//   <a href='https://google.com' target='_blank'>Visit google </a>
// )
const reactele = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alok/>
    <App/>
    
    {reactele}
  </StrictMode>
)
