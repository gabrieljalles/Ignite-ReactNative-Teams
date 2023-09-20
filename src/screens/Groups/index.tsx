import { View, Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from '@components/GroupCard';



export function Groups() {
    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="monte sua turma" />
            <GroupCard title="Equipe do TI" />
        </Container>
    )
}