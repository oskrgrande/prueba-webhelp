import { ChangeEvent, useState } from "react";

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const setValue = (data = {}) => {
        setValues(data);
    }

    const handleInputChange = ({ target }:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });
        console.log(target.name,target.value);

    }

    return { values, handleInputChange, setValue } ;

}