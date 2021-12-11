import {
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme(
    {
      colors: {
          primary: '#174A67',
          secondary: '#0C8AD1',
          bgColor: '#FBFBFB',
          text: {
              primary: '#174A67',
              secondary: '#FBFBFB',
          }
      },
      fonts: {
        heading: "'Rajdhani', sans-serif",
        body: "'Titillium Web', sans-serif",
      },
      components: {
          Button: {
              variants: {
                  solid: {
                      bg: 'secondary',
                      color: 'white',
                      _hover: {
                          bgColor: '#0d77ad',
                      },
                      _focus: {
                          boxShadow: 'none',
                      },
                      outline: 'none',
                  }
              }
          },
          Link: {
              variants: {
                  primary: {
                      color: 'secondary',
                      fontWeight: 'bold',
                  }
              },
              defaultProps: {
                  variant: 'primary',
              }
          }
      }
    }
)

export default theme;
