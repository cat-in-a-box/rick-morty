import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallCard({ char }) {
	return (
			<Link to={`/chars/${char.id}`} key={char.id} className={'SmallCard'}>
				<img src={char.image} alt="Avatar"/>

				<div className={'textField'}>
					<h3>{char.name}
						<span className={'id'}>({char.id})</span>
					</h3>
					<div className={'characteristics'}>Статус:</div>
					<div className={'statusField'}>
						<span className={char.status}/>
						<p>{char.status} - {char.species}</p>
					</div>
				</div>
				<div className={'card' + char.status}/>
			</Link>
	)
}