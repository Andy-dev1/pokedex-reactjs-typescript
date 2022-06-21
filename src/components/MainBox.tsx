import classes from './MainBox.module.css'

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const MainBox=({children}:Iprops)=>{
    return(
        <main className={classes["box-wrapper"]}>
            {children}
        </main>
    )
}
export default MainBox;