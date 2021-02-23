import React, { useState, useEffect } from 'react'
import axios from 'axios'

import DarkModeSwitcher from '../DarkModeSwitcher'
import SmallCard from './SmallCard.js'

export default function CharacterList() {
	const [chars, setChars] = useState([])
	const [page, setPage] = React.useState(1)
	const [isBottom, setIsBottom] = useState(false)

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character/').then(res => {
			setChars(res.data.results)
			setPage(page => page + 1)
		}).catch(err => {
			alert(err.message)
		})
	}, [])

	useEffect(() => {
		if (isBottom) {
			return new Promise((resolve) => {
				let y = 0
				setTimeout(() => {
					let i
					for (i = 0; i < 10; i++) {
						y++
					}
					loadMore()
					setIsBottom(false)
					resolve(y)
				}, 1000)
			})
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isBottom, loadMore])


	function loadMore() {
		axios.get('https://rickandmortyapi.com/api/character/?page=' + page)
				.then(res => {
					setChars([...chars, ...res.data.results])
				}).catch(err => {
			alert(err.message)
		})
				.then(() => {
					setPage(page => page + 1)
				})
				.then(() => {
					setIsBottom(false)
				})
	}

	function handleScroll() {
		const scrollTop = (document.documentElement
				&& document.documentElement.scrollTop)
				|| document.body.scrollTop
		const scrollHeight = (document.documentElement
				&& document.documentElement.scrollHeight)
				|| document.body.scrollHeight
		if (scrollTop + window.innerHeight + 150 >= scrollHeight) {
			setIsBottom(true)
		}
	}

	console.log('Loaded Characters:', chars.length)

	return (
			<div>
				<div className={'Nav'}>
					<img className={'Logo'} alt='logo'/>
					<h1>Список персонажей сериала <br/>Rick and Morty</h1>
					<h2>Тестовое задание для компании Nethouse</h2>
					<DarkModeSwitcher/>
				</div>
				<div className={'CharacterListContainer'}>
					{chars.map(char => {
						return <SmallCard key={char.id} char={char}/>
					})}
				</div>
				<div className={'loader'}/>
				<h3 className={'loaderText'}>Подгружаем персонажей...</h3>
			</div>
	)
}
