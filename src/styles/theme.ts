// theme.ts
import type { Theme } from 'theme-ui'

export const theme: Theme = {
    config: {
      initialColorModeName: "light"
    },
    colors: {
      primary: 'hsl(346.8 77.2% 49.8%)',
      secondary: 'hsl(240 4.8% 95.9%)',
      tertiary: 'hsl(0 84.2% 60.2%)',
      background: 'hsl(0 0% 100%)',
      text: 'hsl(240 10% 3.9%)',
      primaryTextColor: 'hsl( 355.7 100% 97.3%)',
      secondaryTextColor: 'hsl(240 5.9% 10%)',
      inputPlaceholder: 'hsl(240 5.9% 90%)',
      darkGrayText: '#303030',
      darkText: '#f1faee',
      black: '#000000',
      white: '#ffffff',
      modes: {
        light: {
          primary: 'hsl(346.8 77.2% 49.8%)',
          secondary: 'hsl(240 4.8% 95.9%)',
          tertiary: 'hsl(0 84.2% 60.2%)',
          background: 'hsl(0 0% 100%)',
          text: 'hsl(240 10% 3.9%)',
          primaryTextColor: 'hsl(355.7 100% 97.3%)',
          secondaryTextColor: 'hsl(240 5.9% 10%)',
          inputPlaceholder: 'hsl(240 5.9% 90%)',
          darkGrayText: '#303030',
          darkText: '#f1faee',
          black: '#000000',
          white: '#ffffff',
          radius: '0.5rem',
        },
        dark: {
          primary: 'hsl(346.8 77.2% 49.8%)',
          secondary: 'hsl(240 3.7% 15.9%)',
          tertiary: 'hsl(12 6.5% 15.1%)',
          background: 'hsl(20 14.3% 4.1%)',
          text: 'hsl(240 0% 95%)',
          primaryTextColor: 'hsl(355.7 100% 97.3%)',
          secondaryTextColor: 'hsl(0 0% 98%)',
          inputPlaceholder: 'hsl(240 3.7% 15.9%)',
          darkGrayText: '#303030',
          darkText: '#f1faee',
          black: '#000000',
          white: '#ffffff',
          radius: '0.5rem',
      }
      }
    },
    fonts: {
      xs: '0.8rem',
      sm: '0.9rem',
      base: '1rem',
      md: '1.2rem'
    },
    buttons: {
      main: {
        bg: 'primary',
        color: "secondary",
        border: "solid 1px red"
      },
      outlined: {
        color: 'white',
        border: "solid 0.1rem #e11d48",
        bg: 'background',
      },
    }
    
  };