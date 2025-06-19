import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoApp from './todo-app/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoApp />
  </StrictMode>,
)
