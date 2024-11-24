import { Bell, User } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Layout Header</h1>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-200 mr-4">
              <Bell className="h-6 w-6" />
            </button>
            <button className="flex items-center text-gray-500 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-200">
              <User className="h-6 w-6" />
              <span className="ml-2">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

