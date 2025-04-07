import BreadcrumbSection from '@/components/front/breadcrumbsection';
import GuestLayout from '@/layouts/app/guest-layout';

export default function ResetPassword() {
    return (
        <GuestLayout title="Reset Password">
            <BreadcrumbSection pageTitle="Reset Password" />
        </GuestLayout>
    );
}
