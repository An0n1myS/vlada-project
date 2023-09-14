import { useState,useEffect } from "react";
import styles from './Home.module.css'
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/Footer";
import NewProductItem from "./NewProductItem/NewProductItem";
import MoliniCart from "./MoliniCart/MoliniCart";
import {newSofas} from './NewProductItem/cartNew.data.js'
import {cartsMolini} from './MoliniCart/cartMolini.data.js'

function Home(){

    return (
        <>
            <Header />
            <div className={styles.content}>
                <div className={styles.firstPart}>
                    <div className={styles.title}>
                        <h1>EXCLUSIVE FURNITURE</h1>
                        <p><hr /> new life for you  <hr /></p>
                    </div>
                </div>
                <div className={styles.newProducts}>
                    <h2 className={styles.newProducts__title}>New Products</h2>
                    <div className={styles.productItems}>
                        {newSofas.length ? newSofas.map(newSofa=>(
                            <NewProductItem key={newSofa.id} newSofa={newSofa}/>
                            ))
                            :<p>There no new Sofas</p>          
                        }
                    </div>
                    <div className={styles.btnViewAll}>
                        <button className={styles.viewAll}>View All &gt;&gt; </button>
                    </div>
                </div>     
                <div className={styles.inspire}>
                    <div className={styles.inspireContent}>
                        <img src="/public/sofa1.png" alt="" className={styles.sofa} />
                        <img src="/public/sofa2.png" alt="" className={styles.sofa1} />
                        <img src="/public/sofa3.png" alt="" className={styles.sofa2} />
                        <div className={styles.inspireInfo}>
                            <div className={styles.inspireInfo__content}>
                                <p>MEB is a family business based on the foundation of generational experience.</p>
                                <p>Our top-quality products are appreciated by an ever-growing number of customers worldwide. </p>
                            </div>
                            <div className={styles.inspireInfo__title}>
                                <p>We inspire</p>
                            </div>
                        </div>
                    </div>
                        <div className={styles.inspare__p}>
                            <p>Explore all our collections.</p>
                            <p> Let them be the inspiration for changes in your home!</p>
                        </div>    
                    
                </div>
                <div className={styles.molina}>
                    <div className={styles.molinaTitle}>
                        <h1>Molina Mini</h1>
                        <p>corner sofa / avangarde collection</p>
                    </div>
                </div>  
                <div className={styles.about}>
                    {cartsMolini.length ? cartsMolini.map(cartMolini=>(
                        <MoliniCart key={cartMolini.id} cartMolini={cartMolini}/>
                        ))
                        :<p>There no new Sofas</p> 
                        
                    }
                </div>
                <div className={styles.calypso}>
                    <div className={styles.calypsoTitle}>
                        <h1>Calypso</h1>
                        <p>bed / dream collection</p>
                    </div>
                </div>  
            </div>
            <Footer />
    
        </>
    )
}

export default Home