import { BellIcon } from '@heroicons/react/24/outline';

export default function TopBar() {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1"></div>
        <div className="ml-4 flex items-center md:ml-6 space-x-4">
          <button
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
          >
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="relative">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">
                John Doe (Manager)
              </span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}