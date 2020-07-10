import control from '../control'

export default class controlCaptcha extends control {
  static get definition() {
    return {
      i18n: {
        default: 'CAPTCHA',
      },
    }
  }

  build() {
    return {
      field: ''
    };
  }
}

control.register('captcha', controlCaptcha);
