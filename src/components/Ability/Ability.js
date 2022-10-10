
const Ability = ({ info }) => {

   console.log(info)

   return (
      <div className="card__ability">
         {info.abilities.map(ability =>
            <div className="ability">
               <div key={ability.ability.name} className="ability__title">{ability.ability.name}</div>
               <div key={ability.ability.url} className="ability__body">1</div>
            </div>
         )}
      </div>
   )
}

export default Ability