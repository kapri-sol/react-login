import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormError } from '../components/form-error';
import MainApi from '@api/';

interface SignForm {
    email: string;
    password: string;
    nickName?: string;
}

const Sign = () => {
    const [isSigned, setIsSigned] = useState(true);
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<SignForm>();

    const userApi = new MainApi();
    const onSubmit = async () => {
        const { email, password, nickName } = getValues();

        if (isSigned) {
            await userApi.createUsers({
                email,
                password,
                nickName,
            });
        } else {
        }
    };

    const changeSignFlag = () => {
        setIsSigned(!isSigned);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-gray-800">{isSigned ? 'Log In' : 'Sign Up'}</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 mt-5 px-5">
                    <input {...register('email', { required: 'Email is Required' })} placeholder="Email" className="input mb-3" />
                    <input
                        {...register('password', { required: 'Password is Required', minLength: 8 })}
                        placeholder="Password"
                        className={`input ${!isSigned && 'mb-3'}`}
                    />
                    {!isSigned && (
                        <input
                            {...register('nickName', { required: 'Nickname is Required', minLength: 8 })}
                            placeholder="Nickname"
                            className="input"
                        />
                    )}
                    <button className="btn mt-3">{isSigned ? 'Log In' : 'Submit'}</button>
                </form>
                <button className="mt-6" onClick={changeSignFlag}>
                    Need {isSigned ? 'Sign Up' : 'Log In'} ?
                </button>
            </div>
        </div>
    );
};

export default Sign;
