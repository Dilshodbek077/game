import c from "./Nav.module.css"

function Nav() {
    return (
        <nav className={c.first}>
            <button className={c.btn}>Game</button>
            <ul className={c.list}>
                <li><a className={c.aaa} href="#">Live score</a></li>
                <li><a className={c.aaa} href="#">Statistics</a></li>
                <li><a className={c.aaa} href="#">Analitics</a></li>
                <li><a className={c.aaa} href="#">Forecasts</a></li>
            </ul>

        </nav>
    )
}

export default Nav