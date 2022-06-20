interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const DivisionWrapper = ({children}:Iprops)=>{
    return(
        <section className='division'>
            {children}
        </section>
    )
}

export default DivisionWrapper;