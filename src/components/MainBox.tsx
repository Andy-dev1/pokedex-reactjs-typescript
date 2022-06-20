interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const MainBox=({children}:Iprops)=>{
    return(
        <main className="box-wrapper">
            {children}
        </main>
    )
}
export default MainBox;