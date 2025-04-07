const LocationDropdown = () => {
    return (
        <div className="location-box">
            <button className="btn location-button" data-bs-toggle="modal" data-bs-target="#locationModal">
                <div className="location-icon">
                    <i className="fa-solid fa-map-pin mr-2 border-1 p-2"></i>
                </div>
                <span className="locat-name">Your Location</span>
                <i className="fa-solid fa-angle-down"></i>
            </button>
        </div>
    );
};

export default LocationDropdown;
