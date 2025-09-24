import {
	ChartNoAxesGanttIcon,
	LayoutDashboard,
	Settings,
	Wallet2Icon,
	type LucideIcon,
} from 'lucide-react';
interface MainLayoutData {
	title: string;
	icon: LucideIcon;
	link: string;
}
export const MainLayoutData: MainLayoutData[] = [
	{
		title: 'Dashboard',
		icon: LayoutDashboard,
		link: '/',
	},
	{
		title: 'Wallet',
		icon: Wallet2Icon,
		link: '/Wallet',
	},
	{
		title: 'Categories',
		icon: ChartNoAxesGanttIcon,
		link: '/Categories',
	},
	{
		title: 'Settings',
		icon: Settings,
		link: '/Settings',
	},
];
