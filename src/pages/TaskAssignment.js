import { useEffect, useState } from 'react';
import { getAllWorkers, getAllTasks } from '../services/api_requests';

export default function TaskAssignment() {
  const [tasks, setTasks] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tasksData, workersData] = await Promise.all([
          getAllTasks(),
          getAllWorkers(),
        ]);
        setTasks(tasksData);
        setWorkers(workersData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6" dir="rtl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">הקצאת משימות</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:mr-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
          >
            שייך אוטומטית
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-6">
                      שם משימה
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                      מיומנות נדרשת
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                      תאריך יעד
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                      עדיפות
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                      שייך ל
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tasks.map((task) => {
                    const priorityLevel =
                      task.priorityLevel > 6
                        ? 'גבוהה'
                        : task.priorityLevel > 3
                        ? 'בינונית'
                        : 'נמוכה';

                    const priorityClass =
                      task.priorityLevel > 6
                        ? 'bg-red-100 text-red-800'
                        : task.priorityLevel > 3
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800';

                    return (
                      <tr key={task.taskId}>
                        <td className="whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium text-gray-900 sm:pr-6">
                          {task.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{task.skill}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{task.deadline}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${priorityClass}`}>
                            {priorityLevel}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <select
                            className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-3 pl-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                            onChange={(e) => setSelectedTask({ taskId: task.taskId, workerId: e.target.value })}
                          >
                            <option value="">בחר עובד</option>
                            {workers.map((worker) => (
                              <option key={worker.workerId} value={worker.workerId}>
                                {worker.firstName} {worker.lastName}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
