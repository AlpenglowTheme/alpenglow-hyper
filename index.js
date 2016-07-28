exports.decorateConfig = (config) => {
  const colorSchemeMap = {
    alpenglow: {
      cursorColor: '#f7f7f7',
      foregroundColor: '#d6d6d6',
      backgroundColor: '#2e2e2e',
      borderColor: '#3f3f3f',
      css: `
        ${config.css || ''}
        .tab_active:before { border-color: #2e2e2e }
      `,
      colors: {
        black: '#2e2e2e',
        red: '#c45837',
        green: '#b4c973',
        yellow: '#E8BF6A',
        blue: '#6c99bb',
        magenta: '#90516b',
        cyan: '#8ddcd8',
        white: '#d6d6d6',
        lightBlack: '#797979',
        lightRed: '#c45837',
        lightGreen: '#b4c973',
        lightYellow: '#E8BF6A',
        lightBlue: '#6c99bb',
        lightMagenta: '#90516b',
        lightCyan: '#8ddcd8',
        lightWhite: '#f7f7f7'
      }
    },
    alpenglowTwilight: {
      cursorColor: '#a7a7a7',
      foregroundColor: '#d6d6d6',
      backgroundColor: '#2e2e2e',
      borderColor: '#3f3f3f',
      css: `
        ${config.css || ''}
        .tab_active:before { border-color: #2e2e2e }
      `,
      colors: {
        black: '#2e2e2e',
        red: '#CF6A4C',
        green: '#8F9D6A',
        yellow: '#F9EE98',
        blue: '#7587A6',
        magenta: '#9B859D',
        cyan: '#CDA869',
        white: '#d6d6d6',
        lightBlack: '#797979',
        lightRed: '#CF6A4C',
        lightGreen: '#8F9D6A',
        lightYellow: '#F9EE98',
        lightBlue: '#7587A6',
        lightMagenta: '#9B859D',
        lightCyan: '#CDA869',
        lightWhite: '#F8F8F8'
      }
    },
    alpenglowMonokai: {
      cursorColor: '#FFFFFF',
      foregroundColor: '#d6d6d6',
      backgroundColor: '#2e2e2e',
      borderColor: '#3f3f3f',
      css: `
        ${config.css || ''}
        .tab_active:before { border-color: #2e2e2e }
      `,
      colors: {
        black: '#2e2e2e',
        red: '#b05279',
        green: '#b4c973',
        yellow: '#E5B567',
        blue: '#7eaac7',
        magenta: '#9e86c8',
        cyan: '#8ddcd8',
        white: '#d6d6d6',
        lightBlack: '#636363',
        lightRed: '#b05279',
        lightGreen: '#b4c973',
        lightYellow: '#E5B567',
        lightBlue: '#7eaac7',
        lightMagenta: '#9e86c8',
        lightCyan: '#8ddcd8',
        lightWhite: '#F8F8F0'
      },

    }
  }
  const colorScheme = colorSchemeMap[config.alpenglowOptions.colorScheme] || colorSchemeMap.alpenglow;

  return Object.assign({}, config, colorScheme);
}
