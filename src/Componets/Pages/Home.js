//import Paper from 'material-ui/Paper'
import Image from '../../img/back_3.jpg' // Import using relative path
import Logo from '../../img/logo-ucuenca.png'

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: '100%',        

    }
};
  

export const Home = () =>{
    return(
        <div style={styles.paperContainer}>
            <div className="App">
                <img src={Logo} height="380">
                </img>
                <h2>Facultad de Ingeniería - Escuela de Sistemas</h2>
                <h2>Optativa 9 - Big Data</h2>
                <h3>Integrantes:</h3>
                <ul>
                    <li>Mauricio Calle - mauricio.calle@ucuenca.edu.ec</li>
                    <li>Christian Moreira - alexander.moreira@ucuenca.edu.ec</li>
                    <li>Edwin Narváez - edwin.narvaez@ucuenca.edu.ec</li>
                    <li>David Valladarez - david.valladarez@ucuenca.edu.ec</li>
                </ul>
            </div>
                
        </div>
    )
}