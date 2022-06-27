import React, { useState,useEffect } from "react";
import { InputWrapper } from './style'
import { SearchBar } from 'antd-mobile'
// import { useDebounce } from "../../utils";

const TodoInput = ({ placeholder, getInputContent }) => {
    const [value, setValue] = useState("")
    const pushContent = () => {
        getInputContent(value)
    }
    useEffect(() => {
        pushContent(value)
    }, [value])
    
    return (
        <InputWrapper>
            {/* <Input 
                onPressEnter={pushContent}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            /> */}
            <SearchBar
            placeholder={placeholder}
            value={value}
            onChange={v => {
                setValue(v)
            }}
            // onSearch={pushContent}
            />
        </InputWrapper>
    )
}

export default TodoInput