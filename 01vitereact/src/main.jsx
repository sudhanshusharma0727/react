import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
  return(
    <div>
      <h1>Custom App!!!!</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
) 
const anotherUser="Sudhanshu Sharma"
const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  "click me to visit google",
  anotherUser
)

createRoot(document.getElementById('root')).render(
    
reactElement
 
)