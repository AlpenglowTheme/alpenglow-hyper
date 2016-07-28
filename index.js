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
        yellow: '#cc7832',
        blue: '#6c99bb',
        magenta: '#90516b',
        cyan: '#E8BF6A',
        white: '#d6d6d6',
        lightBlack: '#797979',
        lightRed: '#c45837',
        lightGreen: '#b4c973',
        lightYellow:'#cc7832',
        lightBlue: '#6c99bb',
        lightMagenta: '#90516b',
        lightCyan: '#E8BF6A',
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
        yellow: '#CDA869',
        blue: '#7587A6',
        magenta: '#9B859D',
        cyan: '#F9EE98',
        white: '#d6d6d6',
        lightBlack: '#797979',
        lightRed: '#CF6A4C',
        lightGreen: '#8F9D6A',
        lightYellow: '#CDA869',
        lightBlue: '#7587A6',
        lightMagenta: '#9B859D',
        lightCyan: '#F9EE98',
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
        yellow: '#E87D3E',
        blue: '#6c99bb',
        magenta: '#9e86c8',
        cyan: '#E5B567',
        white: '#d6d6d6',
        lightBlack: '#797979',
        lightRed: '#b05279',
        lightGreen: '#b4c973',
        lightYellow: '#E87D3E',
        lightBlue: '#6c99bb',
        lightMagenta: '#9e86c8',
        lightCyan: '#E5B567',
        lightWhite: '#FFFFFF'
      },
    }
  };

  let colorScheme;
  try {
    colorScheme = colorSchemeMap[config.alpenglowOptions.colorScheme];
  } catch (e) {
    colorScheme = colorSchemeMap.alpenglow;
  }

  return Object.assign({}, config, colorScheme);
}
