import React, {useState} from 'react';
import './studentList.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

const StudentList = () => {
  const { t } = useTranslation()
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
                  <tr>
                    <td>{t('Shrirang Patel')}</td>
                    <td>{t('A3545')}</td>
                    <td>{t('Yes')}</td>
                    <td>{t('2024-06-25')}</td>
                    <td>{t('Anxiety, Stress')}</td>
                    <td>{t('Academic pressure: Lack of preparedness causing anxiety and Parental pressure: Pressure from family on lack of contribution at home')}</td>
                  </tr>
                  <tr>
                    <td>{t('Pallavi Jaiswal')}</td>
                    <td>{t('A3545')}</td>
                    <td>{t('Yes')}</td>
                    <td>{t('2024-06-25')}</td>
                    <td>{t('Peer Pressure')}</td>
                    <td>{t('Peer Pressure: Loneliness at school because of lack of friends')}</td>
                  </tr>
                  <tr>
                    <td>{t('Shantanu Malhotra')}</td>
                    <td>{t('A3545')}</td>
                    <td>{t('Yes')}</td>
                    <td>{t('2024-06-25')}</td>
                    <td>{t('Performance Anxiety')}</td>
                    <td>{t('Academic pressure: Not able to memorise chemistry theorems for organic chemistry')}</td>
                  </tr>
                  <tr>
                    <td>{t('Nikhil Bhatt')}</td>
                    <td>{t('A3545')}</td>
                    <td>{t('Yes')}</td>
                    <td>{t('2024-06-25')}</td>
                    <td>{t('Body Image Issue')}</td>
                    <td>{t('Body Image Issue: Lack of confidence because of body size. Bullied by classmates due to recent increase in weight. Self image issues because of criticism from parents, thinking of being violent to himself.')}</td>
                  </tr>
                  <tr>
                    <td>{t('Manasvi Joshi')}</td>
                    <td>{t('A3545')}</td>
                    <td>{t('Yes')}</td>
                    <td>{t('2024-06-25')}</td>
                    <td>{t('Gratitude Workshop')}</td>
                    <td>{t('Went through gratitude workshop and recorded steps to implement in her life')}</td>
                  </tr>
                  </tbody>
                  <tfoot></tfoot>
              </table>
          </div>
        </div>
    );
  };
  
  export default StudentList;