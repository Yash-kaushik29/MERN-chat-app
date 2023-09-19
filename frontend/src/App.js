import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={HomePage} />
      <Route path='/chats' component={ChatPage} />
    </div>
  );
}

export default App;
