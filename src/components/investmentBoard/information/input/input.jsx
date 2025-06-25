import Styles from './input.module.css';

function saveInvestmentInformation(e, save, keys){
    save(prev => {
        const newInvestment = {...prev}
        newInvestment[keys] = e.target.value
        return newInvestment
    })
}

export default function Input({description, id, accessKeys,invest, saveValue, ...props}){
    const descriptionText = description.toUpperCase();
    return(
        <section className={Styles.InputSection}>
            <section className={Styles.Block}>
                <label htmlFor={id}>{descriptionText}</label>
                <input id={id} {...props} value={invest[accessKeys]} onChange={(event) => saveInvestmentInformation(event, saveValue, accessKeys)} />
            </section>
        </section>
    );
};