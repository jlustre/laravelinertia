import DealBoxModalSection from '@/components/front/dealboxmodalsection';
import ErrorBoundary from '@/components/front/ErrorBoundary';
import FooterSection from '@/components/front/footersection';
import LocationSection from '@/components/front/locationsection';
import MobileFix from '@/components/front/mobilefix';
import PageHeader from '@/components/front/pageheader';
import QuickViewModalSection from '@/components/front/quickviewmodalsection';
import ThemeOptionSection from '@/components/front/themeoptionsection.';
import { Toaster } from '@/components/ui/sonner';
import { Head } from '@inertiajs/react';

export default function GuestLayout({ children, ...props }) {
    return (
        <ErrorBoundary>
            <Head title={props.title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <PageHeader />
            <MobileFix />
            {children}
            {/* <BannerSection /> */}
            {/* <ProductSection /> */}

            <FooterSection />
            <QuickViewModalSection />
            <LocationSection />
            {/* <CookieBarSection /> */}
            <DealBoxModalSection />
            <ThemeOptionSection />
            <div className="bg-overlay"></div>
            <Toaster
                position="top-right"
                richColors
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ErrorBoundary>
    );
}
