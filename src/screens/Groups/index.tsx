import { View, Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";



export function Groups() {
    return (
        <Container>
            <Header />aa
            <Highlight title="Turmas" subtitle="monte sua turma" />
        </Container>
    )
}