module.exports = {
  // Use preBootstrapCustomizations to change $brand-primary. Ensure this preBootstrapCustomizations does not
  // depend on other bootstrap variables.
  preBootstrapCustomizations: "./src/app/scss/bootstrap/_pre-bootstrap-customizations.scss",

  // Use bootstrapCustomizations to utilize other sass variables defined in preBootstrapCustomizations or the
  // _variables.scss file. This is useful to set one customization value based on another value.
  bootstrapCustomizations: "./src/app/scss/bootstrap/_bootstrap-customizations.scss",

  mainSass: "./src/app/scss/bootstrap/_main.scss",
  verbose: true,
  debug: false,
  // Default for the style loading is to put in your js files
  // styleLoader: "style-loader!css-loader!sass-loader";

  // If you want to use the ExtractTextPlugin
  //   and you want compressed
  //     styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
  //   or if you want expanded CSS
  //     styleLoader: ExtractTextPlugin.extract("style-loader", "css-loader!sass?outputStyle=expanded"),

  // ### Scripts
  // Any scripts here set to false will never
  // make it to the client, it's not packaged
  // by webpack.
  scripts: {
    'transition': true,
    'alert': true,
    'button': true,
    'carousel': true,
    'collapse': true,
    'dropdown': true,
    'modal': true,
    'tooltip': true,
    'popover': true,
    'scrollspy': true,
    'tab': true,
    'affix': true
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    "mixins": true,

    "normalize": true,
    "print": true,
    "glyphicons": true,

    "scaffolding": true,
    "type": true,
    "code": true,
    "grid": true,
    "tables": true,
    "forms": true,
    "buttons": true,

    "component-animations": false,
    "dropdowns": false,
    "button-groups": false,
    "input-groups": false,
    "navs": false,
    "navbar": false,
    "breadcrumbs": false,
    "pagination": false,
    "pager": false,
    "labels": false,
    "badges": false,
    "jumbotron": false,
    "thumbnails": false,
    "alerts": false,
    "progress-bars": false,
    "media": false,
    "list-group": false,
    "panels": false,
    "wells": true,
    "responsive-embed": false,
    "close": false,

    "modals": false,
    "tooltip": false,
    "popovers": false,
    "carousel": false,

    "utilities": true,
    "responsive-utilities": true
  }
};
