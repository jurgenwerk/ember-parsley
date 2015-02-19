# Ember-parsley

An Ember CLI Addon for the ultimate JavaScript form validation library [Parsley.js](http://parsleyjs.org/)

## Installation

* `ember install:addon ember-parsley` in your Ember CLI project folder

## Usage

* Template example:

```html
<form>
  <label>Password</label>
  {{input type="password" value=password data-parsley-trigger="keyup" data-parsley-length="[8, 32]" data-parsley-length-message="Password must be at least 8 characters long." required="required" class="password-field"}}

  <label>Password confirmation</label>
  {{input type="password" value=passwordConfirmation data-parsley-trigger="keyup" data-parsley-length="[8, 32]" data-parsley-length-message="Password must be at least 8 characters long." data-parsley-equalto=".password-field" data-parsley-equalto-message="Password confirmation must match the password." required="required"}}

  <input type="submit" value="Save password" class="button" {{action "savePassword" target="view"}}>
</form>
```

*  In your view or component's didInsertElement hook:

```javascript
parsley: (function() {
  return this.$('form').parsley();
}).on('didInsertElement')
```

## Summary

* This addon includes parsley (with parsley.remote.js) library, and allows you to use `data-parsley-*` attributes in your Handlebars templates (which would normally be discarded).

## Contributing

1. Fork it ( https://github.com/matixmatix/ember-parsley/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
