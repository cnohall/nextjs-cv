module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr', 'se', 'zh'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales/',
  ns: ['common'],
};
