import styles from "./styles.module.css"
import openMenu from "./hooks/openMenu"

export default function NavBar({logo, anchor1, anchor2, anchor3}) {

    const open = openMenu(styles)

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.minBar}`}>
                <div className={`${styles.navLogo}`}>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={open.click} className={`${styles.hambNav}`}>
                    <div className={`${open.menuStick1}`}></div>
                    <div className={`${open.menuStick2}`}></div>
                    <div className={`${open.menuStick3}`}></div>
                </div>
                <div className={`${styles.inLineAnchor}`}>
                    <a href="">{anchor1}</a>
                    <a href="">{anchor2}</a>
                    <a href="">{anchor3}</a>
                </div>
            </div>
            <div className={`${open.maxBar}`}>
                <div className={`${styles.anchor}`}>
                    <a href="">{anchor1}</a>
                </div>        
                <div className={`${styles.anchor}`}>
                    <a href="">{anchor2}</a>
                </div>        
                <div className={`${styles.anchor}`}>
                    <a href="">{anchor3}</a>
                </div>        
            </div>
        </div>
    )
}