import ReactDOM from 'react-dom/client';
import { App } from './App';

const loader = document.querySelector('.loader');

const hideLoader = () => loader?.classList.add('loader--hide');

ReactDOM.createRoot(document.getElementById('root')!)
    .render(<App hideLoader={hideLoader} />);
