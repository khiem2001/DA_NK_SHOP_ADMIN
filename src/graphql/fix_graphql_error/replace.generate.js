const replace = require('replace-in-file');
let options;
options = {
  files: 'src/graphql/generated/index.ts',
  from: 'document: query,',
  to: '//@ts-ignore\n\t document: query,'
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
