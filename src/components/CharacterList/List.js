import React, { useState, useEffect } from 'react'
import axios from 'axios'

import SmallCard from './SmallCard.js'

export default function CharacterList() {
	const [chars, setChars] = useState([])
	const [page, setPage] = React.useState(1)
	const [isBottom, setIsBottom] = useState(false)

	// Определяем высоту страницы чтобы понимать, докрутили ли мы до конца
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

	// Первоначальная загрузка персонажей. Api вместо полного списка (больше тысячи) выдает только первых 20
	// Ставим сразу страницу, с которой будем брать персонажей в следующий раз
	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character/').then(res => {
			setChars(res.data.results)
			setPage(page => page + 1)
		}).catch(err => {
			alert(err.message)
		})
	}, [])

	// Подгрузка персонажей и изменение страницы api на следующую
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
	}

	// Выполняем функцию loadMore() при достижении конца страницы и ставим IsBottom на false
	// Делаем это с промисом чтобы не выполнять функцию сразу по несколько раз, а вместо этого подгружать строго по 20 персонажей
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
		// Проверяем скроллинг страницы
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isBottom, loadMore])

	// Проверяем через консоль, сколько загружено персонажей
	console.log('Loaded Characters:', chars.length)

	return (
			<div>
				<div className={'Nav'}>
					<img className={'Logo'} alt='logo'/>
					<h1>Список персонажей сериала <br/>Rick and Morty</h1>
					<h2>Код и описание проекта:
						<a href={'https://github.com/cat-in-a-box/rick-morty'} target={'_blank'}> GitHub</a>
					</h2>
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
