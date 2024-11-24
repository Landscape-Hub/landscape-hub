import { NavLink } from 'react-router-dom';
import { Calendar, CreditCard, User, Users } from 'lucide-react';
import { cn } from '@landscape/shadcn';

const navItems = [
  { icon: Users, label: 'User List', to: '/users' },
  { icon: User, label: 'User Profile', to: '/users/profile' },
  { icon: CreditCard, label: 'Payment History', to: '/users/payment-history' },
  { icon: Calendar, label: 'Subscription Tracker', to: '/users/subscription-tracker' },
];

export function DashboardManagementNav() {
  return (
    <nav className="space-y-2">
      {navItems.map((item) => (

        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "flex items-center p-2 text-gray-600 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
              isActive && "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
            )
          }
        >
          <item.icon className="w-5 h-5 mr-3" />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

