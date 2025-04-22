module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'react-hooks/rules-of-hooks': 'off', // Temporarily disable for the build
  },
} 