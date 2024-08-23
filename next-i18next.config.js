const { I18N_NAMESPACES, LANGUAGES } = require('./helpers/constants');

module.exports = {
  i18n: {
    defaultLocale: LANGUAGES.en,
    locales: [LANGUAGES.en, LANGUAGES.kr, LANGUAGES.sv, LANGUAGES.zh],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales/',
  ns: [I18N_NAMESPACES.COMMON],
};
