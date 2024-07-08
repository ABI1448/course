import React from 'react';
import CourseTable from './components/CourseTable';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Courses </h1>   
      <h5>View All</h5>
      <CourseTable />
    </div>
  );
}

export default App;
