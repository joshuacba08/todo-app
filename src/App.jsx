
import './App.css'
import Header from './components/Header'
import InputTask from './components/InputTask'
import TaskContainer from './components/TaskContainer'

function App() {

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <TaskContainer />
    </div>
  )
}

export default App
