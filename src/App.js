import { Admin, Resource } from 'react-admin';
import dataProvider from './data';
import List from './components/List/List';
import './App.css';

function App() {
  // const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={List} />
      </Admin>
    </div>
  );
}

export default App;
