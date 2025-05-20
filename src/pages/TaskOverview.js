import { useState, useEffect } from 'react';
import {
  getAssignedTasks,
  getUnassignedTasks,
  getCompletedTasks,
  getInProgressTasks,
  getCancelledTasks
} from '../services/api_requests'; 
export default function TaskOverview() {
  const [tasks, setTasks] = useState({
    unassigned: [],
    assigned: [],
    inProgress: [],
    completed: [],
    cancelled: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAllTasks();
  }, []);

  const loadAllTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      const [unassigned, assigned, inProgress, completed, cancelled] = await Promise.all([
        getUnassignedTasks(),
        getAssignedTasks(),
        getInProgressTasks(),
        getCompletedTasks(),
        getCancelledTasks()
      ]);

      setTasks({
        unassigned,
        assigned,
        inProgress,
        completed,
        cancelled
      });
    } catch (err) {
      setError('שגיאה בטעינת המשימות');
      console.error('Error loading tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unassigned': return 'bg-gray-100';
      case 'assigned': return 'bg-blue-100';
      case 'inProgress': return 'bg-yellow-100';
      case 'completed': return 'bg-green-100';
      case 'cancelled': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const getStatusTitle = (status) => {
    switch (status) {
      case 'unassigned': return 'לא משויכות';
      case 'assigned': return 'משויכות';
      case 'inProgress': return 'בתהליך';
      case 'completed': return 'הושלמו';
      case 'cancelled': return 'בוטלו';
      default: return status;
    }
  };

  const renderColumn = (status) => (
    <div
      key={status}
      className={`${getStatusColor(status)} p-4 rounded-lg shadow`}
    >
      <h3 className="font-medium text-gray-900 mb-4">
        {getStatusTitle(status)} ({tasks[status].length})
      </h3>
      <div className="space-y-2">
        {tasks[status].map((task) => (
          <div
            key={task.id}
            className="bg-white p-3 rounded shadow-sm cursor-move hover:shadow-md transition-shadow"
          >
<p className="text-sm font-medium text-gray-900">{task.name}</p>
{task.priorityLevel !== undefined && task.priorityLevel !== null && (
  <span
    className={`inline-flex mt-1 rounded-full px-2 text-xs font-semibold ${
      task.priorityLevel >= 7 
        ? 'bg-red-100 text-red-800'
        : task.priorityLevel >= 4
        ? 'bg-yellow-100 text-yellow-800'
        : 'bg-green-100 text-green-800'
    }`}
  >
    רמת חשיבות: {task.priorityLevel >= 7
      ? 'גבוהה'
      : task.priorityLevel >= 4
      ? 'בינונית'
      : 'נמוכה'}
  </span>
)}
{task.complexityLevel !== undefined && task.complexityLevel !== null && (
  <span
    className={`inline-flex mt-1 rounded-full px-2 text-xs font-semibold ${
      task.complexityLevel >= 7 
        ? 'bg-red-100 text-red-800'
        : task.complexityLevel >= 4
        ? 'bg-yellow-100 text-yellow-800'
        : 'bg-green-100 text-green-800'
    }`}
  >
    רמת קושי: {task.complexityLevel >= 7
      ? 'גבוהה'
      : task.complexityLevel >= 4
      ? 'בינונית'
      : 'נמוכה'}
  </span>
)}
{task.deadline && (
  <p className="text-xs text-gray-600 mt-1">
    דדליין: {new Date(task.deadline).toLocaleDateString('he-IL')}
  </p>
)}

          </div>
        ))}
        {tasks[status].length === 0 && (
          <div className="text-center text-gray-500 text-sm py-4">
            אין משימות
          </div>
        )}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64" dir="rtl">
        <div className="text-lg text-gray-600">טוען משימות...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">סקירת משימות</h1>
        <button
          onClick={loadAllTasks}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          רענן
        </button>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="text-red-800">{error}</div>
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {renderColumn('unassigned')}
        {renderColumn('assigned')}
        {renderColumn('inProgress')}
        {renderColumn('completed')}
        {renderColumn('cancelled')}
      </div>
    </div>
  );
}