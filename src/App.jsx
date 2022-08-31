import { useContext } from 'react'
import Header from './components/Header'
import TasksProvider from './context/TasksContext'
import TaskContainer from './components/TaskContainer' 
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    
      <TasksProvider>
        <div className={`min-h-screen ${ theme =='dark'?"bg-slate-900":"bg-slate-100" }`}>
          <Header />
          <TaskContainer />
        </div>
      </TasksProvider>
  
  )
}

export default App
