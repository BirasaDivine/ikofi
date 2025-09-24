import { Link } from 'react-router-dom';
export function Navbar() {
	return (
		<>
			<nav className="flex flex-col space-y-6 pt-10 ">
				<Link to="/">Dashboard</Link>
				<Link to="Wallet">Wallet</Link>
				<Link to="Categories">Categories</Link>
				<Link to="Settings">Settings</Link>
			</nav>
		</>
	);
}
