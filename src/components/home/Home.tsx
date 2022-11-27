import React, { useState, useEffect } from 'react';
import styles from 'src/styles/components/home.module.scss';

export const Home: React.FC = function() {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	});

	const animated = () => {
		return animate ? ` ${styles.animated}` : '';
	}

	return (
		<div className={styles.home}>
			<section className={styles.logo}>
				<img src='./home-logo.jpg' className={animated()}></img>
				<div className={styles.titleContainer + animated()}>
					<h1 className={styles.name}>Alina Rachkouskaya</h1>
					<div className={styles.title}>Actress / Singer / Cello / Model</div>
				</div>
			</section>

			<section className={styles.about}>
				<h1 className={styles.title + ' text-title'}>About Me</h1>
				<p>Quisque bibendum tincidunt varius. Vestibulum viverra bibendum magna, mattis gravida sapien tincidunt ut. Donec felis nunc, dapibus quis facilisis quis, placerat vitae massa. Curabitur consectetur mi tellus, in dignissim nibh maximus tempus. Cras vel metus nec eros laoreet ullamcorper sed sit amet lectus. Vivamus orci mi, malesuada etteye liberet vithelacinia imperdiet ex. Vivamus egestas nibh quis pulvinar vestibulum. Mauris pellentesque eros vitae tellus dapibus egestas.</p>
				<p>Quisque bibendum tincidunt varius. Vestibulum viverra bibendum magna, mattis gravida sapien tincidunt ut. Donec felis nunc, dapibus quis facilisis quis, placerat vitae massa. Curabitur consectetur mi tellus, in dignissim nibh maximus tempus. Cras vel metus nec eros laoreet ullamcorper sed sit amet lectus. </p>
				<p>Vestibulum viverra bibendum magna, mattis gravida sapien tincidunt ut. Donec felis nunc, dapibus quis facilisis quis, placerat vitae massa. Curabitur consectetur mi tellus, in dignissim nibh maximus tempus. Cras vel metus nec eros laoreet ullamcorper sed sit amet lectus.</p>
			</section>

			<section className={styles.video}>
				<iframe src='https://www.youtube.com/embed/fzd0OX5oGrY' width="80%" height="500px"></iframe>
			</section>
		</div>
	);
}
