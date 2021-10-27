import useStyle from '../styled/displayNumber.module';
import AnimatedNumber from 'react-animated-number';
import { Button } from '@mui/material';
const DisplayNumber=({prevNumber,currentNumber,generateNumber}:any)=> {
    const classes=useStyle();
    return (
        <>
            <AnimatedNumber
            component={classes.comp}
            initialValue={prevNumber}
            value={currentNumber}
            stepPrecision={0}
            style={{
                transition:"0.8s ease-out",
                transitionProperty: "background-color, color, opacity",
            }}
            duration={300}
            />
            <Button onClick={()=>generateNumber()}>Generate Number</Button>
        </>
    )
}

export default DisplayNumber
