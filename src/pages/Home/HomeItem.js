import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Image from "~/components/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HomeItem({ to, ...props }) {
    return (
        <div className={cx(null, "col")}>
            <section className={cx("home-item")}>
                <Link to={to}>
                    <Image
                        src={props.srcImage}
                        alt={props.altImage}
                        className={cx("home-item__img")}
                    />
                </Link>
                <div className={cx("home-item__inner")}>
                    <div className={cx("home-item__info")}>
                        <Image
                            src={props.srcAvatar}
                            alt={props.altAvatar}
                            className={cx("home-item__avatar")}
                        />
                        <div className={cx("home-item__wrap")}>
                            <p className={cx("home-item__name")}>
                                {props.name}
                            </p>
                            <p>{props.address}</p>
                        </div>
                    </div>
                    <p className={cx("home-item__desc")}>{props.desc}</p>
                </div>
            </section>
        </div>
    );
}

export default HomeItem;
