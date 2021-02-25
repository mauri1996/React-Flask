
export const GetAnio  = async ({anio,consulta})=>{
    //console.log({anio,consulta})
    return await fetch(`http://localhost:2020/${consulta}?anio=${anio}`)
            .then(res => res.json())
            .then(data =>{ 
                //console.log(data[anio])                                               
              //console.log({row})
              return data
              //this.props.onChangeResult(Search)
            })
}