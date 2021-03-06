Package.describe({
  name: 'civilframe:meteor-sandbox',
  version: '0.8.6',
  summary: 'A Meteor port of https://github.com/gf3/sandbox',
  git: 'https://github.com/civilframe/meteor-sandbox.git',
  documentation: 'README.md'
});

Npm.depends({
  "sandbox": "0.8.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('meteor-sandbox.js');
});
