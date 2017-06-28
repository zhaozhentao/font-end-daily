const elixir = require('laravel-elixir')

elixir(function (mix) {
  mix
    .scripts([
      'vendor/inline-attachment.js',
      'vendor/codemirror-4.inline-attachment.js',
      'vendor/simplemde.min.js',
    ], 'public/assets/js/editor.js')
    .sass([
      'vendor/simplemde.min.scss'
    ], 'public/assets/css/editor.css')
})

