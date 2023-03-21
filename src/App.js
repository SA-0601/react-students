import Student from './components/Student';
import {studentsData} from './data/studentsData';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [studentData, setStudentsData] = useState(studentsData);
 
  return (
    <div className='App'>
      <h1 class="bg-info text-white">Students Data</h1>
        {studentData.map((ele,index) => (
      <Student {...ele} key={index}/>
    ))}
    </div>
  )
}


