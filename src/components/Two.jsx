import b from "./Two.module.css"
import {data1} from "../db/data"

function Two() {
    return (
        <>
        <h1 className={b.fh1}>New Released Games</h1>
        <div className={b.big}>
        {
            data1.map(article =>
                <div className={b.card}>
                    <img className={b.fotoo} src={article.img} alt="" />
                    <div>
                        <h3 className={b.b1}>{article.name}</h3>
                        <p className={b.b2}>{article.desc}</p>
                        <strong className={b.b3}>{article.rat}</strong>
                    </div>
                </div>
            )
        }

        </div>
        </>
    )
}

export default Two