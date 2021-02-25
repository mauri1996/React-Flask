import React ,{useEffect,useState} from 'react';
import {GetAnio} from '../service/GetAnios'
import {Tabla1} from '../Componets/Tables/Consulta1'


export default function FoundYears({año,consulta}) {

  const [table, setTable] = useState([])

 
  useEffect( ()=>{
    GetAnio({anio: año ,consulta}).then( table => setTable(table))
    //console.log(table)
  },[año,consulta] )
  
  return (
    <div>
      <Tabla1 
          año={año}
          table={table}         
      />
    </div>
    
  );
}