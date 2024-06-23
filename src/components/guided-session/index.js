/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Container, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import SessionFirst from './SessionFirst';
import SessionSecond from './SessionSecond';
import SessionThird from './SessionThird';
import '../../app/globals.scss'

const GuidedSession = () => {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const updateStep = () => {
        setStep(step + 1)
    }

    const progressBar = () => {
        const steps = 3;
        const progressBarItems = Array.from({ length: steps }, (_, i) => i + 1);
    
        return (
            <div className='progressBarWrap'>
                {progressBarItems.map((index) => (
                    <div key={index} className={`progressBar ${step === index ? 'active' : ''}`}></div>
                ))}
            </div>
        );
    };

    useEffect(() => {
        if (step === 4) {
            router.push('/guided-session-chat');
        }
    }, [step]);

    const renderIntroStep = (step) => {
    switch (step) {
        case 1:
            return <SessionFirst />;
        case 2:
            return <SessionSecond />;
        case 3:
        default:
            return <SessionThird />;         
        }
    };
    

return (
    <Container component="main" maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        { progressBar() }
        { renderIntroStep(step) }
        <Button onClick={() => updateStep()} variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '10px 20px', backgroundColor: 'black' }}>
           Continue
        </Button>
    </Container>
  );
};

export default GuidedSession;
