module.exports = {
  i18n: {
    // Find a way to introduct fallbackLng
    defaultLocale: 'en',
    locales: ['en', 'kr', 'sv', 'zh'],
  },
  localePath: require('path').resolve('./public/locales'),
  ns: ['common'],
};
