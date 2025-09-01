// tailwind config file for typescript

module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
    options: {}
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: 'var(--color-red)', dark: 'var(--color-red-dark)', tint: 'var(--color-red-tint)' },
        blue: { DEFAULT: 'var(--color-blue)', dark: 'var(--color-blue-dark)', tint: 'var(--color-blue-tint)' },
        gold: { DEFAULT: 'var(--color-gold)', dark: 'var(--color-gold-dark)', tint: 'var(--color-gold-tint)' },
        metal: { DEFAULT: 'var(--color-metal)', dark: 'var(--color-metal-dark)', mid: 'var(--color-metal-mid)', tint: 'var(--color-metal-tint)' },
        surface: {
          0: 'var(--surface-0)',
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
          3: 'var(--surface-3)',
          dark: 'var(--surface-dark)',
          'dark-alt': 'var(--surface-dark-alt)'
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)'
      },
      fontFamily: {
        title: ['var(--font-title)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        valverde: ['Valverde', 'sans-serif']
      },
      fontSize: {
        '2xs': 'var(--fs-2xs)',
        xs: 'var(--fs-xs)',
        sm: 'var(--fs-sm)',
        base: 'var(--fs-base)',
        md: 'var(--fs-md)',
        lg: 'var(--fs-lg)',
        xl: 'var(--fs-xl)',
        '2xl': 'var(--fs-2xl)',
        '3xl': 'var(--fs-3xl)',
        '4xl': 'var(--fs-4xl)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        inset: 'var(--shadow-inset)',
        'light-small': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'light-large': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'dark-small': '2px 2px 0px 0px rgba(255, 255, 255, 1)',
        'dark-large': '4px 4px 0px 0px rgba(255, 255, 255, 1)'
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
        bevel: 'var(--radius-bevel)'
      },
      spacing: {
        0.5: 'var(--sp-1)',
        1: 'var(--sp-2)',
        1.5: 'var(--sp-3)',
        2: 'var(--sp-4)',
        3: 'var(--sp-5)',
        4: 'var(--sp-6)',
        5: 'var(--sp-7)',
        6: 'var(--sp-8)',
        8: 'var(--sp-9)',
        10: 'var(--sp-10)',
        12: 'var(--sp-11)',
        16: 'var(--sp-12)',
        20: 'var(--sp-13)',
        24: 'var(--sp-14)'
      },
      transitionDuration: {
        fast: 'var(--anim-fast)',
        base: 'var(--anim-base)',
        slow: 'var(--anim-slow)'
      },
      transitionTimingFunction: {
        in: 'var(--easing-in)',
        out: 'var(--easing-out)'
      },
      backgroundImage: (theme) => ({
        'light-logo':
          "url('https://firebasestorage.googleapis.com/v0/b/meublesbymi.appspot.com/o/WHITE_LOGO.png?alt=media&token=0f7c5611-48bd-426c-b9e9-498998dfec82')",
        'dark-logo':
          "url('https://firebasestorage.googleapis.com/v0/b/meublesbymi.appspot.com/o/DARK_LOGO.png?alt=media&token=26c79fec-2c61-4948-9791-217c2d34fcb7')"
      })
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  }
}
