import React, {useState} from 'react';
import './sideBar.scss';
import Link from 'next/link';
import Image from 'next/image'; 
import student from '../../../src/images/page/student.png';
import reports from '../../../src/images/page/reports.png';
import accounts from '../../../src/images/page/accounts.png';
import { useTranslation } from 'next-i18next'


const SideBar = () => {
  const { t } = useTranslation()

    return (
        <div className='leftSideBar'>
          <ul>
            <li className='dashboard'>
              <Link href="/admin-panel">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>
                {t('Dashboard')}
              </Link>
            </li>
            {/* Future Release */}
            {/* <li className='student'>
              <Link href="#">
                <Image src={student} alt="Student" />
                {t('Student')}
              </Link>
            </li>
            <li className='reports'>
              <Link href="#">
                <Image src={reports} alt="Reports" />
                {t('Reports')}
              </Link>
            </li>
            <li className='accounts'>
              <Link href="#">
                <Image src={accounts} alt="Accounts" />
                {t('Accounts')}
              </Link>
            </li> */}
          </ul>
        </div>
    );
  };
  
  export default SideBar;