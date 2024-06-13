/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Container, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import IntroFirst from './IntroFirst';
import IntroSecond from './IntroSecond';
import IntroThird from './IntroThird';
import IntroFourth from './IntroFourth';
import '../../app/globals.scss'

const ProgramSummary = () => {
    const [step, setStep] = useState(1);
    const router = useRouter();
    const updateStep = () => {
        setStep(step + 1)
    }

    const progressBar = () => {
        const steps = 4;
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
        if (step === 5) {
            router.push('/dashboard');
        }
    }, [step]);

    const renderIntroStep = (step) => {
    switch (step) {
        case 1:
            return <IntroFirst />;
        case 2:
            return <IntroSecond />;
        case 3:
            return <IntroThird />;
        case 4:
        default:
            return <IntroFourth />;         
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

export default ProgramSummary;
