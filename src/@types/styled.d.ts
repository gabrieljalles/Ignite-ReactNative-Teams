import 'styled-components';
import theme from '../theme';

//usado para chamar as cores do thema de maneira rápida.
declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface defaultTheme extends ThemeType {}
}