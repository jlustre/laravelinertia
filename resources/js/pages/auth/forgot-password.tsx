import BreadcrumbSection from '@/components/front/breadcrumbsection';
import ForgotPasswordSection from '@/components/front/forgotpasswordsection';
import GuestLayout from '@/layouts/app/guest-layout';

export default function Login() {
    return (
        <GuestLayout title="Reset Password">
            <BreadcrumbSection pageTitle="Reset Password" />
            <ForgotPasswordSection canResetPassword="1" />
        </GuestLayout>
    );
}
