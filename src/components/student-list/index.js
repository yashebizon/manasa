import React, {useState, useEffect} from 'react';
import './studentList.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { fetchUrlEncodedMutation } from '../../util/request/fetchMutation';
import Cookies from 'universal-cookie';
import Loader from '../loader/loader';
import { convertToHtml } from '../../util/common/common';


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

  function getFormattedDate(dateString) {
    if (!dateString) {
      return "NA"; // Return "NA" for empty values
    }
  
    const date = new Date(dateString);
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "NA"; // Return "NA" for invalid date values
    }
  
    return date.toISOString().split('T')[0];
  }

  function tagsToCommaSeparatedString(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "NA"; // Return an empty string for empty arrays or invalid input
    }
  
    return arr.join(', ');
  }

  const MarkdownConverter = ({ text }) => {
    const htmlContent = convertToHtml(text);
  
    return (
      <div 
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />
    );
  };

  const useShowMore = (text = '', limit = 100) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Function to toggle between 'Show More' and 'Show Less'
    const toggle = () => setIsExpanded(!isExpanded);
  
    // Ensure the text is valid, falling back to an empty string
    const validText = text || '';
    
    // If expanded, show the full text; otherwise, truncate
    const displayedText = isExpanded ? validText : `${validText.slice(0, limit)}...`;
  
    return {
      isExpanded,
      displayedText,
      toggle,
    };
  };

  const ShowMoreText = ({ text, limit = 100 }) => {
    const { isExpanded, displayedText, toggle } = useShowMore(text, limit);
  
    // Check if the text length is greater than the limit
    const isLongText = text && text.length > limit;
  
    return (
      <div>
        {/* Use MarkdownConverter to convert the truncated or full text */}
        <MarkdownConverter text={displayedText} />
        
        {/* Show 'Show More'/'Show Less' button only if the text exceeds the limit */}
        {isLongText && (
          <button onClick={toggle}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

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
        <tr key={index} style={{ backgroundColor: student?.colorCode }}>
        <td><Link href={`student-dashboard/${student._id}`}>{t(student.name)}</Link></td>
        <td>{t(student.uniquePattern)}</td>
        <td>{t(student.assessmentCompleted)}</td>
        <td>{getFormattedDate(student?.lastChatUsed)}</td>
        <td className='tag'>{tagsToCommaSeparatedString(student?.tags)}</td>
        <td><ShowMoreText text={student?.comments?.analysis?.summary} limit={250} /></td>
        </tr>
    ));
  };

    return (
        <div className='studentList'>
          <h2>
            {t('Students List')}
          </h2>          
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