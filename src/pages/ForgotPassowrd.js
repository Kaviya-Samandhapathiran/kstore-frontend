import React, { useState } from 'react';
import forgotPasswordIcon from '../assest/forgotpassword.gif';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "newPassword") setNewPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setLoading(true);

        const response = await fetch(SummaryApi.resetPassword.url, {
            method: SummaryApi.resetPassword.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email, newPassword })
        });

        const dataApi = await response.json();
        setLoading(false);

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/login');
        } else {
            toast.error(dataApi.message);
        }
    };

    return (
        <section id='forgot-password'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <img src={forgotPasswordIcon} alt='Forgot Password' />
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    name='email'
                                    value={email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>New Password : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='password'
                                    placeholder='Enter new password'
                                    name='newPassword'
                                    value={newPassword}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>Confirm Password : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='password'
                                    placeholder='Confirm new password'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <button 
                            className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'
                            disabled={loading}>
                            {loading ? "Resetting..." : "Reset Password"}
                        </button>
                    </form>

                    <p className='my-5'>Remember your password? <Link to={"/login"} className='font-bold text-orange-500 hover:text-orange-600 hover:underline'>Login</Link></p>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
