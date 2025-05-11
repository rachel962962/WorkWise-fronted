import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ViewColumnsIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/' },
  { name: 'Task Assignment', icon: ClipboardDocumentListIcon, href: '/tasks' },
  { name: 'Worker Management', icon: UserGroupIcon, href: '/workers' },
  { name: 'Task Overview', icon: ViewColumnsIcon, href: '/overview' },
  { name: 'Schedule', icon: CalendarIcon, href: '/schedule' },
  { name: 'Profile', icon: UserIcon, href: '/profile' },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex h-16 flex-shrink-0 items-center px-4">
          <h1 className="text-2xl font-bold text-primary-600">TaskManager</h1>
        </div>
        <nav className="mt-5 flex-1 space-y-1 px-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0"
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}