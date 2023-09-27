import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers/taskReducer';

const store = createStore(taskReducer);

function App() {
  return (
    <Provider store={store}>
      {/* Your app components */}
    </Provider>
  );
}

export default App;

