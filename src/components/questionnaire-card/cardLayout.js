import {RadioGroup, Box, FormControl, FormControlLabel, FormLabel, Radio} from '@mui/material';


const Card = () => {
    return(
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className='labelTitle'>Are you able to focus on what you are doing?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Same as usual"
            name="radio-buttons-group"
            className='radioGroup'
          >
            <FormControlLabel value="Better than usual" control={<Radio />} label="Better than usual" />
            <FormControlLabel value="Same as usual" control={<Radio />} label="Same as usual" />
            <FormControlLabel value="Less than usual" control={<Radio />} label="Less than usual" />
          </RadioGroup>
        </FormControl>
    );
}

export default Card;