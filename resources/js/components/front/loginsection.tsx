import { Link, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputError from '@/components/app/input-error';
import TextLink from '@/components/app/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { company } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        email: '',
        password: '',
        remember: false, // Ensure remember field is included
    });

    // Load saved credentials from local storage on component mount
    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberedEmail');
        const savedPassword = localStorage.getItem('rememberedPassword');
        if (savedEmail && savedPassword) {
            setData('email', savedEmail);
            setData('password', savedPassword);
            setData('remember', true);
        }
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (data.remember) {
            localStorage.setItem('rememberedEmail', data.email);
            localStorage.setItem('rememberedPassword', data.password);
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberedPassword');
        }

        post(route('login'), {
            onSuccess: () => {
                toast.success('Login successful!');
                setTimeout(() => {
                    window.location.href = route('home');
                }, 2000); // Redirect after 2 seconds
            },
            onError: (errors) => {
                console.log(errors); // Log errors to the console for debugging
                toast.error('Login failed. Please check your credentials and try again.');
            },
            onFinish: () => reset('password'),
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
                                <h4>Log In Your Account</h4>
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
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="password"
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                tabIndex={ndx++}
                                                autoComplete="current-password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Password"
                                            />
                                            <label htmlFor="password" className="text-gray-400">
                                                Password
                                            </label>
                                            <InputError message={errors.password} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="forgot-box">
                                            <div className="form-check remember-box m-0 ps-0">
                                                <input
                                                    className="checkbox_animated check-box"
                                                    type="checkbox"
                                                    id="remember"
                                                    checked={data.remember}
                                                    onChange={(e) => setData('remember', e.target.checked)}
                                                />
                                                <label className="form-check-label text-sm" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="forgot-box">
                                                {canResetPassword && (
                                                    <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={ndx++}>
                                                        Forgot password?
                                                    </TextLink>
                                                )}
                                            </div>
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
                                            Log In
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className="other-log-in">
                                <h6></h6>
                            </div>

                            <div className="sign-up-box">
                                <h4>Don't have an account?</h4>
                                <Link href={route('register')}>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
