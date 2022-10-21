import { person } from './data';
import {  Container} from 'react-bootstrap';
import DatesCount from './components/DatesCount';
import DatesList from './components/DatesList';
import DatesAction from './components/DatesAction';
import { useState } from 'react';

function App() {
  const [personData, setpersonData ] = useState(person)
  return (
    <Container className='py-5'>
      <DatesCount person={personData}/>
      <DatesList person={personData}/>
      <DatesAction 
      deleteData={()=>setpersonData([])}
      showData={()=>setpersonData(person)}
      />
    </Container>
  );
}

export default App;
