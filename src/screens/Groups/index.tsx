import {useState} from 'react';
import { FlatList} from 'react-native'; 
import { View, Text } from "react-native";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import {Button} from '@components/Button';

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
                />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1}} // fazer texto ficar centralizado quando não existe nenhum grupo
                ListEmptyComponent={() => (
                    <ListEmpty 
                        message="Sem grupos, sem jogos :( "
                    />
                )}
            /> 
            <Button title="Criar nova turma" /> 
        </Container>
    )
}