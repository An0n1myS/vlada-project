import styles from './Contact.module.css';
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/Footer";
import PlaceMap from "./PlaceMap/PlaceMap";



function Contact(){
    return(
        <>
            <Header/>

            <div className={styles.content}>
                <div className={styles.page_logo}>

                </div>
                <div className={styles.title}>
                    <h2>Contact Us</h2>
                    <p>contact us any way you like </p>
                </div>
                <div className={styles.info}>
                    <div className={styles.contact}>
                        <div className={styles.adress}>
                            <h2>Adress</h2>
                            <p>Pl. Croix-Blanche 11,</p>
                            <p>1066 Epalinges</p>
                        </div>
                        <div className={styles.phone}>
                            <h2>Phone</h2>
                            <p>+41794441010</p>
                        </div>
                        <div className={styles.mail}>
                            <h2>E-Mail</h2>
                            <p>meb@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <PlaceMap />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Contact