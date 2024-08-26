import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue(
            {
                ...values,
                [name]: value,
            }
        );
    }
    const resetForm = (clear = false) => {
        setValue(clear ? {} : initialValues);
    };


    return [values, handleChange, resetForm];
}

export default useForm;