import SimpleMDE from '../../../public/assets/js/editor'
import axios from 'axios'

const state = {
  count: 0
}

const mutations = {}

const actions = {
  initEditor (store, data) {
    var autosave = data == null
    var uniqueId = 'blog_content' + (data == null ? '' : data.id)
    var simplemde = new SimpleMDE({
      spellChecker: false,
      autosave: {
        enabled: autosave,
        delay: 1000,
        unique_id: uniqueId
      },
      forceSync: true
    })

    var token = axios.defaults.headers.common['Authorization']

    window.inlineAttachment.editors.codemirror4.attach(simplemde.codemirror, {
      uploadUrl: '/api/upload_image',
      extraHeaders: {
        'Authorization': token
      },
      extraParams: {},
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
  },
  createBlog (store, data) {
    return new Promise((resolve, reject) => {
      axios.post('/api/blogs', {
        title: data.title,
        body: data.body
      }).then(function (response) {
        resolve(response.data)
      }).catch(function () {
        reject()
      })
    })
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
