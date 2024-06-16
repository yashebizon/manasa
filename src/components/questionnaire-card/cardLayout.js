import {RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio} from '@mui/material';


const Card = ({ question }) => {
    return(
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className='labelTitle'>{ question }</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Same as usual"
            name="radio-buttons-group"
            className='radioGroup'
          >
            <FormControlLabel value="Never" control={<Radio />} label="Never" />
            <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
            <FormControlLabel value="Often" control={<Radio />} label="Often" />
            <FormControlLabel value="Always" control={<Radio />} label="Always" />
          </RadioGroup>
        </FormControl>
    );
}

export default Card;