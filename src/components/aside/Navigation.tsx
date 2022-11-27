import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from 'src/constants/routes';
import styles from 'src/styles/components/aside.module.scss';


export const AsideNavigation: React.FC = function() {
	const pathname = useLocation().pathname;
	return (
		<ul className={styles.nav}>
			{ routes.map(item => <li className={`${styles.navItem} text-grey`}>
				<NavLink to={item.url} className={pathname === item.url ? styles.active : ''}>{item.title}</NavLink>
			</li>) }
		</ul>
	);
}