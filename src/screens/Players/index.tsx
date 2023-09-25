import { Highlight } from '@components/Highlight';
import { Container, Form } from './styles';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import React, { useState } from 'react';
import { Filter } from '@components/Filter';

export function Players() {
    const [team, setTeam] = useState(' Time A')
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


        </Container>
    )
}