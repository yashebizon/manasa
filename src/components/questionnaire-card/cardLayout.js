import React, { useState } from 'react';
import {RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio} from '@mui/material';
import { useTranslation } from 'next-i18next'

const Card = ({ question, indx, countTotal, onRadioSelect, options, questionId, category }) => {
    const { t } = useTranslation()
    const count = indx +1;
    const [selectedValue, setSelectedValue] = useState('');


    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
      onRadioSelect(event.target.value, questionId, category);
  };

    return(
      <div className={`boxDasQs boxQs-${indx}`}>
        <FormControl>
          <div className='countBox'>
            {count}/{countTotal}
          </div>
          <FormLabel id="demo-radio-buttons-group-label" className='labelTitle'>{t(question)}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Same as usual"
            name="radio-buttons-group"
            className='radioGroup'
            onChange={handleRadioChange}
          >
            <>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option._id}
                control={<Radio />}
                label={t(`${option.response}`)} // Assuming `t()` is a translation function, you can replace this with `t(option)` if needed
              />
            ))}
            </>
          </RadioGroup>
        </FormControl>
      </div>
    );
}

export default Card;