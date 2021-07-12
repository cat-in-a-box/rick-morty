import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ArrowBack from '../../resources/arrowBack.png'
import ArrowForward from '../../resources/arrowForward.png'

export default function Card(props) {
	const [char, setChar] = useState([])

	// Определяем настройки для движения карты при наведении курсора
	const calculate = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 15, 1.04]
	const cardMoving = (x, y, s) => `perspective(3000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	const [options, set] = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 400, friction: 20 } })

	// Скрываем карточку, чтобы показать загрузку
	function hideCard() {
		document.getElementById('Card').style.visibility = 'hidden'
	}

	// Показываем карточку обратно
	function showCard() {
		document.getElementById('Card').style.visibility = 'visible'
	}

	// Загрузка карточки выбранной на экране со списком персонажей
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
				.then(res => {
					setChar(res.data)
					console.log('Response:', res)
				})
				.catch(err => {
					console.log(err.message)
				})
		setTimeout(showCard, 400)
	}, [props.match.params.id])

	// Скрываем карточку, подгружаем ПРЕДЫДУЩЕГО персонажа, а затем показываем её снова
	function GetPreviousCharacter() {
		hideCard()
		axios.get(`https://rickandmortyapi.com/api/character/` + (char.id - 1))
				.then(res => {
					setChar(res.data)
					console.log('Response:', res)
				})
				.catch(err => {
					console.log(err.message)
				})
		setTimeout(showCard, 400)
	}

	// Скрываем карточку, подгружаем СЛЕДУЮЩЕГО персонажа, а затем показываем её снова
	function GetNextCharacter() {
		hideCard()
		axios.get(`https://rickandmortyapi.com/api/character/` + (char.id + 1))
				.then(res => {
					setChar(res.data)
					console.log('Response:', res)
				})
				.catch(err => {
					console.log(err.message)
				})
		setTimeout(showCard, 400)
	}

	return (
			<div>
				<div className={'Nav'}>
					<Link to="/">Назад к персонажам</Link>
				</div>
				<div className={'CardControlsContainer'}>
					<input className={'PreviousPage'} onClick={GetPreviousCharacter} type="image" src={ArrowBack} alt={'Previous'}/>
					<div className={'CardLoader'} id={'CardLoader'}/>
					<animated.div className={'Card'}
					              id={'Card'}
					              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calculate(x, y) })}
					              onMouseLeave={() => set({ xys: [0, 0, 1] })}
					              style={{ transform: options.xys.interpolate(cardMoving) }}>
						<h3>{char.name}</h3>
						<img src={char.image} alt="profile pic"/>
						<p className={'characteristics'}>Статус:</p>
						<div className={'statusField'}>
							<span className={char.status}/>
							<p>{char.status}</p>
						</div>
						<div className={'textField'}>
							<p className={'characteristics'}>Вид:</p>
							<p>{char.species}</p>
						</div>
						<div>
							<p className={'characteristics'}>Пол:</p>
							<p>{char.gender}</p>
						</div>
						<div>
							<p className={'characteristics'}>Происхождение:</p>
							<p>{char.origin && char.origin.name}</p>
						</div>
					</animated.div>
					<input className={'NextPage'} onClick={GetNextCharacter} type="image" src={ArrowForward} alt={'Next'}/>
				</div>
			</div>
	)
}
