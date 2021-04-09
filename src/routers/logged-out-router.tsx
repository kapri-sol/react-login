import React from "react";
import { useForm } from "react-hook-form";

const LoggedOutRouter = () => {
    const { register, watch, handleSubmit } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h1
                className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
                Logged Out
            </h1>
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

export default LoggedOutRouter;
