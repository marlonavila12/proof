import Styles from './investmentProjection.module.css'
import calculateInvestmentResults from './totalInvestment'

function Data(values){
    return values.map((item,index) => {
        return(
            <tr key={`row${index}`} className={Styles.Rows}>
                <td key={`infoA${index}`}>{item.year}</td>
                <td key={`infoB${index}`}>{item.totalInvest}</td>
                <td key={`infoC${index}`}>{item.interest}</td>
                <td key={`infoD${index}`}>{item.annualInv}</td>
                <td key={`infoE${index}`}>{item.valueEndOfYear}</td>
            </tr>
        )
    })
}

export default function Table({values}){
    const VALUES = calculateInvestmentResults(values);
    const DATA = Data(VALUES)
    return(
        <section className={Styles.TableContainer}>
            <table className={Styles.Table}>
                <thead className={Styles.Headers}>
                    <tr className={Styles.Rows}>
                        <th>Year</th>
                        <th>Inverted Capital</th>
                        <th>Interest Earn(Year)</th>
                        <th>Total Interest</th>
                        <th>Investment Value</th>
                    </tr>
                </thead>
                <tbody className={Styles.Body}>
                    {DATA}
                </tbody>
            </table>
        </section>
    )
}