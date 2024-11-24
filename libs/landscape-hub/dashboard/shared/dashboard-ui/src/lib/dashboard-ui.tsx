import { Outlet } from 'react-router-dom';
import { DashboardManagementNav } from './components/dahsboard-management-nav';

export function DashboardUi() {
  return (
    <div className="flex">
      <aside className="w-64 p-4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Dashboard Management</h2>
        <DashboardManagementNav />
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>

  );
}

export default DashboardUi;
