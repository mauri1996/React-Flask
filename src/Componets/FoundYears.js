import React ,{useEffect,useState} from 'react';
import {GetAnio} from '../service/GetAnios'
import {Tabla1} from '../Componets/Tables/Consulta1'
import {Tabla2} from '../Componets/Tables/Consulta2'
import {Tabla4} from '../Componets/Tables/Consulta4'
import {Tabla5} from '../Componets/Tables/Consulta5'


export default function FoundYears({año,consulta}) {

  const [table, setTable] = useState([])

 
  useEffect( ()=>{
    GetAnio({anio: año ,consulta}).then( table => setTable(table))
    //console.log(table)
  },[año,consulta] )

  switch (consulta){
    case 'consulta1':
      return (
        <div>
          <Tabla1 
              año={año}
              table={table}         
          />
        </div>
        
      );
    case 'consulta2':
      return (
        <div>
          <Tabla2 
              año={año}
              table={table}         
          />
        </div>        
      );
    case 'consulta4':
      return (
        <div>
          <Tabla4 
              año={año}
              table={table}         
          />
        </div>
        
      );
      case 'consulta5':
        return (
          <div>
            <Tabla5 
                año={año}
                table={table}         
            />
          </div>
          
        );
    default:
      return( <div>Datos no encontrados</div>);
  }

  
  
}