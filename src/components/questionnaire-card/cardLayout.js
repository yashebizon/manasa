import {RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio} from '@mui/material';
import { useTranslation } from 'next-i18next'

const Card = ({ question, indx, countTotal }) => {
    const { t } = useTranslation()
    const count = indx +1;
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
          >
            <FormControlLabel value="Never" control={<Radio />} label={t('Never')} />
            <FormControlLabel value="Sometimes" control={<Radio />} label={t('Sometimes')} />
            <FormControlLabel value="Often" control={<Radio />} label={t('Often')} />
            <FormControlLabel value="Always" control={<Radio />} label={t('Always')} />
          </RadioGroup>
        </FormControl>
      </div>
    );
}

export default Card;