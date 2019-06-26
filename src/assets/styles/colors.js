import theme from 'styled-theming';

const themeName = 'mode';

export default {
  primary: {
    p1: theme(themeName, {
      light: '#AAF6FC',
      dark: '#2C2C2C'
    }),
    p2: theme(themeName, {
      light: '#7DCFF8',
      dark: '#4E4E4E'
    }),
    p3: theme(themeName, {
      light: '#3CACFC',
      dark: '#7C7C7C'
    }),
    p4: theme(themeName, {
      light: '#008BED',
      dark: '#A0A0A0'
    }),
    p5: theme(themeName, {
      light: '#0069C7',
      dark: '#BCBCBC'
    })
  },

  secundary: {
    s1: theme(themeName, {
      light: '#FF73BA',
      dark: '#2C2C2C'
    }),
    s2: theme(themeName, {
      light: '#FF1180',
      dark: '#4E4E4E'
    }),
    s3: theme(themeName, {
      light: '#DF005D',
      dark: '#7C7C7C'
    }),
    s4: theme(themeName, {
      light: '#B9003C',
      dark: '#A0A0A0'
    })
  },

  cyan: {
    c1: theme(themeName, {
      light: '#FAFAFA',
      dark: '#2C2C2C'
    }),
    c2: theme(themeName, {
      light: '#F7F7F7',
      dark: '#4E4E4E'
    }),
    c3: theme(themeName, {
      light: '#F2F2F2',
      dark: '#7C7C7C'
    }),
    c4: theme(themeName, {
      light: '#E8E8E8',
      dark: '#A0A0A0'
    }),
    c5: theme(themeName, {
      light: '#D8D8D8',
      dark: '#BCBCBC'
    }),
    c6: theme(themeName, {
      light: '#BCBCBC',
      dark: '#D8D8D8'
    }),
    c7: theme(themeName, {
      light: '#A0A0A0',
      dark: '#E8E8E8'
    }),
    c8: theme(themeName, {
      light: '#7C7C7C',
      dark: '#F2F2F2'
    }),
    c9: theme(themeName, {
      light: '#4E4E4E',
      dark: '#F7F7F7'
    }),
    c10: theme(themeName, {
      light: '#2C2C2C',
      dark: '#FAFAFA'
    })
  },

  transparent: theme(themeName, {
    light: 'rgba(255, 255, 255, 0.6)',
    dark: 'rgba(0, 0, 0, 0.3)'
  }),

  success: theme(themeName, {
    light: '#04E474',
    dark: '#04E474'
  }),

  error: theme(themeName, {
    light: '#EC0505',
    dark: '#EC0505'
  }),

  warning: theme(themeName, {
    light: '#FCD404',
    dark: '#FCD404'
  }),

  info: theme(themeName, {
    light: '#219673',
    dark: '#219673'
  }),

  black: theme(themeName, {
    light: '#000000',
    dark: '#000000'
  }),

  white: theme(themeName, {
    light: '#FFFFFF',
    dark: '#FFFFFF'
  }),

  disabled: theme(themeName, {
    light: '#C2C5CC',
    dark: '#C2C5CC'
  }),

  background: theme(themeName, {
    light: '#F5F5F5',
    dark: '#F5F5F5'
  })
};
