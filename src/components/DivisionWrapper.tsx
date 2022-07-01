import classes from './DivisionWrapper.module.css';
import {Col} from 'react-bootstrap';

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const DivisionWrapper = ({children}:Iprops)=>{
    return(
        <Col md={6} className={classes['division']}>
            {children}
        </Col>
    )
}

export default DivisionWrapper;