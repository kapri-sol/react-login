import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../components/form-error";

interface LoginForm {
    email: string;
    password: string;
}

const SignIn = () => {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>();
    const onSubmit = () => {
        console.log(getValues());
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-gray-800">Log In</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 mt-5 px-5">
                    <input {...register("email", { required: "Email is Required" })} placeholder="Email" className="input mb-3" />

                    {errors.email?.message && <FormError errorMessage={errors.email?.message} />}
                    <input {...register("password", { required: "Password is Required", minLength: 8 })} placeholder="Password" className="input" />
                    {errors.password?.message && <FormError errorMessage={errors.password?.message} />}
                    {errors.password?.type === "minLength" && <FormError errorMessage="Password must be more than 10 chars." />}
                    <button className="btn mt-3">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
