import {formatter} from '../../../util/currencyFormat'

export default function calculateInvestmentResults({initial, annual, returns, duration}){
    const annualData = new Array(duration);
    let currentValue = Number(initial)
    let valueInvest= Number(initial)
    const rate = Number(returns)/100
    const annualInvestment = Number(annual)
    let totalInterest = 0

    for(let year=1; year<=duration; year++){
        const interest = currentValue * rate;
        currentValue += interest + annualInvestment
        valueInvest += annualInvestment
        totalInterest +=  interest

        annualData[year-1] = {
            year, 
            totalInvest: formatter.format(valueInvest),
            interest: formatter.format(Math.round(Math.round(interest * 100) /100)), 
            valueEndOfYear: formatter.format(Math.round(Math.round(currentValue * 100)/100 )),
            annualInv: formatter.format(Math.round(totalInterest))
        }
    }

    return annualData
}