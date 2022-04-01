
const fln = "hook";
///////////////////////////////////

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// =============================================================================

export function useIndexCurrRow(){
    const [indexCurrRow, setIndexCurrRow] = useState(0);
    const allGameRows = useSelector((state) => state.allGameRows);
    
    useEffect(() => {
        setIndexCurrRow(allGameRows.filter((row) => !!row[0]).length); // 1. filters rows that have been played. 2. next index = last index+1 = length. ta-daa!
    }, [allGameRows]);

    console.log(`${fln} > indexCurrRow`, indexCurrRow);

    return [indexCurrRow, setIndexCurrRow];
}