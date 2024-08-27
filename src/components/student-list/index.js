import React, {useState, useEffect} from 'react';
import './studentList.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { fetchUrlEncodedMutation } from '../../util/request/fetchMutation';
import Cookies from 'universal-cookie';
import Loader from '../loader/loader'


const StudentList = () => {
  const [studentsData, setStudentsData] = useState([]);

  const { t } = useTranslation();

  const cookies = new Cookies();

  const myCookie = cookies.get('userToken');

  useEffect(() => {
    async function fetchStudentList() {

      const payload = {
        limit: '500'
      };

      try {
        const response = await fetchUrlEncodedMutation('/api/teacher-student-list', payload, myCookie);

        if (response && response.data) {
          const { data } = response;
          setStudentsData(data);
        } else {
          console.error('No data returned from the API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  }
  
    fetchStudentList();

  }, [myCookie]);

  const renderStudentRows = (studentsData, t) => {
    if (studentsData.length === 0) {
      return(
        <tr>
        <td colSpan="6" style={{ textAlign: 'center' }}>
            <Loader/>
        </td>
      </tr>
      )
    }
  
    return studentsData.map((student, index) => (
      <tr key={index}>
        <td><Link href={`student-dashboard/${student._id}`}>{t(student.name)}</Link></td>
        <td>{t(student.uniquePattern)}</td>
        <td>{t(student.assessmentCompleted)}</td>
        <td>{t(student.lastChatUsed)}</td>
        <td>{t(student.tags)}</td>
        <td>{t(student.comments)}</td>
      </tr>
    ));
  };

    return (
        <div className='studentList'>
          <h2>{t('Student List')}</h2>
          <div className='studentListTable'>
              <table>
              <thead></thead>
                  <tbody>
                  <tr>
                    <th>{t('Student name')}</th>
                    <th>{t('ID Number')}</th>
                    <th>{t('Assessment Completed')}</th>
                    <th>{t('Last chat used')}</th>
                    <th>{t('Tags')}</th>
                    <th>{t('Comments')}</th>
                  </tr>
                  {renderStudentRows(studentsData, t)}
                  </tbody>
                  <tfoot></tfoot>
              </table>
          </div>
        </div>
    );
  };
  
  export default StudentList;