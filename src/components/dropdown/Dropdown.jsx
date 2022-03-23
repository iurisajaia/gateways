import {useRef} from "react";
import {Calendar} from "react-multi-date-picker"

import {useDetectOutsideClick} from "../../utils/useDetectOutsideClick";

import "./Dropdown.css";

const Dropdown = ({title, options, activeItem, setActiveItem, isDate}) => {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const handleChangeActiveItem = (item) => {
        setActiveItem(item);
        setIsActive(false);
    };

    return (
        <div className="dd-wrapper">
            <div
                className={`dd-header ${isActive && !isDate && "without-bottom-radius"}`}
                onClick={() => setIsActive(!isActive)}
            >
                <h3>{isDate ? activeItem.format() : activeItem || title}</h3>

                <div className={`dd-arrow ${isActive ? 'arrow-up' : 'arrow-down'}`}/>
            </div>
            <div
                className={`dd-body ${isActive ? "active" : "inactive"}`}
                ref={dropdownRef}
            >
                {isDate ? (
                    <Calendar
                        value={activeItem}
                        onChange={setActiveItem}
                    />
                ) : (
                    <>
                        <div
                            className="dd-option"
                            onClick={() => handleChangeActiveItem(title)}
                        >
                            {title}
                        </div>
                        {options?.map((option, i) => (
                            <div
                                className="dd-option"
                                key={i}
                                onClick={() => handleChangeActiveItem(option?.name)}
                            >
                                {option?.name}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
