import { Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputError from '@/components/app/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type ForgotPasswordForm = {
    email: string;
};

interface ForgotPasswordProps {
    status?: string;
    canForgotPassword: boolean;
}

export default function ForgotPassword({ status, canResetPassword }: ForgotPasswordProps) {
    const { company } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<ForgotPasswordForm>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('forgot-password'), {
            onSuccess: () => {
                toast.success('Reset Password successful!');
                setTimeout(() => {
                    window.location.href = route('home');
                }, 2000); // Redirect after 2 seconds
            },
            onError: (errors) => {
                console.log(errors); // Log errors to the console for debugging
                toast.error('Reset password failed. Please check your email and try again.');
            },
            onFinish: () => reset('email'),
        });
    };

    let ndx = 1;

    return (
        <section className="log-in-section background-image-2 section-b-space">
            <div className="container-fluid-lg w-100">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src="assets/images/inner-page/log-in.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>Welcome To {company.name}</h3>
                                <h4>Reset Your Password</h4>
                            </div>

                            <div className="input-box">
                                <form className="row g-4" onSubmit={submit}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                autoFocus
                                                tabIndex={ndx++}
                                                autoComplete="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                placeholder="Email Address"
                                            />
                                            <label htmlFor="email">Email Address</label>
                                            <InputError message={errors.email} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <Button
                                            className="btn btn-animation justify-content-center w-100"
                                            type="submit"
                                            tabIndex={ndx++}
                                            disabled={processing}
                                        >
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Send Password Reset Link
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className="other-log-in">
                                <h6></h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="sign-up-box">
                                    <h4 className="text-sm">Don't have an account?</h4>
                                    <Link href={route('register')}>Sign Up</Link>
                                </div>
                                <div className="sign-up-box">
                                    <h4 className="text-sm">Already have an account?</h4>
                                    <Link href={route('login')}>Log In</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
