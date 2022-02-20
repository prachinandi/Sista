import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Container></Container>
        </div>
    );
}

const Container = styled.div`
    background-color: white;
    min-height: 100vh;
    max-width: 100vw;
`;

export default App;
