import { useEffect, useState } from "react";
import { CloseIcon } from "../../icons";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShowSignInForm, seIsShowSignInForm] = useState(true);
    const [isShowSignUpForm, seIsShowSignUpForm] = useState(false);

    useEffect(() => {
        const signInElm = document.querySelector('.js-sign-in-btn');
        if (signInElm) {
            signInElm.addEventListener('click', () => {
                setIsOpen(true);
                seIsShowSignInForm(true);
            });
        }
        document.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as Element;
            if (target && !target.closest('.js-sign-in-btn')
                && !target.closest('.js-sign-in-modal')
                && !target.closest('.js-click-to-sign-up')
                && !target.closest('.js-click-to-sign-in')
            ) {
                setIsOpen(false);
                seIsShowSignUpForm(false)
            }
        });
    })

    function showSignUpForm(): void {
        seIsShowSignInForm(false);
        seIsShowSignUpForm(true);
    }

    function showSignInForm(): void {
        seIsShowSignUpForm(false);
        seIsShowSignInForm(true);
    }


    if (!isOpen) return <></>;
    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
            <div className="flex items-center justify-center min-h-screen md:w-2/3 lg:w-1/3 js-sign-in-modal">
                <div className="relative bg-white rounded-lg w-full drop-shadow-lg p-10">
                    <button className="absolute right-2 top-2 hover:bg-gray-300 rounded-full p-1" onClick={() => setIsOpen(false)}>
                        <CloseIcon />
                    </button>
                    {/* Modal header */}
                    <div className="flex items-center justify-between px-4 py-3 rounded-t-lg">
                        <h3 className="text-lg font-semibold w-full text-center">Welcome to iLoading</h3>
                    </div>
                    {/* Modal content */}
                    {isShowSignInForm && <SignInForm onClick={showSignUpForm} />}
                    {isShowSignUpForm && <SignUpForm onClick={showSignInForm} />}
                </div>
            </div>
        </div>
    );




}

export default AuthModal;