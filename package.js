Package.describe({
  name: 'dcworldwide:flickity',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'GPL v3 Flickity Carousel Widget by Metafizzy',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dcworldwide/meteor-flickity',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    "vendor/flickity/dist/flickity.css",
    "vendor/flickity/dist/flickity.pkgd.js",
  ], "client");


});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('flickity-tests.js');
});
