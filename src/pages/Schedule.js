// import { useState } from 'react';

// const timeSlots = Array.from({ length: 24 }, (_, i) => 
//   `${i.toString().padStart(2, '0')}:00`
// );

// const workers = [
//   { id: 1, name: 'אליס ג' },
//   { id: 2, name: 'בוב סמית' },
//   { id: 3, name: 'קרול וויליאמס' },
// ];

// const tasks = [
//   { id: 1, workerId: 1, title: 'עיצוב אתר', start: 9, duration: 3, status: 'in-progress' },
//   { id: 2, workerId: 2, title: 'הקמת מסד נתונים', start: 13, duration: 2, status: 'pending' },
//   { id: 3, workerId: 3, title: 'בדיקות', start: 10, duration: 4, status: 'completed' },
// ];

// export default function Schedule() {
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

//   const getTaskStyle = (task) => {
//     const left = `${(task.start / 24) * 100}%`;
//     const width = `${(task.duration / 24) * 100}%`;
    
//     const statusColors = {
//       'pending': 'bg-yellow-200',
//       'in-progress': 'bg-blue-200',
//       'completed': 'bg-green-200'
//     };

//     return {
//       left,
//       width,
//       position: 'absolute',
//       height: '2rem',
//       top: '0.5rem',
//       borderRadius: '0.375rem',
//       className: `${statusColors[task.status]} shadow-sm`
//     };
//   };

//   return (
//     <div className="space-y-6" dir="rtl">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-2xl font-semibold text-gray-900">לוח זמנים צוותי</h1>
//         </div>
//         <div className="mt-4 sm:mt-0 sm:mr-16 sm:flex-none">
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
//           />
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <div className="inline-block min-w-full align-middle">
//           <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//             <div className="min-w-full">
//               {/* Timeline Header */}
//               <div className="border-b border-gray-200 bg-gray-50">
//                 <div className="grid grid-cols-[200px_1fr]">
//                   <div className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900">
//                     עובד
//                   </div>
//                   <div className="relative flex">
//                     {timeSlots.map((time) => (
//                       <div
//                         key={time}
//                         className="flex-1 py-3.5 text-center text-sm font-semibold text-gray-900 border-l border-gray-200"
//                       >
//                         {time}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline Body */}
//               <div className="bg-white">
//                 {workers.map((worker) => (
//                   <div
//                     key={worker.id}
//                     className="grid grid-cols-[200px_1fr] border-b border-gray-200"
//                   >
//                     <div className="py-4 pr-4 pl-3 text-sm font-medium text-gray-900 text-right">
//                       {worker.name}
//                     </div>
//                     <div className="relative">
//                       <div className="absolute inset-0 flex">
//                         {timeSlots.map((_, index) => (
//                           <div key={index} className="flex-1 border-l border-gray-200" />
//                         ))}
//                       </div>
//                       {tasks
//                         .filter((task) => task.workerId === worker.id)
//                         .map((task) => {
//                           const style = getTaskStyle(task);
//                           return (
//                             <div
//                               key={task.id}
//                               style={style}
//                               className={`${style.className} px-2 py-1 text-xs font-medium truncate cursor-pointer hover:opacity-75`}
//                               title={task.title}
//                             >
//                               {task.title}
//                             </div>
//                           );
//                         })}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';

const timeSlots = Array.from({ length: 24 }, (_, i) =>
  `${i.toString().padStart(2, '0')}:00`
);

const workers = [
  { id: 1, name: 'אליס ג׳' },
  { id: 2, name: 'בוב סמית' },
  { id: 3, name: 'קרול וויליאמס' },
];

const tasks = [
  { id: 1, workerId: 1, title: 'עיצוב אתר', start: 9, duration: 3, status: 'in-progress' },
  { id: 2, workerId: 2, title: 'הקמת מסד נתונים', start: 13, duration: 2, status: 'pending' },
  { id: 3, workerId: 3, title: 'בדיקות', start: 10, duration: 4, status: 'completed' },
];

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const statusColors = {
    'pending': 'bg-yellow-200',
    'in-progress': 'bg-blue-200',
    'completed': 'bg-green-200'
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">לוח זמנים צוותי</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:mr-16 sm:flex-none">
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
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-24 text-sm font-semibold text-gray-900 text-right px-2 py-2">שעה</th>
                  {workers.map((worker) => (
                    <th key={worker.id} className="text-sm font-semibold text-gray-900 text-center px-2 py-2">
                      {worker.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timeSlots.map((time, hour) => (
                  <tr key={time}>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500 text-right">{time}</td>
                    {workers.map((worker) => {
                      const task = tasks.find(
                        (t) =>
                          t.workerId === worker.id &&
                          hour >= t.start &&
                          hour < t.start + t.duration
                      );
                      return (
                        <td key={worker.id} className="px-2 py-2 text-sm text-center align-middle">
                          {task ? (
                            <div
                              className={`${statusColors[task.status]} rounded px-2 py-1 text-xs font-medium shadow-sm truncate`}
                              title={task.title}
                            >
                              {task.title}
                            </div>
                          ) : null}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
