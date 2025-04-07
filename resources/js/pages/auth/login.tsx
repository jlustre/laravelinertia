import BreadcrumbSection from '@/components/front/breadcrumbsection';
import LoginSection from '@/components/front/loginsection';
import GuestLayout from '@/layouts/app/guest-layout';

export default function Login() {
    return (
        <GuestLayout title="Sign In">
            <BreadcrumbSection pageTitle="Sign In" />
            <LoginSection canResetPassword="1" />
        </GuestLayout>
    );
}
