import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';


export const Tabla4 = ({año,table=[]})=>{
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
                <TableCell>Mes</TableCell>
                <TableCell>Aerolina</TableCell>
                <TableCell>Retrasos</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {table[año].map((row,index) => (
                <TableRow key={index}>
                  <TableCell>{row.mes}</TableCell>
                  <TableCell>{row.aerolinea}</TableCell>
                  <TableCell>{row.retrasos}</TableCell>
                  
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