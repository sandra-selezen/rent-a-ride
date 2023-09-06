import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryAccent: string;
      secondaryAccent: string;
      primaryWhite: string;
      secondaryWhite: string;
      tertiaryWhite: string;
      primaryBlack: string;
      secondaryBlack: string;
      tertiaryBlack: string;
    }
  }
}
