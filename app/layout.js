import { inter, nunito, quicksand, mulish } from '@/app/ui/fonts';
import './globals.css';

export const metadata = {
	title: 'Jacob Layton',
	description: "Jacob Layton's Portfolio Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<meta name='apple-mobile-web-app-title' content='Jacob Layton' />
			<body className={`${mulish.className} antialiased`}>{children}</body>
		</html>
	);
}
