var mde = process.argv[2];

if (mde != 'prod') {
   mde = 'dev';
}

var port = require('./' + mde + '.json').port;
console.log(port);
