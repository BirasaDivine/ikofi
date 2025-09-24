type WalletCardProps = {
	name: string;
	amount: number;
};
export default function WalletCard({ name, amount }: WalletCardProps) {
	return (
		<>
			<div className="p-2 bg-gray-400 rounded-lg">
				<h1 className="text-gray-500">{name}</h1>
				<h2 className="text-white text-2xl font-bold">{amount}</h2>
			</div>
		</>
	);
}
