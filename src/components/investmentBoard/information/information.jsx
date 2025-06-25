import Styles from './information.module.css';
import Input from './input/input';

export default function Information({investment, save}){
    //console.log(investment)
    return(
        <section className={Styles.Information}>
            <section className={Styles.Title}><h2>Invesment Information</h2></section>
            <section className={Styles.Inputs}>
                <Input description={'Initial Investment'} type='text' id='investmentText' accessKeys={'initial'} invest={investment} saveValue={save} />
                <Input description={'Annual Investment'} type='text' id='annualText' accessKeys={'annual'} invest={investment} saveValue={save}/>
                <Input description={'Expected Return'} type='text' id='return' accessKeys={'returns'} invest={investment} saveValue={save}/>
                <Input description={'Duration of Investment'} type='number' id='duration' accessKeys={'duration'} invest={investment} saveValue={save}/>
            </section>
        </section>
    );
};