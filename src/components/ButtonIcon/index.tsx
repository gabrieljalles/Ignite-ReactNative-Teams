import { TouchableOpacityProps } from 'react-native';
import { ButtonIconTypeStyleProps } from './styles';
import { Container, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    type?: ButtonIconTypeStyleProps
    icon: keyof typeof MaterialIcons.glyphMap; // usado para eu ver as opções disponíveis na hora de preencher o component
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    return (
        <Container>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}