import styles from './Products.module.css';
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/Footer";
import {categories} from './Products.data.js';
import ProductCategory from './ProductCategory/ProductCategory';

function Product(){
    return(
        <>
            <Header/>

            <div className={styles.content}>
                <div className={styles.pageTitle}>
                    <div className={styles.title}>
                        <h1>PRODUCTS</h1>
                        <p><hr /> view our furniture  <hr /></p>
                    </div>
                </div>
                <div className={styles.productCategories}>
                    <div className={styles.productCategoriesDiv}>
                        {categories.length ? categories.map(category=>(
                            <ProductCategory key={category.id} category={category}/>
                            ))
                            :<p>There no Categories</p>          
                        }
                    </div>  
                    
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Product