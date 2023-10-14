import styles from './About.module.css';
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/Footer";



function About(){
    return(
        <>
            <Header/>

            <div className={styles.content}>
                <div className={styles.first_block}>
                    <div className={styles.first_block__title}>
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className={styles.second_block}>
                    <div className={styles.second_block__title}>
                        <h2>We inspire</h2>
                    </div>
                    <div className={styles.second_block__content}>
                        <p>MEB is a family business based on the foundation of generational experience. For over 30 years, it has consistently pursued its vision of creating furniture that combines elegance, functionality and the latest trends with a unique awareness of market needs. Our top-quality products are appreciated by an ever-growing number of customers worldwide. The company focuses on continuous improvement to make sure that the furniture bearing the MEB logo is created in response to the real needs of users. Explore all our collections. Let them be the inspiration for changes in your home!</p>
                    </div>   
                </div>
                <div className={styles.collections}>
                    <div className={styles.collections__first}>
                        <div className={styles.collection_list1}>
                            <p>avangarde collection</p>
                            <p>simple collection</p>
                            <p>young collection</p>
                            <p>elegance collection</p>
                            <p>relax collection</p>
                        </div>
                        <div className={styles.collection_img1}>
                            <img src="/public/about1.png" alt="about1" />
                        </div>
                    </div>
                    <div className={styles.collections__second}>
                        <div className={styles.collection_img2}>
                            <img src="/public/about2.png" alt="about2" />
                        </div>
                        <div className={styles.collection_list2}>
                            <p>dream collection</p>
                            <p>box springs collection</p>
                            <p>box springs massive collection</p>
                            <p>leather collection</p>
                            <p>accessories collection</p>
                        </div>
                    </div>
                </div>
                <div className={styles.calypso}>
                    <div className={styles.calypsoTitle}>
                        <h1>Calypso</h1>
                        <p>bed / dream collection</p>
                    </div>
                </div>
                <div className={styles.last_block}>
                    <div className={styles.last_block__info}>
                        <div className={styles.info_title}>
                                <h2>Passion to create</h2>
                        </div>
                        <div className={styles.info__content}>
                            <p>The high-quality products are appreciated by an increasing group of people worldwide, garnering their attention as well as recognition at industry trade fairs and in industry competitions.The company values constant improvement. The creative team works in accordance with the Design Thinking principle, to ensure that the furniture bearing the MEB logo are made in response to the real needs of the users.</p>
                        </div>
                    </div>
                    <div className={styles.last_block__img}>
                        <img src="/public/about3.png" alt="about3" />
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default About