import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallCard({ char }) {
	return (
			<div className={'SmallCard'}>
				<Link to={`/chars/${char.id}`} key={char.id}>
					<img src={char.image} alt="Avatar"/>
				</Link>
				<div className={'textField'}>
					<Link to={`/chars/${char.id}`} key={char.id}>
						<h3>{char.name}
							<span className={'id'}>({char.id})</span>
						</h3>

					</Link>
					<div>
						<p className={'characteristics'}>Статус:</p>
						<div className={'statusField'}>
							<span className={char.status}/>
							<p>{char.status} - {char.species}</p>
						</div>
					</div>
				</div>
				<div className={'card' + char.status}/>
			</div>
	)
}