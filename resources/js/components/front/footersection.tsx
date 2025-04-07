import { usePage } from '@inertiajs/react';
import BrandFooter from './Elements/BrandFooter';
import ContactFooter from './Elements/ContactFooter';
import MenuFooter from './Elements/MenuFooter';
import PaymentsFooter from './Elements/PaymentsFooter';
import Services from './Elements/Services';
import SocialMediaFooter from './Elements/SocialMediaFooter';

const FooterSection = () => {
    const { company } = usePage().props;
    return (
        <footer className="section-t-space">
            <div className="container-fluid-lg">
                <div className="service-section">
                    <div className="row g-3">
                        <div className="col-12">
                            <Services />
                        </div>
                    </div>
                </div>

                <div className="main-footer section-b-space section-t-space">
                    <div className="row g-md-4 g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <BrandFooter />
                        </div>

                        <MenuFooter />

                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <ContactFooter />
                        </div>
                    </div>
                </div>

                <div className="sub-footer section-small-space">
                    <div className="reserve">
                        <h6 className="text-content">©2025 {company.name} All rights reserved</h6>
                    </div>
                    <PaymentsFooter />
                    <SocialMediaFooter />
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
