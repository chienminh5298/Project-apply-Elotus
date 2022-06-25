import React from 'react';
import Logo from 'src/image/logo.png';
export default function header() {
	return (
		<div>
			<div id='logoWrapper'>
				<img alt='Logo' src={Logo} id='logo' />
			</div>
			<div id='navBarWrapper'>
				<div id='newsWrapper'>
					<div className='navButton'>
						<a href='#'>News</a>
					</div>
					<div className='navButton'>
						<a href='#'>Promotion</a>
					</div>
					<div className='navButton'>
						<a href='#'>Forum</a>
					</div>
				</div>
				<div id='loginWrapper'>
					<div className='navButton'>
						<a href='#'>
							<i className='fa-solid fa-user mr-1'></i> Login
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
