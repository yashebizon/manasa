import './topCard.scss'; 


const TopCard = () => {
    return(
        <div className='TopCard'>
            <div className='TopCardBox box1'>
                <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 14h2V7h-2zm3-1.5h2V8h-2zM8 12h2V8H8zM6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v2h-2v-4h4v-5h2.7l-.95-3.875q-.575-2.275-2.45-3.7T12 4Q9.1 4 7.05 6.025T5 10.95q0 1.5.613 2.85t1.737 2.4l.65.6V22zm6.35-9"/></svg></div>
                <div className='text'>Self Assess</div>
            </div>
            <div className='TopCardBox box2'>
                <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9q-1.45 0-2.475-1.025T8.5 5.5t1.025-2.475T12 2t2.475 1.025T15.5 5.5t-1.025 2.475T12 9m0 13l-6-6q-.5-.5-.75-1.125T5 13.5q0-1.475 1.013-2.488T8.5 10q.725 0 1.338.275t1.112.775L12 12.1l1.05-1.05q.5-.5 1.113-.775T15.5 10q1.475 0 2.488 1.013T19 13.5q0 .75-.25 1.375T18 16z"/></svg></div>
                <div className='text'>Wellness Activity</div>
            </div>
            <div className='TopCardBox box3'>
                <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8 22v-1.75Q5.35 19.2 3.675 17Q2 14.8 2 12q0-2.075.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12q0 2.8-1.675 5T16 20.25V22Zm2-10h4V4.25q-.5-.125-.988-.188Q12.525 4 12 4t-1.012.062q-.488.063-.988.188Zm-6 0h4V5.075q-1.8 1.05-2.9 2.863Q4 9.75 4 12Zm12 0h4q0-2.25-1.1-4.062q-1.1-1.813-2.9-2.863Zm-6 8h4v-1.1q2.025-.8 3.488-2.075Q18.95 15.55 19.6 14H4.4q.65 1.55 2.113 2.825Q7.975 18.1 10 18.9Zm4 0h-4h4Z"/></svg></div>
                <div className='text'>Expert Therapy</div>
            </div>
            <div className='TopCardBox box4'>
                <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 20h10v-2h-2v-7h-2V9h4V7H7v2h2v7h2v2H7zm-2 2v-6h2v-5H5V5h5V4H9V2h6v2h-1v1h5v6h-2v5h2v6zm7-8.5"/></svg></div>
                <div className='text'>Self Assess</div>
            </div>
        </div>
    );
}

export default TopCard;