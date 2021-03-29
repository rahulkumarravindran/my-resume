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
    workExperience:[{role:'Python Developer & ETL Develpoer | Wipro Technologies',timePeriod: 'June 2018 – July 2020 – Full Time',responsiblities: ['Gathered Requirements from Clients and developed solutions to meet the needs', 'Developed efficient Python programs to satisfy the demands of the customer.','Created graphs to map and transform the data. Masked and mocked large volumes of data to meet the specifications of the tester.']},{role:'Teaching Assistant | Sampath Institute',timePeriod: 'April 2014 - June 2014 – Part Time',responsiblities: ['Responsible for grading papers and helping students to learn better.','Handled customer enquires at Front desk.']}],
    education : [{institution:"University of Windsor | 2020-2022",field : 'Master of Engineering in Electrical and Computer Engineering'},{institution:"Sri Sairam Institute of Technology | 2014-2018",field : 'Bachelor of Engineering in Electronics and Communication Engineering'}],
    achievements: ['Got the award “Exceeding Everest” for thinking out of the box and solving critical issues during my tenure as a Python developer at Wipro Ltd.', 'Won various competitions during my time as an undergraduate student.'],
    technicalSkills: ['Python, HTML, CSS','JavaScript, React','Ab Initio, Informatica','SQL'],
    areasOfInterest : ['Software Development','IoT','Machine Learning'],
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
