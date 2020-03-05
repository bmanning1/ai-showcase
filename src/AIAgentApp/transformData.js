import { categories } from '../utils';

const averageCategoryScore = (tasks, category) => {
  const tasksInCategory = tasks.filter(task => task.category === category)
  const averageScore = tasksInCategory
    .reduce((count, task) => (count + task.score), 0)/tasksInCategory.length;
  // 2 decimal places
  return Math.round(averageScore * 100)/100;
};

const averageScores = (tasks) => categories.reduce((obj, category) => ({
      ...obj,
      [category]: averageCategoryScore(tasks, category),
    }), {});

// Data transformed into data we need to save memory in the App
export const transformData = (res) => res.map(agent => ({
    id: agent.id,
    name: agent.name,
    description: agent.description,
    tasks: averageScores(agent.tasks)
  }));