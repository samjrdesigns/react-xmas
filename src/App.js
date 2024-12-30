import './App.css';
import AppProvider from './AppProvider';
import ReactXmas from './ReactXmas';

const App = () => {
  
  return (
    <AppProvider>
      <ReactXmas />
    </AppProvider>
  );
}

export default App;