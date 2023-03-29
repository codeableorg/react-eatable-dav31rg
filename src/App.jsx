import DishesList from './pages/DishesList'
import { DishesProvider } from './context/DishesContext'

function App() {


  return (
    <DishesProvider>
      <DishesList />
    </DishesProvider>
  )
}

export default App
