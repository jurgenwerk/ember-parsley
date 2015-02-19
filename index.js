/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-parsley',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/parsleyjs/dist/parsley.js');
    app.import('bower_components/parsleyjs/dist/parsley.remote.js');
    app.import('bower_components/parsleyjs/src/parsley.css');
  }
};
