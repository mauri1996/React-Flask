import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';


export const Tabla2 = ({año,table=[]})=>{
    //console.log('-----')
    //console.log(table[año])
    //console.log('-----')

    if(table[año]){
        //console.log(table)
        //console.log(año, table[año].length)
        return (
          <React.Fragment>
          <Title>Año: {año}</Title>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><b>Aerolínea</b></TableCell>
                <TableCell><b>Retrasos</b></TableCell>                
              </TableRow>
            </TableHead>
            <TableBody>
              {table[año].map((row,index) => (
                <TableRow key={index}>
                  <TableCell>{row.aerolinea}</TableCell>
                  <TableCell>{row.retraso}</TableCell>                  
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