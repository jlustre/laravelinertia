const CurrencyOptions = () => {
    return (
        <div className="dropdown theme-form-select">
            <button className="btn dropdown-toggle" type="button" id="select-dollar" data-bs-toggle="dropdown">
                <span>USD</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu">
                <li>
                    <a className="dropdown-item" id="aud" href="javascript:void(0)">
                        AUD
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" id="eur" href="javascript:void(0)">
                        EUR
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" id="cny" href="javascript:void(0)">
                        CNY
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CurrencyOptions;
