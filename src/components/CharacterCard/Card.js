import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ArrowBack from '../../resources/arrowBack.png'
import ArrowForward from '../../resources/arrowForward.png'

export default function Card(props) {
	const [char, setChar] = useState([])
	const calculate = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 15, 1.05]
	const cardMoving = (x, y, s) => `perspective(3300px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
	const [options, set] = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })

	function hideCard() {
		document.getElementById('Card').style.visibility = 'hidden'
	}
	function showCard() {
		document.getElementById('Card').style.visibility = 'visible'
	}

	function GetPreviousCharacter() {
		hideCard();
		let number = char.id - 1
		axios.get(`https://rickandmortyapi.com/api/character/` + number).then(res => {
			setChar(res.data)
			console.log('Response:', res)
		}).catch(err => {
			console.log(err.message)
		})
		setTimeout(showCard, 400)
	}

	function GetNextCharacter() {
		hideCard();
		let number = char.id + 1
		axios.get(`https://rickandmortyapi.com/api/character/` + number).then(res => {
			setChar(res.data)
			console.log('Response:', res)
		}).catch(err => {
			console.log(err.message)
		})
		setTimeout(showCard, 400)
	}

	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`).then(res => {
			setChar(res.data)
			console.log('Response:', res)
		}).catch(err => {
			console.log(err.message)
		})
	}, [props.match.params.id])

	return (
			<div>
				<div className={'Nav'}>
					<Link to="/">❮ Назад к списку персонажей</Link>
				</div>
				<div className={'CardControlsContainer'}>
					<input className={'PreviousPage'} onClick={GetPreviousCharacter} type="image" src={ArrowBack} alt={'Previous'}/>
					<div className={'CardLoader'} id={'CardLoader'}/>
					<animated.div className={'Card'}
					              id={'Card'}
					              onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calculate(x, y) })}
					              onMouseLeave={() => set({ xys: [0, 0, 1] })}
					              style={{ transform: options.xys.interpolate(cardMoving)}}>
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