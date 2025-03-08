import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const resumeDetails = {
    name: 'Rahul Kumar Ravindran',
    designation :'Graduate Student, Software Engineer, Python Developer',
    address:'Windsor, ON, Canada.',
    /*emailAddress: 'ramukluhar11@gmail.com',
    phone: '+1 (226)-961-5446',*/
    professionalTraits: ['Problem Solving capability','Logical Thinking','Punctuality','Team Management','Resilience','TeamWork'],
    summary: ['An Enthusiastic, Creative and Resilient graduate student at the prestigious University of Windsor who has an experience of 2 years in the field of Information Technology as a Project Engineer at Wipro Ltd.','Looking for an environment that offers a greater challenge and allows me to develop my skills and knowledge that helps realize my true potential.'],
    workExperience:[{role:'Python Developer & ETL Developer | Wipro Technologies',timePeriod: 'June 2018 – July 2020 – Full Time',responsiblities: ['Developed efficient Python programs to satisfy the demands of the customer and worked with various python modules like Boto3, pyarrow, pandas, numpy etc.', 'Masked and mocked large volumes of data by creating graphs to map and transform the data using Ab Initio,according to the specifications of the tester.','Worked on extracting, transforming, and loading data from and to various sources like AWS S3, Unix, Hadoop, Snowflake, Oracle DB etc.','Contributed to Resource management by conducting technical interviews to hire new resources/ members to the team.','Gathering requirements from Clients and developing effective solutions to meet their needs.','Assumed managerial role in the absence of Team leader and managed the team effectively.']},{role:'Clerk (Part time) - Health and Beauty | Loblaw',timePeriod: 'May 2021 - Present – Part Time',responsiblities: ['Responsible for replenishing supplies.','Helped customers find products easily and enhanced the customer experience.','Responsible for billing and receiving payments from customers.','Ensuring product pricing updates and modify seasonal planograms.']}],
    education : [{institution:"University of Windsor | 2020-2022",field : 'Master of Engineering in Electrical and Computer Engineering'}],
    achievements: ['Got the award “Exceeding Everest” for thinking out of the box and solving critical issues during my tenure as a Python developer at Wipro Ltd.', 'Introduction to Machine Learning (Coursera - 3LRS7DH4GK3L)','Blockchain Basics (Coursera - 9CHT5GE75SRT)'],
    technicalSkills: ['Python','Ab Initio','SQL', 'HTML, CSS','React JS','Machine Learning'],
    areasOfInterest : ['Software Development','IoT','Machine Learning'],
    languages: ['English','Tamil'],
    links:{github:'https://github.com/rahulkumarravindran',linkedin:'https://www.linkedin.com/in/rahulkumarravindran/',stackoverflow:'https://stackoverflow.com/users/11459926/rahul'},
    projects: [{name:'PDF merger application',technology:'Python Flask',description:"Application for merging PDFs and Converting images to PDF. The web application is made using HTML,CSS and Python Flask Framework. We all would have used online pdf convertors and processors. We are skeptical about uploading our important personal information/documents. This application was created because I didn't want to upload my personal information to unknown websites.",sourceCode:'https://github.com/rahulkumarravindran/PDF_Merger_app'},{name:'Resume', technology:'React js',description:'This is a static web application made for displaying my resume online. It is hosted in Github',sourceCode:'https://github.com/rahulkumarravindran/my-resume'},{name: 'Picture based authentication',technology:'Python Flask',description:'I made this application during a MLH local Hackday conducted at Thoughtworks. This web application is a simple login page that uses pictures instead of conventional passwords. It allows users to select specific points in a image of their choice and set it as a password.',sourceCode:'https://github.com/rahulkumarravindran/picpass'},{name:'Task tracker',technology:'React js',description:'This is a website that lets you add tasks, delete and set reminders',sourceCode:'https://github.com/rahulkumarravindran/task-tracker'},],
  }

  const printResume = () =>{
    //console.log("Print button clicked")
    window.print()
  }
  return (
    <div className="App">
      <div className='resume'>
        <Header resumeDetails={resumeDetails}/>
        <Body resumeDetails={resumeDetails} />
        
      </div>
      <br></br>
      <Footer printResume={printResume}/>
    </div>
  );
}

export default App;
