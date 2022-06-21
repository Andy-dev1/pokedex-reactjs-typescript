import classes from './DivisionWrapper.module.css';

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const DivisionWrapper = ({children}:Iprops)=>{
    return(
        <section className={classes['division']}>
            {children}
        </section>
    )
}

export default DivisionWrapper;