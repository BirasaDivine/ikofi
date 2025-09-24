import AddWalletButton from '../components/Dashboard/AddWalletButton';
import SubscriptionList from '../components/Dashboard/SubscriptionList';
import TotalCard from '../components/Dashboard/TotalCard';
import TransactionList from '../components/Dashboard/TransactionList';
import WalletCard from '../components/Dashboard/WalletCard';
import BankCard from '../components/Dashboard/BankCard';
import { useState } from 'react';

function DashboardPage() {
	const [isOpen, setIsOpen] = useState(false);
	const handleIsOpen = () => {
		console.log('clicked!');
		setIsOpen(prev => !prev);
	};
	const [walletData, setWalletData] = useState([
		{
			name: 'Bank of Kigali',
			amount: 200,
			currency: 'USD',
		},
		{
			name: 'Ecobank',
			amount: 400,
			currency: 'USD',
		},
	]);
	const [walletName, setWalletName] = useState('');
	const [walletAmount, setWalletAmount] = useState(0);
	const [walletCurrency, setWalletCurrency] = useState('USD');

	function handleSave() {
		const newWallet = {
			name: walletName,
			amount: walletAmount,
			currency: walletCurrency,
		};
		setWalletData([...walletData, newWallet]);
		setWalletName('');
		setWalletAmount(0);
		setIsOpen(false);
	}

	return (
		<>
			<div className="flex flex-row gap-2 justify-between">
				<div className=" text-white text-2xl font-bold">Dashboard</div>
				<AddWalletButton handleIsOpen={handleIsOpen} />
			</div>
			<div className="flex flex-row gap-4 p-2">
				{walletData.map(item => {
					return <WalletCard key={item.name} WalletCardProps={item} />;
				})}

				<BankCard />
			</div>
			{isOpen && (
				<form className="bg-gray-600 rounded-2xl">
					<div>
						<label>Cash</label>
						<input
							type="text"
							placeholder="Cash"
							value={walletName}
							onChange={e => setWalletName(e.target.value)}
						/>
					</div>
					<div>
						<label>Currency</label>
						<input
							type="text"
							placeholder="currency"
							value={walletCurrency}
							onChange={e => setWalletCurrency(e.target.value)}
						/>
					</div>
					<div>
						<label>Balance</label>
						<input
							type="text"
							placeholder="00.0 EUR"
							value={walletAmount}
							onChange={e => setWalletAmount(Number(e.target.value))}
						/>
					</div>
					<button type="button" onClick={handleSave}>
						Save
					</button>
				</form>
			)}
			<div className="flex flex-row gap-6 justify-between p-4">
				<TransactionList />
				<TotalCard />
				<SubscriptionList />
			</div>
		</>
	);
}

export default DashboardPage;
