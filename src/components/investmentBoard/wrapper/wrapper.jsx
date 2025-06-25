import Styles from './wrapper.module.css';

export default function Wrapper({children}){
    return(
        <main className={Styles.Wrapper}>
            {children}
        </main>
    )
}