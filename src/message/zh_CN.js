import { Validator } from 'vee-validate'

const dict = {
  zh_CN: {
    custom: {
      name: {
        required: '请填写用户名'
      },
      email: {
        required: '你的邮箱为空',
        email: '请输入有效的邮箱'
      },
      password: {
        required: '请填写密码',
        min: '密码不能少于6位'
      },
      password_confirmation: {
        confirmed: '请确保密码一致',
        required: '请填写密码'
      }
    }
  }
}

Validator.updateDictionary(dict)
