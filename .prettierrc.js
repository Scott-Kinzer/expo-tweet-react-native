module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,

    overrides: [
      {
        files: '*.ts',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.tsx',
        options: {
          parser: 'typescript',
        },
      },
    ],
  
  };