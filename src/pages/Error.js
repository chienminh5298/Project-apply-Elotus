import React from 'react';
import 'src/scss/main.scss';
import Header from 'src/components/header';
import Footer from 'src/components/footer';

export default function Error() {
	return (
		<div id='background'>
			<Header />
			<div id='error'>
				<h2>Opps! Something wrong, please try again.</h2>
				<a href='/'>Refresh</a>
			</div>
			<Footer />
		</div>
	);
}
