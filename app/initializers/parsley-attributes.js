export function initialize() {
  Ember.View.reopen({
    init: function() {
      this._super();
      // Allow parsley data attributes
      return Em.keys(this).forEach((function(_this) {
        return function(key) {
          if (key.substr(0, 12) === "data-parsley") {
            return _this.get("attributeBindings").pushObject(key);
          }
        };
      })(this));
    }
  });
}

export default {
  name: 'parsley-attributes',
  initialize: initialize
};
