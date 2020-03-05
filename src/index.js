import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AIAgentApp from './AIAgentApp';
import './index.css';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AIAgentApp />
    </BrowserRouter>, document.getElementById('root'));
