import React, { useEffect, useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Comparison from '../Comparison';
import { AgentsApi } from '../data';
import { transformData } from './transformData';
import './AIAgentApp.css';

const AIAgentApp = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgents, setSelectedAgents] = useState([]);

  // Run on first render of component
  useEffect(() => {
    const agentsApi = new AgentsApi();
    Promise.resolve(agentsApi.listAgents())
        .then(res => setAgents(transformData(res)))
        .catch(() => alert('There was an error fetching the data. Please refresh the page.'));
  }, []);

  const toggleCheck = (id) => {
    if (selectedAgents.includes(id)) {
      const unselectAgent = selectedAgents.filter(agent => agent !== id );
      setSelectedAgents(unselectAgent)
    } else if (selectedAgents.length === 2) {
      alert('Can\'t compare more than 2 agents. To select other agents, unselect the current ones.')
    } else {
      const selectAgent = [ ...selectedAgents, id ];
      setSelectedAgents(selectAgent)
    }
  };

  return (
    <div>
      <h1 className="title"><b>DeepMind</b> AI Agent Comparison</h1>
      <ul className="navigation">
        <li><NavLink exact to="/">Dashboard</NavLink></li>
        <li><NavLink to="/compare">Compare</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" render={() => 
          <Dashboard
            agents={agents}
            toggleCheck={toggleCheck}
            selectedAgents={selectedAgents}
          />}/>
        <Route path="/compare" render={() =>
          <Comparison
            agents={agents.filter(agent => selectedAgents.includes(agent.id))}
          />}/>
      </div>
    </div>
  );
}

export default AIAgentApp;
