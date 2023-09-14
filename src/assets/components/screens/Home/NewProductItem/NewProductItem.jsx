
import styles from '../NewProductItem/NewProductItem.module.css';

function NewProductItem({newSofa}) {
    return (
        <div key={newSofa.id} className={styles.cart}>
            <h2 className={styles.title}> {newSofa.name}</h2>
            <hr />
            <div className={styles.image}>
                    <img src={newSofa.image} alt="" />
                </div>
            <p className={styles.collection}>{newSofa.collection}</p>
            <p className={styles.price}> {new Intl.NumberFormat('us-US', {
                    style:'currency',
                    currency: 'USD', 
                }).format(newSofa.price)}
            </p>
            <div className={styles.btnArrowDiv}>
                <button className={styles.btnArrow}><img src="/public/arrowbtn.png" alt="" /></button>
            </div>
        </div>
    )

}

export default NewProductItem