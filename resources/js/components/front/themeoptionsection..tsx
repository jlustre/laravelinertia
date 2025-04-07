import React from 'react';

const ThemeOptionSection = () => {
    const [color, setColor] = React.useState('#0da487');

    return (
        <div className="theme-option">
            <div className="setting-box">
                <button className="btn setting-button">
                    <i className="fa-solid fa-gear"></i>
                </button>

                <div className="theme-setting-2">
                    <div className="theme-box">
                        <ul>
                            <li>
                                <div className="setting-name">
                                    <h4>Color</h4>
                                </div>
                                <div className="theme-setting-button color-picker">
                                    <form className="form-control">
                                        <label htmlFor="colorPick" className="form-label mb-0">
                                            Theme Color
                                        </label>
                                        <input
                                            type="color"
                                            className="form-control form-control-color"
                                            id="colorPick"
                                            value={color}
                                            onChange={(e) => setColor(e.target.value)}
                                            title="Choose your color"
                                        />
                                    </form>
                                </div>
                            </li>

                            <li>
                                <div className="setting-name">
                                    <h4>Dark</h4>
                                </div>
                                <div className="theme-setting-button">
                                    <button className="btn btn-2 outline" id="darkButton">
                                        Dark
                                    </button>
                                    <button className="btn btn-2 unline" id="lightButton">
                                        Light
                                    </button>
                                </div>
                            </li>

                            <li>
                                <div className="setting-name">
                                    <h4>RTL</h4>
                                </div>
                                <div className="theme-setting-button rtl">
                                    <button className="btn btn-2 rtl-unline">LTR</button>
                                    <button className="btn btn-2 rtl-outline">RTL</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="back-to-top">
                <a id="back-to-top" href="#">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
        </div>
    );
};

export default ThemeOptionSection;
