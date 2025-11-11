import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";
import config from "~/config";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("home")}>
            <h2 className={cx("home-heading")}>私たちの故郷</h2>
            <div
                className={cx(
                    "home-list",
                    "row row-cols-3 row-cols-xl-2 row-cols-md-1 g-3"
                )}
            >
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/daklak/daklak.png"
                    altImage="daklak"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/Ngoc%20Trinh.jpg"
                    altAvatar="Ngoc Trinh"
                    name="ゴック　チン"
                    address="ダクラクから参ります"
                    desc="ブオンマトートのロータリは ベトナムのダクラク省の中心にあるシンボル的な場所です。 大きな像や噴水があり、街のランドマークとして知られています。"
                />
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/haiphong/haiphong.png"
                    altImage="haiphong"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/Phuong%20Thao.jpg"
                    altAvatar="Phương Thảo"
                    name="フォン　タオ"
                    address="ハイフォンから参ります"
                    desc="ハイフォン市は、ベトナム北部にある大きな港町です。 ハノイから約100キロメートル離れていて、経済や貿易の中心の一つです。 工業が発展しており、美しい海やおいしい海産物で有名です。 また、「赤い花の街」としても知られており、観光地として多くの人が訪れます。"
                />
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/hue/hue.png"
                    altImage="hue"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/Tien%20Dung.jpg"
                    altAvatar="Tiến Dũng"
                    name="テイン　ズン"
                    address="フエから参ります"
                    desc="ベトナムの有名な歴史の場所, フエの王城はフエ町の中心にあります。19世きのはじめに、ザーロン王 と ミンマン王 の時代に作られました。今ではフエの王城は世界中の観光客に人気の場所です。 そして、1993年にユネス"
                />
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/vungtau/vungtau.jpg"
                    altImage="vungtau"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/Duc%20Hieu.jpg"
                    altAvatar="Đức Hiếu"
                    name="ドック　ヒエウ"
                    address="ブンタウから参ります"
                    desc="ブンタウは、バリア＝ブンタウ省にある海辺の都市で、一年中穏やかな気候と美しい風景で知られています。青く透き通った海と長く続くビーチが魅力で、キリスト像、ブンタウ灯台、夜もにぎわうバックビーチなど、多"
                />
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/hatinh/%E3%83%8F%E3%83%86%E3%82%A3%E3%83%B3%E7%9C%81.png"
                    altImage="hatinh"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/Duc%20Quoc.jpg"
                    altAvatar="Quốc Thịnh"
                    name="ゴック　チン"
                    address="ダクラクから参ります"
                    desc="ハティン省は、ベトナム中部に位置する自然が豊かな地域です。山、海、川など多様な景観に恵まれ、伝統文化も色濃く残っています。名物のクドーや観光地のケゴ湖、フオンティック寺などが有名です。穏やかで素朴な"
                />
                <HomeItem
                    to={config.routes.location}
                    srcImage="https://nguyenhieu67.github.io/Graduation-project/assets/images/china-catnhitan/china-capnhitan.jpg"
                    altImage="china"
                    srcAvatar="https://nguyenhieu67.github.io/Graduation-project/assets/avatar/china.jpeg"
                    altAvatar="Ngoc Trinh"
                    name="null"
                    address="null"
                    desc="null"
                />
            </div>
        </div>
    );
}

export default Home;
