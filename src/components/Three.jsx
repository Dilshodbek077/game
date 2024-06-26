import n from "./Three.module.css"
import ff from "../image/willy.png"
import pubg from "../image/pubg.png"
import gost from "../image/gost.png"
import free from "../image/free fire.png"
import need from "../image/needfor.png"


function Three() {
    return (
        <>
        <div className={n.gig}>
            <div className={n.willy}>
                <img className={n.wf} src={ff} alt="" />
                <h2 className={n.wh2}>William jonson</h2>
            </div>

            <h1 className={n.live}>Live Game</h1>
            <div className={n.orange}></div>


            <div className={n.yuh}>
                <div className={n.yuh2}>
                    <img src={pubg} alt="" />
                </div>
                <div className={n.yuh3}>
                    <h3>Pubg war</h3>
                    <p>war Battle</p>
                </div>
            </div>

            <div className={n.yuh}>
                <div className={n.yuh2}>
                    <img src={gost} alt="" />
                </div>
                <div className={n.yuh3}>
                    <h3>Gost of Tsushima</h3>
                    <p>war Battle</p>
                </div>
            </div>

            <div className={n.yuh}>
                <div className={n.yuh2}>
                    <img src={free} alt="" />
                </div>
                <div className={n.yuh3}>
                    <h3>FreeFire</h3>
                    <p>war Battle</p>
                </div>
            </div>


            <img className={n.needfor} src={need} alt="" />
            <h1 className={n.speed}>Need for Speed</h1>
            <p className={n.speed2}>Racing</p>
            <p className={n.wiwi}>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</p>

            <button className={n.bigBtn}>Download Now</button>


        </div>
        </>
    )
}

export default Three