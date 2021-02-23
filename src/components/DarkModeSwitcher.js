import React, { useEffect } from 'react'

export default function DarkModeSwitcher() {

	useEffect(() => {
		let btn = document.getElementById('checkbox1')
		let theme = document.querySelector('#theme-link')

		btn.addEventListener('change', function () {
			// If the current URL contains "light-theme.css"
			if (theme.getAttribute('href') === 'css/light-theme.css') {
				// ... then switch it to "dark-theme.css"
				theme.href = 'css/dark-theme.css'
				// Otherwise...
			} else {
				if (theme.getAttribute('href') === '../css/light-theme.css') {
					// ... then switch it to "dark-theme.css"
					theme.href = '../css/dark-theme.css'
					// Otherwise...
				} else
						// ... switch it to "light-theme.css"
					theme.href = '../css/light-theme.css'
			}
		})
	}, [])

	return (
			<div className={'dark-mode-switch'}>
				<input type="checkbox" id={'checkbox1'}/>
				<div className="button">
					<svg className="power-off">
						<use xlinkHref="#line" className="line"/>
						<use xlinkHref="#circle" className="circle"/>
					</svg>
					<svg className="power-on">
						<use xlinkHref="#line" className="line"/>
						<use xlinkHref="#circle" className="circle"/>
					</svg>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg">
					<symbol xmlns="http://www.w3.org/2000/svg" id="line">
						<line x1="75" y1="34" x2="75" y2="58"/>
					</symbol>
					<symbol xmlns="http://www.w3.org/2000/svg" id="circle">
						<circle cx="75" cy="80" r="35"/>
					</symbol>
				</svg>
			</div>

	)
}
