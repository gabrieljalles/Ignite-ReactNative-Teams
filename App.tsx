import { Groups } from '@screens/Groups';
import { ThemeProvider} from 'styled-components';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {Loading} from '@components/Loading';

export default function App() {

  //esperar as fonts carregarem primeiro...
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });



  return(
    
    <ThemeProvider theme={theme}>
      {!fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>

  );
}