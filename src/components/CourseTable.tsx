import React from 'react';
import styled from 'styled-components';

const courses = [
  {
    icon:'icon', 
    name: 'Basic Algorithm',
    startDate: '27 Jan, 2023',
    lessonsCompleted: '10/25',
    completion: '48%',
    duration: '14h 38m 56s'
  },
  {
    icon:'database', 
    name: 'Web Developement',
    startDate: '23 Feb, 2023',
    lessonsCompleted: '40/45',
    completion: '97%',
    duration: '36h 30m 00s'
  },
  {
    icon:'database', 
    name: 'Basic Data Science',
    startDate: '14 Jan, 2023',
    lessonsCompleted: '9/37',
    completion: '40%',
    duration: '37h 00m 00s'
  },
  {
    icon:'database', 
    name: 'UI/UX Design',
    startDate: '19 Feb, 2023',
    lessonsCompleted: '26/32',
    completion: '84%',
    duration: '16h 40m 50s'
  },
  {
    icon:'database', 
    name: 'Projects Management',
    startDate: '27 Jan, 2023',
    lessonsCompleted: '14/19',
    completion: '89%',
    duration: '13h 20m 00s'
  },
  // Add other courses similarly...
];

const CourseTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr className='tablerow'>
          <th>Course Name</th>
          <th>Start Date</th>
          <th>Lesson Completed</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index}>
            <td>
              <Icon src= {'assets/${course.icon}'} alt="" />
              {course.name}
            </td>
            <td>{course.startDate}</td>
            <td>{course.lessonsCompleted} ({course.completion})</td>
            <td>{course.duration}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  margin-right:20px;
  width: 100%;
  border-collapse: collapse;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  th, td {
    border: 2px solid #ddd;
    padding: 20px;
  }
  th {
    background-color: #f2f2f2;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default CourseTable;
