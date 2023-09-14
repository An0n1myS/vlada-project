import styles from '../MoliniCart/MoliniCart.module.css';

function MoliniCart({cartMolini}) {

    return(
        <div key={cartMolini.id} className={styles.cart}>
            <div className={styles.arrow}>
                <img src={cartMolini.arrow} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.title}><h1>{cartMolini.title}</h1></div>
                <div className={styles.content}>{cartMolini.content}</div>
                <div className={styles.link}>{cartMolini.link}</div>
            </div>
            <div className={styles.cartImgDiv}>
                <img src={cartMolini.image} alt="" className={styles.cartImg} />
            </div>
        </div>

    )
}

export default MoliniCart