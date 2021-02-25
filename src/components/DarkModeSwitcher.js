import React, { useEffect } from 'react'

export default function DarkModeSwitcher() {
	useEffect(() => {
		// Определяем кнопку включения-выключения и директорию public
		let btn = document.getElementById('DarkModeCheckbox')
		let publicDir = process.env.PUBLIC_URL;

		// Нажатием кнопки меняем ссылку для css темы со светлой на тёмную, а затем обратно
		// Селектор - id стиля, который назначается в public/index.html
		btn.addEventListener('change', function () {
			if (document.querySelector('#theme-link').getAttribute('href') === `${publicDir}/css/light-theme.css`) {
				document.querySelector('#theme-link').href = `${publicDir}/css/dark-theme.css`
			} else {
				document.querySelector('#theme-link').href = `${publicDir}/css/light-theme.css`
			}
		})
	}, [])

	return (
			<div className={'dark-mode-switch'}>
				<input type="checkbox" id={'DarkModeCheckbox'}/>
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