import React from 'react';
import styles from 'src/styles/components/aside.module.scss';
import { NavigationItem } from 'src/types/NavigationItem';
import { About } from '../about/About';
import { Home } from '../home/Home';
import { AsideFooter } from './AsideFooter';
import { AsideLogo } from './Logo';
import { AsideNavigation } from './Navigation';

export const Aside: React.FC = function() {
	return (
		<aside className={styles.aside}>
			<AsideLogo/>
			<AsideNavigation/>
			<AsideFooter/>
		</aside>
	);
}