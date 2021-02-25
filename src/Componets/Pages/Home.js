//import Paper from 'material-ui/Paper'
import Image from '../../img/back_3.jpg' // Import using relative path

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
                Version 1.0
            </div>
                
        </div>
    )
}