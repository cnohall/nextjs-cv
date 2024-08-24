module.exports = {
  i18n: {
    // Find a way to introduct fallbackLng
    defaultLocale: 'en',
    locales: ['en', 'kr', 'sv', 'zh'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales/',
  ns: ['common'],
};
