import React from "react";
import styles from 'src/styles/components/aside.module.scss';

export const AsideFooter: React.FC = () => {
	const items = [
		{ url: '', iconUrl: './instagram.png' },
		{ url: '', iconUrl: './facebook.png' },
		{ url: '', iconUrl: './youtube.png' },
		{ url: '', iconUrl: './tiktok.png' },
	]
	return (
		<footer className={styles.footer}>
			{ items.map(item => <a href={item.url} className={styles.footerItem}>
				<img src={`./${item.iconUrl}`}></img>
			</a>) }
		</footer>
	)
}