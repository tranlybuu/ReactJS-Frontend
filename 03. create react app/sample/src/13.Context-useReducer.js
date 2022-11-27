import NewApp from './NewApp'
import {StoreProvider} from './store'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <NewApp />
      </div>
    </StoreProvider>
  );
}

export default App;
