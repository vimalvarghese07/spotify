import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './utils/StateProvider';
import reducer,{initialState} from './utils/Reducer';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

