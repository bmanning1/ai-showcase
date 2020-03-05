import React from 'react';
import PropTypes from 'prop-types';
import { categories, capitalize } from '../utils';
import './Comparison.css';

const Instructions = () => (
    <p className="instructions">
        Go to the dashboard and select <b>2 agents</b> to compare by clicking on them.
    </p>
);

const ComparisonTable = ({ agents }) => {

    const agentWithMaxScore = (category) => {
        const maxScore = agents.reduce((highestScore, agent) => 
            (agent.tasks[category] > highestScore ? agent.tasks[category] : highestScore), 0);
        const agentWithMaxScore = agents.find(agent => maxScore === agent.tasks[category]).id;
        return agentWithMaxScore;
    };

    const highlightHighestScore = (agent, category) => 
        ((agent.id === agentWithMaxScore(category)) ? 'higher-score' : undefined);

    return (
        <table className="comparison-table" cellSpacing="0" cellPadding="0">
            <tbody>
                <tr>
                    <th></th>
                    {agents.map(agent => <th key={agent.id}>{agent.name}</th>)}
                </tr>
                <tr>
                    <td></td>
                    {agents.map(agent => <td key={agent.id}>{agent.description}</td>)}
                </tr>
                {categories.map((category, i) => (
                    <tr key={i}>
                        <td>{capitalize(category)}</td>
                        {agents.map(agent => (
                            <td key={agent.id} className={highlightHighestScore(agent, category)}>
                                {agent.tasks[category]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

const Comparison = (props) => props.agents.length !== 2
    ? <Instructions />
    : <ComparisonTable  {...props} />;

Comparison.propTypes = {
    agents: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        tasks: PropTypes.objectOf(PropTypes.number)
      }))
};

export default Comparison;