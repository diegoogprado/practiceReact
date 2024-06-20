import { useState } from "react"

export default function openMenu(styles) {
    const [ menuStick1, setMenuStick1 ] = useState(styles.stick)
    const [ menuStick2, setMenuStick2 ] = useState(styles.stick)
    const [ menuStick3, setMenuStick3 ] = useState(styles.stick)
    const [ maxBar, setMaxBar ] = useState(styles.maxBar + ` ` + styles.hidden)

    const click = () => {
        if(menuStick1 === `${styles.stick}`) {
            setMenuStick1(styles.stick + ` ` + styles.top)
            setMenuStick2(styles.stick + ` ` + styles.middle)
            setMenuStick3(styles.stick + ` ` + styles.bottom)
            setMaxBar(styles.maxBar)
        } else {
            setMenuStick1(styles.stick)
            setMenuStick2(styles.stick)
            setMenuStick3(styles.stick)
            setMaxBar(styles.maxBar + ` ` + styles.hidden)
        }
    }

    return { menuStick1, menuStick2, menuStick3, maxBar, click }
}