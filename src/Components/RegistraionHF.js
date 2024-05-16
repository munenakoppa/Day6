// define registation form with react-hook-form with simple name and email field with the register and handleSubmit

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const RegistraionHF = () => {
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    // define useEffect to display the out of ...register('name') in the console

    useEffect(() => {
        const object = register('name');
        console.log(object);
    }

        , []);

        function handleNameBlur(e){
            if(e=='Arun')
               alert('fasdfad');
            console.log(formState);
            return ("Arun Should not be the name");
        }

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input type="text" {...register('name', {
                        required:"Name is required" ,
                        onBlur:handleNameBlur
                    }
                    )} 
                    />
                    {formState.errors.name &&  (<p className="error-message">{formState.errors.name.message}</p>)}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        {...register("email", {
                            required: "Email is required", // Custom error message for 'required' rule
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format", // Custom error message for 'pattern' rule
                            },
                        })}
                    />

                    {formState.errors.email && (
                        <p className="error-message">{formState.errors.email.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegistraionHF;