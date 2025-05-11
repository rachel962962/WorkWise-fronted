import { useState } from 'react';

const timeSlots = Array.from({ length: 24 }, (_, i) => 
  `${i.toString().padStart(2, '0')}:00`
);

const workers = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Carol Williams' },
];

const tasks = [
  { id: 1, workerId: 1, title: 'Website Design', start: 9, duration: 3, status: 'in-progress' },
  { id: 2, workerId: 2, title: 'Database Setup', start: 13, duration: 2, status: 'pending' },
  { id: 3, workerId: 3, title: 'Testing', start: 10, duration: 4, status: 'completed' },
];

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const getTaskStyle = (task) => {
    const left = `${(task.start / 24) * 100}%`;
    const width = `${(task.duration / 24) * 100}%`;
    
    const statusColors = {
      'pending': 'bg-yellow-200',
      'in-progress': 'bg-blue-200',
      'completed': 'bg-green-200'
    };

    return {
      left,
      width,
      position: 'absolute',
      height: '2rem',
      top: '0.5rem',
      borderRadius: '0.375rem',
      className: `${statusColors[task.status]} shadow-sm`
    };
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Team Schedule</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="min-w-full">
              {/* Timeline Header */}
              <div className="border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-[200px_1fr]">
                  <div className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Worker
                  </div>
                  <div className="relative flex">
                    {timeSlots.map((time, index) => (
                      <div
                        key={time}
                        className="flex-1 py-3.5 text-center text-sm font-semibold text-gray-900 border-l border-gray-200"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Body */}
              <div className="bg-white">
                {workers.map((worker) => (
                  <div
                    key={worker.id}
                    className="grid grid-cols-[200px_1fr] border-b border-gray-200"
                  >
                    <div className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {worker.name}
                    </div>
                    <div className="relative">
                      {/* Time slots background */}
                      <div className="absolute inset-0 flex">
                        {timeSlots.map((_, index) => (
                          <div
                            key={index}
                            className="flex-1 border-l border-gray-200"
                          />
                        ))}
                      </div>

                      {/* Tasks */}
                      {tasks
                        .filter((task) => task.workerId === worker.id)
                        .map((task) => {
                          const style = getTaskStyle(task);
                          return (
                            <div
                              key={task.id}
                              style={style}
                              className={`${style.className} px-2 py-1 text-xs font-medium truncate cursor-pointer hover:opacity-75`}
                              title={task.title}
                            >
                              {task.title}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}