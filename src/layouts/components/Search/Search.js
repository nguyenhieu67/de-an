import { useRef, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icon";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue("");
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div className={cx("search")}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder="Search location"
                spellCheck={false}
                onChange={handleChange}
            />

            {!!searchValue && (
                <button className={cx("clear")} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            <button className={cx("search-btn")}>
                <SearchIcon />
            </button>
        </div>
    );
}

export default Search;
