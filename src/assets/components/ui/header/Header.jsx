import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Header.module.css'

function Header(){


    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to='/'><img src="/public/MEB.png" alt="" /></Link>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuItems}>
                        <ul>
                            <li><Link to='/products/'>Products</Link></li>
                            <li><Link to='/collections/'>Collections</Link></li>
                            <li><Link to='/shop/'>Shop</Link></li>
                            <li><Link to='/about/'>About</Link></li>
                            <li><Link to='/contact/'>Contact</Link></li>
                        
                            <li><img src="/public/user.png" alt="" /></li>
                            <li><img src="/public/search.png" alt="" /></li>
                            <li><img src="/public/shopping-cart.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header