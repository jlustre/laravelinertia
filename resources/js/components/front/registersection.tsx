import InputError from '@/components/app/input-error';
import { Input } from '@/components/ui/input';
import { Link, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';

type RegisterForm = {
    name: string;
    username: string;
    sponsor: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
};
const errors = {}; // Initialize errors to avoid ReferenceError

const RegisterSection = ({ sponsor, warning }) => {
    const { company } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        username: '',
        sponsor: sponsor || '', // Ensure sponsor is a string
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (!data.sponsor.trim()) {
            toast.error('Sponsor field cannot be empty.');
            return;
        }

        post(route('register'), {
            onSuccess: () => {
                toast.success('Registration successful!');
                setTimeout(() => {
                    window.location.href = route('home');
                }, 1500); // Redirect after 2 seconds
            },
            onError: (errors) => {
                console.log(errors); // Log errors to the console for debugging
                toast.error('Registration failed. Please check your input and try again.');
            },
            onFinish: () => reset(['password', 'password_confirmation']),
        });
    };

    let ndx = 1;

    return (
        <section className="log-in-section section-b-space">
            <div className="container-fluid-lg w-100">
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                        <div className="image-contain">
                            <img src="assets/images/inner-page/sign-up.png" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                        <div className="log-in-box">
                            <div className="log-in-title">
                                <h3>Welcome To {company.name}</h3>
                                <h4>Create New Account</h4>
                            </div>
                            {warning && (
                                <div className="alert alert-warning">
                                    <strong>Warning:</strong> {warning}
                                </div>
                            )}

                            <div className="input-box">
                                <form className="row g-4" onSubmit={submit}>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="name"
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                autoFocus
                                                tabIndex={ndx++}
                                                autoComplete="name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                placeholder="Full Name"
                                            />
                                            <label htmlFor="name">Full Name</label>
                                            <InputError message={errors.name} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="username"
                                                name="username"
                                                type="text"
                                                className="form-control"
                                                tabIndex={ndx++}
                                                autoComplete="username"
                                                value={data.username}
                                                onChange={(e) => setData('username', e.target.value)}
                                                placeholder="Username"
                                            />
                                            <label htmlFor="username">Username</label>
                                            <InputError message={errors.username} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="sponsor"
                                                name="sponsor"
                                                type="text"
                                                className="form-control"
                                                tabIndex={ndx++}
                                                autoComplete="sponsor"
                                                value={data.sponsor}
                                                onChange={(e) => setData('sponsor', e.target.value)}
                                                placeholder="sponsor"
                                                readOnly={!!sponsor} // Make it read-only if sponsor is provided
                                            />
                                            <label htmlFor="sponsor">Sponsor</label>
                                            <InputError message={errors.sponsor} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                className="form-control"
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
                                                autoComplete="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                placeholder="Password"
                                            />
                                            <label htmlFor="password">Password</label>
                                            <InputError message={errors.password} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating theme-form-floating log-in-form">
                                            <Input
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                type="password"
                                                className="form-control"
                                                tabIndex={ndx++}
                                                autoComplete="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                placeholder="Confirm Password"
                                            />
                                            <label htmlFor="password_confirmation">Confirm Password</label>
                                            <InputError message={errors.password_confirmation} />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="forgot-box">
                                            <div className="form-check remember-box m-0 ps-0">
                                                <input
                                                    className="checkbox_animated check-box"
                                                    type="checkbox"
                                                    id="flexCheckDefault"
                                                    checked={data.terms}
                                                    onChange={(e) => setData('terms', e.target.checked)}
                                                />
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree with
                                                    <Link href={route('terms')} className="mx-1">
                                                        <span>Terms</span>
                                                    </Link>
                                                    and
                                                    <Link href={route('privacy')} className="mx-1">
                                                        <span>Privacy</span>
                                                    </Link>
                                                </label>
                                            </div>
                                        </div>
                                        {errors.terms && (
                                            <div className="text-danger">
                                                <InputError message={errors.terms} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="col-12">
                                        <Button
                                            className="btn btn-animation justify-content-center w-100"
                                            type="submit"
                                            tabIndex={4}
                                            disabled={processing}
                                        >
                                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                            Sign Up
                                        </Button>
                                    </div>
                                </form>
                            </div>

                            {/* <SocialSignup /> */}

                            <div className="sign-up-box">
                                <h4>Already have an account?</h4>
                                <Link href={route('login')}>Log In</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default RegisterSection;
