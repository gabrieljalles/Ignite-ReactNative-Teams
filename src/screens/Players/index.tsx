import { Highlight } from '@components/Highlight';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import React, { useState } from 'react';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Players() {
    const [team, setTeam] = useState(' Time A');
    const [players, setPlayers] = useState<string[]>(['gabriel','fernando','Biro','Cleber','Pleube', 'Fernandinho']);
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Nome da turma"
                subtitle="adicione a galera e separa os times"
            />

            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                        {players.length}
                </NumberOfPlayers>

            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard 
                    name={item} 
                    onRemove={() => {}} 
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                    message= "Que tal cadastrar a primeira turma?"
                    /> 
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex:1}
                ]}
            />

            <Button 
                title = "Remover Turma"
                type= "SECONDARY"
            />
        </Container>
    )
}