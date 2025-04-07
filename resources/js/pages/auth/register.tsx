import ErrorBoundary from '@/components/common/ErrorBoundary';
import BreadcrumbSection from '@/components/front/breadcrumbsection';
import RegisterSection from '@/components/front/registersection';
import GuestLayout from '@/layouts/app/guest-layout';

interface RegisterProps {
    sponsor: string; // Adjust the type as needed
    warning: string; // Adjust the type as needed
}

export default function Register({ sponsor, warning }: RegisterProps) {
    return (
        <>
            <ErrorBoundary>
                <GuestLayout title="Sign Up">
                    <BreadcrumbSection pageTitle="Sign Up" />
                    <RegisterSection sponsor={sponsor} warning={warning} />
                </GuestLayout>
            </ErrorBoundary>
        </>
    );
}
