import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import WalletPage from './pages/WalletPage';
import CategoriesPage from './pages/CategoriesPage';
import SettingsPage from './pages/SettingsPage';
import MainLayout from './layouts/MainLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '', element: <DashboardPage /> },
			{ path: '/Categories', element: <CategoriesPage /> },
			{ path: '/Wallet', element: <WalletPage /> },
			{ path: '/Settings', element: <SettingsPage /> },
		],
		errorElement: <div>404 Not Found</div>,
	},
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
