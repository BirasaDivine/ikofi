import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import logo from '../assets/ikofi.png';

export default function MainLayout() {
	return (
		<div className="flex h-screen">
			<div className="w-72 bg-amber-200 p-4 flex flex-col">
				<img src={logo} alt="Logo" />

				<Navbar />
			</div>

			<div className="flex-1 p-6 bg-amber-200 overflow-auto shadow-2xl">
				<Outlet />
			</div>
		</div>
	);
}
