/**
 * @type {import('prettier').Options}
 **/
module.exports = {
  singleQuote: true,
  semi: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
