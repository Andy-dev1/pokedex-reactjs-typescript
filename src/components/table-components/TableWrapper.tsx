import React from "react";

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const TableWrapper = ({children}:Iprops) => {
    return (
        <table>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}
export default TableWrapper;