import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';


export const Tabla5 = ({año,table=[]})=>{
    //console.log('-----')
    //console.log(table[año])
    //console.log('-----')

    if(table[año]){

        return (
            <React.Fragment>
          <Title>Año : {año}</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Origen</TableCell>
                <TableCell>Destino</TableCell>
                <TableCell>Aerolina</TableCell>
                <TableCell>Vuelos</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {table[año].map((row,index) => (
                <TableRow key={index}>
                  <TableCell>{row.origen}</TableCell>
                  <TableCell>{row.destino}</TableCell>
                  <TableCell>{row.aerolinea}</TableCell>
                  <TableCell>{row.vuelos}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </React.Fragment>
        )
    }else{
        return (<div>Cargando....</div>)
    }
    
}