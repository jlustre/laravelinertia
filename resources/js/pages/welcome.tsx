import HomeSection from '@/components/front/homesection';
import NewsLetterSection from '@/components/front/newslettersection';
import GuestLayout from '@/layouts/app/guest-layout';

export default function Welcome() {
    return (
        <GuestLayout title="Home">
            <HomeSection />
            <NewsLetterSection />
        </GuestLayout>
    );
}
