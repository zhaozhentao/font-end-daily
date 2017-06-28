<template>
  <div class="col-md-8 col-md-offset-2">
    <form action="" accept-charset="UTF-8" id="topic_create_form" method="POST">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="写一篇日志" name="title" required="required" value="">
      </div>

      <div class="form-group">
        <textarea
          required="require" class="form-control" rows="20" style="overflow:hidden" id="reply_content"
          placeholder="支持markdown" name="body" cols="50">
        </textarea>
      </div>

      <div class="form-group status-post-submit">
        <input class="btn btn-primary" id="topic-submit" type="submit" value="发布咯">
      </div>
    </form>
  </div>
</template>

<script>
  import SimpleMDE from '../../../public/assets/js/editor'

  export default {
    mounted () {
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../../public/assets/css/editor.css";

  .btn-primary:hover {
    color: #fff;
    background-color: #00c4bc;
    border-color: #00c4bc;
  }

  .btn-primary {
    color: #fff;
    background-color: #00b5ad;
    border-color: #00b5ad;
  }
</style>
