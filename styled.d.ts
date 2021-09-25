// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    direction: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}