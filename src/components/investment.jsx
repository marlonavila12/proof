import Container from "./container/container.jsx"
import Header from "./header/header.jsx"
import Investment from "./investmentBoard/board.jsx"
export default function investment(){
    return (
        <Container>
            <Header />
            <Investment />
        </Container>
    )
}