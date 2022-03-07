import type { Component } from 'solid-js';

import styles from './footer.module.css';
import logo from '../assets/baddle-logo.png';
import { Link } from 'solid-app-router';

const FooterComponent: Component = (props) => {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<Link href="terms" className={styles.link}>
					Terms of Service
				</Link>
				<Link href="/" className={styles.logo}>
					<img src={logo} alt="baddle logo" />
				</Link>
				<Link href="privacy" className={styles.link}>
					Privacy Policy
				</Link>
			</div>
		</div>
	);
};

export { FooterComponent };