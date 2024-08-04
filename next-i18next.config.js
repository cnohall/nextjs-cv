module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'kr', 'sv', 'zh'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./my-custom/path')
      : '/public/my-custom/path',
  ns: ['common'],
};
