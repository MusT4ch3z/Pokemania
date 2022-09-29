import './CardDetails.css'

const CardDetails = ({ info }) => {

   const stats = info.stats;
   const hp = stats[0].base_stat;
   const attack = stats[1].base_stat;
   const defense = stats[2].base_stat;
   const speed = stats[5].base_stat;
   const spAttack = stats[3].base_stat;
   const spDefense = stats[4].base_stat;
   // console.log('stats card detail',stats,hp,attack,defense,speed,spAttack,spDefense)
   const types = info.types.map(item => { const [upCase] = item.type.name.toUpperCase(); return item.type.name.replace(item.type.name[0], upCase)})
   // console.log(types)
   // const [upCase] = name.toUpperCase()
   // title = name.replace(name[0], upCase)

   return (
      <div className="card_details">
         <table>
            <thead>
               <tr>
                  <th colSpan={2}>Stats</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>HP</td>
                  <td>{hp}</td>
               </tr>
               <tr>
                  <td>Attack</td>
                  <td>{attack}</td>
               </tr>
               <tr>
                  <td>Defense</td>
                  <td>{defense}</td>
               </tr>
               <tr>
                  <td>Speed</td>
                  <td>{speed}</td>
               </tr>
               <tr>
                  <td>Special Attack</td>
                  <td>{spAttack}</td>
               </tr>
               <tr>
                  <td>Special Defense</td>
                  <td>{spDefense}</td>
               </tr>
            </tbody>
         </table>
         <table>
            <thead>
               <tr>
                  <th>Types</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td className='td_type'>
                     {types.join(' ')}
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   )
}

export default CardDetails