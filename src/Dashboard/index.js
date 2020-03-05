import React from 'react';
import PropTypes from 'prop-types';
import { categories, capitalize } from '../utils';
import './Dashboard.css';

const Loading = () => (
    <div className="loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
);

const DashboardTable = ({ agents, toggleCheck, selectedAgents }) => (
    <table className="dashboard-table" cellSpacing="0" cellPadding="0">
        <tbody>
            <tr>
                <th></th>
                <th></th>
                <th colSpan="3">Average Task Score</th>
            </tr>
            <tr>
                <th>Agent</th>
                <th>Description</th>
                {categories.map(category => (
                    <th>{capitalize(category)}</th>
                ))}
            </tr>
            {agents.map(agent => (
                <tr
                    className={`data-row ${selectedAgents.includes(agent.id) && 'selected'}`}
                    key={agent.id}
                    onClick={() => toggleCheck(agent.id)}
                >
                    <td>{agent.name}</td>
                    <td>{agent.description}</td>
                    {categories.map(category => (
                        <td>{agent.tasks[category]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

const Dashboard = (props) => !props.agents.length
    ? <Loading />
    : <DashboardTable  {...props} />;

Dashboard.propTypes = {
    agents: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        tasks: PropTypes.objectOf(PropTypes.number)
      })).isRequired,
    toggleCheck: PropTypes.func.isRequired,
    selectedAgents: PropTypes.arrayOf(PropTypes.number)
};

export default Dashboard;
  