import React from "react";
import { FaceBookIcon, GoogleIcon } from "../../icons";

interface SignInFormType {
    onClick: React.MouseEventHandler;
}

const SignInForm = (props: SignInFormType) => {

    return (
        <div className="p-4 items-center">
            <div className="flex justify-center mt-3">
                <div className="w-64 mt-2">
                    <form>
                        <div className="relative mb-6" >
                            <input type="text" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100" />
                            <label className="bg-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] mt-[0.06rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]">Email address
                            </label>
                        </div>
                        <div className="relative mb-6" >
                            <input type="password" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100" />
                            <label className="bg-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] mt-[0.06rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]">Password
                            </label>
                        </div>
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-slate-600 dark:text-gray-300">Ghi nhớ mật khẩu</label>
                            </div>
                            <a href="#!" className="block text-sm text-blue-600 hover:text-blue-800">Quên mật khẩu?</a>
                        </div>
                        <div className="text-center lg:text-left">
                            <button type="button" className="inline-block rounded bg-blue-500 hover:bg-blue-700 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" data-te-ripple-init data-te-ripple-color="light">
                                Đăng nhập
                            </button>
                        </div>
                        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                Or
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <a href="#" className="flex items-center border border-solid rounded-full w-56 py-2 px-4 hover:bg-slate-50">
                    <GoogleIcon />
                    <p className="text-sm text-slate-600 ml-2">
                        Sign in with Google
                    </p>
                </a>
            </div>
            <div className="flex justify-center mt-3">
                <a href="#" className="flex items-center border border-solid rounded-full w-56 py-2 px-4 hover:bg-slate-50">
                    <FaceBookIcon />
                    <p className="text-sm text-slate-600 ml-2">
                        Sign in with Facebook
                    </p>
                </a>
            </div>

            <div className="flex mt-10 justify-center">
                <span className="text-sm text-slate-600">Bạn chưa có tài khoản?</span>
                <a href="#" className="ml-2 text-sm underline underline-offset-4 text-blue-600 hover:text-blue-800 js-click-to-sign-up" onClick={props.onClick}>Click để đăng ký</a>
            </div>
        </div>

    );
}

export default SignInForm;