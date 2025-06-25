import Wrapper from "./wrapper/wrapper"
import Information from "./information/information";
import InvestmentProjection from "./projection/investmentProjection.jsx"
import { useState } from "react";

export default function Board(){
    const [investmentInformation, setInvestmentInformation] = useState({initial: 0, annual:0, returns:0, duration:0})
    return(
        <Wrapper>
            <Information investment={investmentInformation} save={setInvestmentInformation}/>
            <InvestmentProjection values={investmentInformation} />
        </Wrapper>
    );
};