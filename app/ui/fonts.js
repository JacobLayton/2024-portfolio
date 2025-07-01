import { Inter, Nunito, Quicksand, Mulish } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const nunito = Nunito({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const quicksand = Quicksand({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const mulish = Mulish({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});
