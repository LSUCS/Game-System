var prompt = require('prompt');

var schema = {
  properties: {
    game: {
      pattern: /^[a-zA-Z\s\-]+$/,
      type: 'string',
      warning: 'Username must be only letters, spaces, or dashes'
    },
    map: {
      type: 'string'
    }
  }
};

var inputs = {
  game: '',
  map: ''
};

prompt.start();
prompt.message = "Enter";

prompt.get(schema, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Game: ' + result.game);
  console.log('  Map: ' + result.map);
  inputs.game = result.game;
  inputs.map = result.map;
});

function onErr(err) {
  console.log(err);
  return 1;
}

module.exports = {
  game: function game() {
    return inputs.game;
  },
  map: function map() {
    return inputs.map;
  }
};