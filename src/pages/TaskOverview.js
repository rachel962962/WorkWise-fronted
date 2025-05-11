import { useState } from 'react';

const initialTasks = {
  unassigned: [
    { id: 1, title: 'Design Homepage', priority: 'High' },
    { id: 2, title: 'Setup Database', priority: 'Medium' },
  ],
  assigned: [
    { id: 3, title: 'Create API Documentation', priority: 'Low' },
    { id: 4, title: 'Implement Authentication', priority: 'High' },
  ],
  inProgress: [
    { id: 5, title: 'Mobile Responsive Design', priority: 'Medium' },
    { id: 6, title: 'Unit Testing', priority: 'High' },
  ],
  done: [
    { id: 7, title: 'Project Setup', priority: 'Medium' },
    { id: 8, title: 'Initial Planning', priority: 'Low' },
  ],
};

export default function TaskOverview() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (e, taskId, sourceStatus) => {
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceStatus', sourceStatus);
  };

  const handleDrop = (e, targetStatus) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    const sourceStatus = e.dataTransfer.getData('sourceStatus');

    if (sourceStatus !== targetStatus) {
      setTasks(prev => {
        const task = prev[sourceStatus].find(t => t.id === taskId);
        return {
          ...prev,
          [sourceStatus]: prev[sourceStatus].filter(t => t.id !== taskId),
          [targetStatus]: [...prev[targetStatus],task],
        };
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unassigned': return 'bg-gray-100';
      case 'assigned': return 'bg-blue-100';
      case 'inProgress': return 'bg-yellow-100';
      case 'done': return 'bg-green-100';
      default: return 'bg-gray-100';
    }
  };

  const renderColumn = (status, title) => (
    <div
      className={`${getStatusColor(status)} p-4 rounded-lg shadow`}
      onDrop={(e) => handleDrop(e, status)}
      onDragOver={handleDragOver}
    >
      <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {tasks[status].map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task.id, status)}
            className="bg-white p-3 rounded shadow-sm cursor-move"
          >
            <p className="text-sm font-medium text-gray-900">{task.title}</p>
            <span className={`inline-flex mt-1 rounded-full px-2 text-xs font-semibold ${
              task.priority === 'High' ? 'bg-red-100 text-red-800' :
              task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Task Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {renderColumn('unassigned', 'Unassigned')}
        {renderColumn('assigned', 'Assigned')}
        {renderColumn('inProgress', 'In Progress')}
        {renderColumn('done', 'Done')}
      </div>
    </div>
  );
}