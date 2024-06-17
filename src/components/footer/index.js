import React from 'react';
import Link from 'next/link';
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
          <ul>
            <li>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"/></svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V2h16v20zm2-2h12V4h-2v7l-2.5-1.5L11 11V4H6zm1-2h10l-3.375-4.5L11 17l-1.625-2.175zm-1 2V4zm5-9l2.5-1.5L16 11l-2.5-1.5z"/></svg>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"/></svg>
                <span>User</span>
              </Link>
            </li>
            <li>
              <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 23q-2.8 0-5.15-1.275T3 18.325V20q0 .425-.288.713T2 21t-.712-.288T1 20v-4q0-.425.288-.712T2 15h4q.425 0 .713.288T7 16t-.288.713T6 17H4.525q1.2 1.8 3.163 2.9T12 21q3.525 0 6.063-2.35t2.887-5.775q.05-.4.35-.638T22 12q.425 0 .725.263t.25.637q-.175 2.125-1.1 3.962t-2.4 3.2t-3.387 2.15T12 23m0-20Q8.475 3 5.938 5.35T3.05 11.125q-.05.4-.35.638T2 12q-.425 0-.725-.262t-.25-.638q.175-2.125 1.1-3.962t2.4-3.2t3.388-2.15T12 1q2.8 0 5.15 1.275t3.85 3.4V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9h-4q-.425 0-.712-.288T17 8t.288-.712T18 7h1.475q-1.2-1.8-3.162-2.9T12 3m0 15q.525 0 .888-.363t.362-.887t-.363-.9t-.887-.375t-.888.363t-.362.887t.363.9T12 18m2-6.25q.875-.875 1.163-1.412t.287-1.288q0-1.4-1-2.225T12 6q-1 0-1.775.413T8.95 7.625q-.2.325-.062.7t.487.525t.675-.025t.575-.475t.6-.475T12 7.7q.675 0 1.138.388t.462 1.037q0 .425-.2.85t-.85 1q-.625.55-.937 1.075t-.438 1.2q-.05.375.2.663t.65.287q.375 0 .625-.288t.35-.662q.1-.425.338-.75t.662-.75"/></svg>
                <span>Support</span>
              </Link>
            </li>
          </ul>
        </footer>
    );
  };
  
  export default Footer;