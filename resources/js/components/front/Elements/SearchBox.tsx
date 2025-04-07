const SearchBox = () => {
    return (
        <div className="search-box">
            <div className="input-group">
                <input type="search" className="form-control" placeholder="I'm searching for..." />
                <button className="btn" type="button" id="button-addon2">
                    <i className="fa-solid fa-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
