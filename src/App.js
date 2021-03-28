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
    summary: ['An Enthusiastic, Creative and Resilient graduate student at the prestigious University of Windsor who has an experience of 2 years in the field of Information Technology as a Project Engineer at Wipro Ltd.','Looking for an environment that offers a greater challenge and allows me to develop my skills and knowledge that helps realize my true potential.'],
    workExperience:[{role:'Python Developer & ETL Develpoer | Wipro Technologies',timePeriod: 'June 2018 – July 2020 – Full Time',responsiblities: ['Gathered Requirements from Clients and developed solutions to meet the needs', 'Developed efficient Python programs to satisfy the demands of the customer.','Created graphs to map and transform the data. Masked and mocked large volumes of data to meet the specifications of the tester.']},{role:'Teaching Assistant | Sampath Institute',timePeriod: 'April 2014 - June 2014 – Part Time',responsiblities: ['Responsible for grading papers and helping students to learn better.','Handled customer enquires at Front desk.']}]
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
