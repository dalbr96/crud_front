import CategoryForm from './category/CategoryForm'
import { StoreProvider } from './storeProvider'
import TodoContainer from './todo/TodoContainer'
import CategoryList from './category/CategoryList'


function App() {
  return <StoreProvider>
    <CategoryForm />
    <CategoryList />
  </StoreProvider>;
}

export default App;
