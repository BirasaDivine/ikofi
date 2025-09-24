export default function AddWalletButton(handleIsOpen: () => void) {
	return (
		<>
			<button onClick={handleIsOpen} className="bg-white  p-2 rounded-xl">
				Add Wallet
			</button>
		</>
	);
}
