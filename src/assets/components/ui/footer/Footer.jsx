import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from './Footer.module.css'

function Footer(){


    return (
        <footer className={styles.footer}>
          <div className={styles.logo}>
              <Link to='/'><img src="/public/MEB.png" alt="" /></Link>
          </div>
          <div className={styles.menu}>
            <ul>
                <li><Link to='/products/'>Products</Link></li>
                <li>|</li>
                <li><Link to='/collections/'>Collections</Link></li>
                <li>|</li>
                <li><Link to='/shop/'>Shop</Link></li>
                <li>|</li>
                <li><Link to='/about/'>About</Link></li>
                <li>|</li>
                <li><Link to='/contact/'>Contact</Link></li>
            </ul>
          </div>
          <div className={styles.icons}>
            <img src="/public/youtube.png" alt="" />
            <img src="/public/facebook.png" alt="" />
            <img src="/public/instagram.png" alt="" />
          </div>
        </footer>
    )
}

export default Footer