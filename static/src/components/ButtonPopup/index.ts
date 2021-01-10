import templateStr from './ButtonPopup.js';
import { Block } from './../../libs/block.js';

export class ButtonPopup extends Block {
  constructor(props: object) {
    super('div', ['chat-popup', 'hidden'], props);
  }

  render() {
    // @ts-ignore
    let template = Handlebars.compile(templateStr);
    return template(this.props);
  }

  mounted() {
    this.initActions();
  }

  updated() {
    this.initActions();
  }

  initActions() {
    const сancelBtn = this._element.querySelector('[data-btn-type=сancel]');
    const submitBtn = this._element.querySelector('[data-btn-type=submit]');

    if (сancelBtn && submitBtn) {
      сancelBtn.addEventListener('click', () => {
        this._element.classList.add('hidden');
      });

      submitBtn.addEventListener('click', () => {
        this.submit(submitBtn.dataset.actionType);

        this._element.classList.add('hidden');
      });
    }
  }

  submit(action: string) {}

  show(props?: object) {
    if (props) {
      this.setProps(props);
    }

    this._element.classList.remove('hidden');
  }

  hide(target?: EventTarget): void {
    if (target && target instanceof Element && !target.closest('.chat-popup__box')) {
      this._element.classList.add('hidden');
    }
  }
}
