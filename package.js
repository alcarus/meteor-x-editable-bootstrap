Package.describe({
  name: "natestrauser:x-editable-bootstrap",
  summary: "Latest version of X-Editable for Bootstrap with wysihtml5 rich text editor",
  version: "1.5.2_2",
  git: "https://github.com/nate-strauser/meteor-x-editable-bootstrap.git"
});

Package.on_use(function (api){
  api.versionsFrom("1.0");
  // Package needs jQuery
  api.use('jquery');

  // This depends on BS3 JS libraries, including popovers.
  // Need to make sure bootstrap 3 is loaded first, or errors will ensue
  // https://github.com/vitalets/x-editable/issues/395
  api.use([
        "twbs:bootstrap@3.3.1"
    ], "client", { weak: true });

  //x-editable
  api.addFiles('lib/bootstrap-editable/css/bootstrap-editable.css', 'client');
  api.addFiles('lib/bootstrap-editable/js/bootstrap-editable.js', 'client', {bare:true});
  api.addFiles('lib/bootstrap-editable/img/clear.png', 'client');
  api.addFiles('lib/bootstrap-editable/img/loading.gif', 'client');

  //address
  api.addFiles('lib/address/address.css', 'client');
  api.addFiles('lib/address/address.js', 'client', {bare:true});

  //wysihtml5
  api.addFiles('lib/wysihtml5/wysihtml5.js', 'client', {bare:true});
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/wysiwyg-color.css', 'client');
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/wysihtml5-0.3.0.js', 'client', {bare:true});
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/bootstrap-wysihtml5-0.0.2.css', 'client');
  api.addFiles('lib/wysihtml5/bootstrap-wysihtml5-0.0.2/bootstrap-wysihtml5-0.0.2.js', 'client', {bare:true});

  //typeaheadjs
  api.addFiles('lib/typeaheadjs/typeaheadjs.js', 'client', {bare:true});
  api.addFiles('lib/typeaheadjs/lib/typeahead.js-bootstrap.css', 'client');
  api.addFiles('lib/typeaheadjs/lib/typeahead.js', 'client', {bare:true});
  api.addFiles('lib/typeaheadjs/lib/typeahead.bundle.min.js', 'client', {bare:true});

  //override image paths
  api.addFiles('path-override.css', 'client');
});
