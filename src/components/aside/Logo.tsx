import React from "react";
import styles from 'src/styles/components/aside.module.scss';

export const AsideLogo: React.FC = function() {
	return (
		<div className={styles.logoContainer}>
			<img className={styles.logoImg} src="./logo.png"></img>
			<h1 className={styles.name}>Alina Rachkouskaya</h1>
			<div className={styles.title}>Actor</div>
		</div>
	);
}