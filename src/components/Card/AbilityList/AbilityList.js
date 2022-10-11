import { useState } from 'react'
import Ability from './Ability/Ability'
import './AbilityList.css'


const AbilityList = ({ info }) => {

    console.log(info)



    return (
        <div className="card__ability_list">
            {info.abilities.map(ability =>
                <div className="ability">
                    <div key={ability.ability.name} className="ability__title">{ability.ability.name.replace('-', ' ')
                        .replace(ability.ability.name[0], ability.ability.name[0].toUpperCase())}</div>
                    <Ability key={ability.ability.url} url={ability.ability.url} />

                </div>
            )}
        </div>
    )
}

export default AbilityList