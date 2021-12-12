// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {//theme에 어떤 속성이 있는지 알려준다. 
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}