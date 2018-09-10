import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name = {"TypeScript"} enthusiasmLevel = {3} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
