import templateStr from './OptionsPopup.hbs';
import { Block } from '@/libs/block';

export class OptionsPopup extends Block {
  constructor(props: SimpleObject) {
    super('div', ['chat-popup', 'hidden'], props);
  }

  render(): string {
    return templateStr(this.props);
  }

  mounted(): void {
    this.initActions();
  }

  updated(): void {
    this.initActions();
  }

  initActions(): void {
    const formElement = this._element.querySelector('form');
    const selectElement = this._element.querySelector('select');

    if (formElement && selectElement) {
      formElement.addEventListener('submit', event => {
        event.preventDefault();

        if (!event.target
          || !(event.target instanceof HTMLElement) || !event.target.dataset.actionType) return;

        const actionType = event.target.dataset.actionType;
        const input = selectElement.value;

        if (!input) {
          const invalidElem = this._element.querySelector('.chat-input__invalid');
          if (invalidElem && invalidElem instanceof HTMLElement) {
            invalidElem.hidden = false;
          }

          return;
        }

        this.submit(actionType, input);

        this._element.classList.add('hidden');
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  submit(_actionType: string, _input: string): void {}

  show(props?: SimpleObject): void {
    if (props) {
      this.setProps(props);
    }

    this._element.classList.remove('hidden');
  }

  hide(target?: EventTarget): void {
    if (target && (target instanceof HTMLElement) && !target.closest('.chat-popup__box')) {
      this._element.classList.add('hidden');
    }
  }
}
