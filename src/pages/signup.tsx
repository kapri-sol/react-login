import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, watch, handleSubmit } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="">
            <h1 className="">Logged Out</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <div className="">Email</div>
                    <input className="" {...register("email", { required: true })} type="email" placeholder="email" />
                </div>
                <div className="">
                    <div className="">Password</div>
                    <input className="" {...register("password", { required: true })} type="password" placeholder="password" />
                </div>
                <button className="">Submit</button>
            </form>
        </div>
    );
};

export default SignUp;
