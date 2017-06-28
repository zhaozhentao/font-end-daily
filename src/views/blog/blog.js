import SimpleMDE from '../../../public/assets/js/editor'

const state = {
  count: 0
}

const mutations = {
}

const actions = {
  initEditor (store, data) {
    var simplemde = new SimpleMDE({
      spellChecker: false,
      autosave: {
        enabled: true,
        delay: 1000,
        unique_id: 1
      },
      forceSync: true
    })

    window.inlineAttachment.editors.codemirror4.attach(simplemde.codemirror, {
      uploadUrl: '',
      extraParams: {
        '_token': ''
      },
      onFileUploadResponse: function (xhr) {
        var result = JSON.parse(xhr.responseText)
        var filename = result[this.settings.jsonFieldName]

        if (result && filename) {
          var newValue
          if (typeof this.settings.urlText === 'function') {
            newValue = this.settings.urlText.call(this, filename, result)
          } else {
            newValue = this.settings.urlText.replace(this.filenameTag, filename)
          }
          var text = this.editor.getValue().replace(this.lastValue, newValue)
          this.editor.setValue(text)
          this.settings.onFileUploaded.call(this, filename)
        }
        return false
      }
    })
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
