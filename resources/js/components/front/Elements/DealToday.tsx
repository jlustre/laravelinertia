const DealToday = () => {
    return (
        <div className="header-nav-right">
            <button className="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                <i className="fa-solid fa-bolt mr-2"></i>
                <span>Deal Today</span>
            </button>
        </div>
    );
};

export default DealToday;
