import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getComments } from './actionMaker/commentActionMaker';
import { getPosts } from './actionMaker/postActionMaker';
import './App.css';
import Body from './components/Body';

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getPosts())
    dispatch(getComments())
  },[dispatch])
  return (
    <div className="App">
      <header className="App-header">
        <Body/>
      </header>
    </div>
  );
}

export default App;
