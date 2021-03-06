var util = require ('./util.js');

/**
* cat gets response for a given file
*
* @param {String} argv[2] url
* @callback {bin~cb} callback
*/
function cat(argv, callback) {
  if (!argv[2]) {
    console.error("url is required");
    console.error("Usage : cat <url>");
    process.exit(-1);
  }
  util.get(process.argv[2], function(err, val) {
    console.log('run');
    console.log(val);
    /*
    var g = $rdf.graph();
    var sz = $rdf.Serializer(g);
    documentString = sz.statementsToN3(val);
    console.log(documentString);
    */
  });
}


/**
* ls as a command
*
* @param {String} argv[2] login
* @callback {bin~cb} callback
*/
function bin(argv) {
  id(argv, function(err, res) {
    console.log(res);
  });
}

// If one import this file, this is a module, otherwise a library
if (require.main === module) {
  bin(process.argv);
}


module.exports = cat;
