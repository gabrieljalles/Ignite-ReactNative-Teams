import {useState} from 'react';
import { FlatList} from 'react-native'; 
import { View, Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from '@components/GroupCard';

export function Groups() {
    const [groups,setGroups] = useState<string[]>(['Galera do Rocket Seat']);


    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="monte sua turma" />
            <FlatList 
                data = {groups}
                keyExtractor={item => item}
                renderItem={({item}) => (
                <GroupCard 
                title={item}
                />)}
            /> 
            <GroupCard title="Equipe do TI" />
        </Container>
    )
}