import React from "react";
import styles from 'src/styles/components/aside.module.scss';

export const AsideLogo: React.FC = function() {
	return (
		<div className={styles.logoContainer}>
			<img className={styles.logoImg} src="./logo.png"></img>
			<h1 className={styles.logoTitle}>Alina Rachkouskaya</h1>
			<div className={styles.logoSubtitle}>Actor</div>
		</div>
	);
}