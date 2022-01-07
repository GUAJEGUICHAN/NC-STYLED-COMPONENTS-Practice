// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {//이것이 우리가 사용할 테마이다. 
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
