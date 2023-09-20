import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

//Quero a tipagem do touch, por isso coloquei ele (entre) no style
type Props = TouchableOpacityProps & {
    title: string;
}

//...rest : qualçquer outra tipagem que não coloquei no Props 
export function GroupCard({ title, ...rest }: Props) {
    return (
        <Container>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}