import styles from './ProductCategory.module.css';

function ProductCategory({category}){
    return(
        <div key={category.id} className={styles.item}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemImg}>
                    <img src={category.image} alt=""/>
                </div>
                <p className={styles.itemTitle}>{category.title}</p>
                <p className={styles.filter}>Filter <img src="/public/vector.svg" alt="" /></p>
            </div>
    
        </div>
    )
}

export default ProductCategory