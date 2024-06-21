import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";

interface IFormProps{
    name:string
}
const FormComponent = () => {
    const navigate = useNavigate();
    let{register,handleSubmit,formState:{errors,isValid}}=useForm<IFormProps>()

    const dispatch=useAppDispatch()

    const search=(formValue:IFormProps)=>{
        dispatch(movieActions.getByTitle(formValue.name))
        navigate(`/movies/genre/${formValue.name}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type={'text'} {...register('name')}/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default FormComponent;