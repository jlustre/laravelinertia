import { Link } from '@inertiajs/react';

const BreadcrumbSection = (props) => {
    return (
        <section className="breadcrumb-section pt-0">
            <div className="container-fluid-lg">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb-contain">
                            <h2>{props.pageTitle}</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link href={route('home')}>
                                            <i className="fa-solid fa-house"></i>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">{props.pageTitle}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbSection;
