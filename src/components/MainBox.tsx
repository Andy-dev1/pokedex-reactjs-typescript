import classes from './MainBox.module.css'
import {Row} from 'react-bootstrap'

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const MainBox=({children}:Iprops)=>{
    return(
        <Row className={`${classes["box-wrapper"]} p-5`}>
            {children}
        </Row>
    )
}
export default MainBox;