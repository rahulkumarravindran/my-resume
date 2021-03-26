import './App.css';
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const resumeDetails = {
    name: 'Rahul Kumar Ravindran',
    designation :'Web developer, Python Developer',
    address:'Janette Ave, Windsor, ON, Canada. N9A 4Z5',
    emailAddress: 'ramukluhar11@gmail.com',
    phone: '+1 (226) 961 5446',
    professionalTraits: ['Team Player','Problem solving capability','Customer handling and Requirement gathering.'],
  }
  return (
    <div className="App">
      <div className='resume'>
        <Header resumeDetails={resumeDetails}/>
        <Body resumeDetails={resumeDetails} />
      </div>
    </div>
  );
}

export default App;
