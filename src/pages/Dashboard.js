// import { ChartBarIcon, ClockIcon, UserGroupIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

// const stats = [
//   { name: 'Total Tasks', value: '24', icon: ChartBarIcon },
//   { name: 'Pending Tasks', value: '12', icon: ClockIcon },
//   { name: 'Available Workers', value: '8', icon: UserGroupIcon },
//   { name: 'Urgent Tasks', value: '3', icon: ExclamationCircleIcon },
// ];

// const quickActions = [
//   { name: 'Assign Task', href: '/tasks' },
//   { name: 'View Schedule', href: '/schedule' },
//   { name: 'Manage Workers', href: '/workers' },
// ];

// export default function Dashboard() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
//       <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="p-5">
//               <div className="flex items-center">
//                 <div className="flex-shrink-0">
//                   <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <div className="ml-5 w-0 flex-1">
//                   <dl>
//                     <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
//                     <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
//                   </dl>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="bg-white shadow rounded-lg">
//         <div className="p-6">
//           <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
//           <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
//             {quickActions.map((action) => (
//               <a
//                 key={action.name}
//                 href={action.href}
//                 className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
//               >
//                 <div className="flex-1 min-w-0">
//                   <span className="absolute inset-0" aria-hidden="true" />
//                   <p className="text-sm font-medium text-gray-900">{action.name}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { ChartBarIcon, ClockIcon, UserGroupIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: 'סך המשימות', value: '24', icon: ChartBarIcon },
  { name: 'משימות בהמתנה', value: '12', icon: ClockIcon },
  { name: 'עובדים זמינים', value: '8', icon: UserGroupIcon },
  { name: 'משימות דחופות', value: '3', icon: ExclamationCircleIcon },
];

const quickActions = [
  { name: 'הקצאת משימה', href: '/tasks' },
  { name: 'צפייה בלוח זמנים', href: '/schedule' },
  { name: 'ניהול עובדים', href: '/workers' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6" dir="rtl">
      <h1 className="text-2xl font-semibold text-gray-900">לוח בקרה</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 ml-5">
                  <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900">פעולות מהירות</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickActions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
              >
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{action.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}