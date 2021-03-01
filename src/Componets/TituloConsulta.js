import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({

    title: {
        flexGrow: 1,
        textAlign:'center'
    },
  }));


export const TituloConsulta = ({titulo})=>{
    const classes = useStyles();
    return(        
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {titulo}
        </Typography>
    )
}