const LanguageOptions = () => {
    return (
        <div className="dropdown theme-form-select">
            <button className="btn dropdown-toggle" type="button" id="select-language" data-bs-toggle="dropdown">
                <img src="assets/images/country/united-states.png" className="img-fluid blur-up lazyload" alt="" />
                <span>English</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <a className="dropdown-item" href="javascript:void(0)" id="english">
                        <img src="assets/images/country/united-kingdom.png" className="img-fluid blur-up lazyload" alt="" />
                        <span>English</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="javascript:void(0)" id="france">
                        <img src="assets/images/country/germany.png" className="img-fluid blur-up lazyload" alt="" />
                        <span>Germany</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="javascript:void(0)" id="chinese">
                        <img src="assets/images/country/turkish.png" className="img-fluid blur-up lazyload" alt="" />
                        <span>Turki</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default LanguageOptions;
