import styled from 'styled-components/native';
import {View} from 'react-native';

export const Container = styled.View`
flex: 1;
background-color: ${({theme}: any) => theme.COLORS.GRAY_600};
padding: 24px;
`
;