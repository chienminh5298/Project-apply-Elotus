import React, { Fragment } from 'react';
import 'src/scss/main.scss';
import { useSelector } from 'react-redux';
import Header from 'src/components/header';
import Slider from 'src/components/slider';
import Search from 'src/components/search';
import Footer from 'src/components/footer';
import Content from 'src/components/content';
import Loading from 'src/components/loading';
export default function Main() {
	var setting = useSelector((state) => state.defaultReducer);
	var renderSetting = setting.isLoading ? (
		<Loading />
	) : (
		<Fragment>
			<Slider />
			<Search />
			<Content />
		</Fragment>
	);
	return (
		<div id='background'>
			<Header />
			{renderSetting}
			<Footer />
		</div>
	);
}
