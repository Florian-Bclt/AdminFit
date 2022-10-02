import './Structures.css';
import imgStructure from '../img/logo1.png'

function Structures() {

  const structures = [
      { id: 1, username: 'Florian B', adress: '1 rue verte', city: 'Rouen' },
      { id: 2, username: 'Jimmy H', adress: '4 rue du chant des oiseaux', city: 'Rouen' },
      { id: 3, username: 'John Doe', adress: '14 rue Victor Hugo', city: 'Lyon' },
      { id: 4, username: 'Marine Y', adress: '18 rue General De Gaulles', city: 'Marseille' },
      { id: 5, username: 'Octave T', adress: '10 rue des Champs Elysées', city: 'Paris' },
      { id: 6, username: 'Jean-Charles O', adress: '1 Oxford Street', city: 'London' },
      { id: 7, username: 'Laurence L', adress: '18 rue Victor Hugo', city: 'Nantes' },
    ]; 
 

  return (
    
    <div className='container'>
      <h1 className='structure-title'>Nos structures</h1>
      <div>
        {structures.map(structure =>
          <div className='structure-container'> 
            <img src={imgStructure} alt="" className="imgStructure" />
          <div className='structure-infos'>
            <p>{structure.username}</p>
            <p>{structure.adress}</p>        
            <p>{structure.city}</p>        
          </div>          
          </div>
        )}
      </div>
    </div>
    )}

export default Structures