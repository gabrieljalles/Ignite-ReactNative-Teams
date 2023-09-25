import { Container } from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
//usetheme usado para acessar de fora do style os temas

type Props = TextInputProps & {
    placeholder: string;
}

export function Input({ placeholder, ...rest }: Props) {

    const theme = useTheme();


    return (
        <Container {...rest}
            placeholderTextColor={theme.COLORS.GRAY_300}
        />
    )
}