// src/lib/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

const theme = writable<Theme>('light');

if (browser) {
	theme.subscribe((value) => {
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
}

export { theme };