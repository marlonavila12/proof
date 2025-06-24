import Styles from './header.module.css';
import Logo from '../../assets/images/investment-calculator-logo.png'

export default function Header(){
    return(
        <header className={Styles.Header}>
            <section className={Styles.Img}>
                <img src={Logo} alt='investment logo' className={Styles.Logo} />
                <h1>Investment Calculator</h1>
            </section>
            <section className={Styles.Wrapper}>
                <ul className={Styles.Options}>
                    <li>Calculator</li>
                    <li>Information</li>
                    <li>About</li>
                    <li>Download PDF</li>
                </ul>
            </section>
        </header>
    );
}