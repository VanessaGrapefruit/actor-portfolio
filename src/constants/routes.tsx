import { About } from "src/components/about/About";
import { Home } from "src/components/home/Home";
import { NavigationItem } from "src/types/NavigationItem";

export const routes: NavigationItem[] = [
	{ url: '/', element: <Home/>, title: 'Home' },
	{ url: '/about', element: <About/>, title: 'About' }
]