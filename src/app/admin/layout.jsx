'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FileText, Gift, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Remove the admin token cookie
    Cookies.remove('admin_token');
    
    // Redirect to admin login
    router.push('/admin');
  };

  const navigation = [
    {
      name: 'Templates',
      href: '/admin/templates',
      icon: FileText,
      current: pathname.startsWith('/admin/templates'),
    },
    {
      name: 'Giveaway Keys',
      href: '/admin/giveaway',
      icon: Gift,
      current: pathname.startsWith('/admin/giveaway'),
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold text-[var(--primary-text)]">Admin Panel</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      item.current
                        ? 'border-b-2 border-[var(--accent-text)] text-[var(--accent-text)]'
                        : 'text-[var(--secondary-text)] hover:border-b-2 hover:border-zinc-300 hover:text-[var(--primary-text)]'
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-md bg-zinc-800 p-2 text-[var(--secondary-text)] hover:text-[var(--primary-text)] cursor-pointer"
              >
                <LogOut className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                item.current
                  ? 'bg-zinc-900 text-[var(--accent-text)]'
                  : 'text-[var(--secondary-text)] hover:bg-zinc-900 hover:text-[var(--primary-text)]'
              } block px-3 py-2 text-base font-medium`}
            >
              <div className="flex items-center">
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
} 