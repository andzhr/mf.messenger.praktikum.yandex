export default `
<div class="chat-profile">
  <div class="chat-profile__container tile-block">
    <div class="chat-profile__header">
      <div class="chat-profile__avatar chat-avatar">
        <div class="chat-profile__avatar-img chat-avatar__img">
          {{#if data.avatar}}
          <img src="https://ya-praktikum.tech{{ data.avatar }}" alt="avatar">
          {{else}}
          <span>М</span>
          {{/if}}
          {{#if state.showInfo}}
          <button id="avatar-btn" class="chat-profile__avatar-btn">Поменять  аватар</button>
          {{/if}}
        </div>
        <div class="chat-profile__avatar-name chat-avatar__name">{{ data.first_name }} {{ data.second_name }}</div>
      </div>

      <div>
        <a class="chat-link" href="#" data-link="/">назад к чатам</a>
      </div>
    </div>

    {{#if state.showInfo}}
    <form class="chat-form">

      <div class="chat-form__column">
        <div class="chat-input">
          <label class="chat-input__label">Имя</label>
          <input class="chat-input__input" type="text" name="first_name" disabled value="{{ data.first_name }}">
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Почта</label>
          <input class="chat-input__input" type="text" name="email" disabled value="{{ data.email }}">
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Логин</label>
          <input class="chat-input__input" type="text" name="login" disabled value="{{ data.login }}">
        </div>
      </div>

      <div class="chat-form__column">
        <div class="chat-input">
          <label class="chat-input__label">Фамилия</label>
          <input class="chat-input__input" type="text" name="second_name" disabled value="{{ data.second_name }}">
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Телефон</label>
          <input class="chat-input__input" type="text" name="phone" disabled value="{{ data.phone }}">
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Имя в чате</label>
          <input class="chat-input__input" type="text" name="display_name" disabled value="{{ data.display_name }}">
        </div>
      </div>

    </form>

    <div id="profile-btn" class="chat-profile__btn-container">
      <div class="chat-profile__btn-column">
        <div class="chat-form__btn" data-component="change-info-btn"></div>
        <div class="chat-form__btn" data-component="exit-btn"></div>
      </div>
      <div class="chat-profile__btn-column">
        <div class="chat-form__btn" data-component="change-password-btn"></div>
      </div>
    </div>
    {{/if}}

    {{#if state.changeData}}
    <form id="profile-form" class="chat-form">

      <div class="chat-form__column">
        <div class="chat-input">
          <label class="chat-input__label">Имя</label>
          <input class="chat-input__input" type="text" name="first_name" value="{{ data.first_name }}">
          <div class="chat-input__invalid hidden" data-input-name="first_name">Укажите имя</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Почта</label>
          <input class="chat-input__input" type="text" name="email" value="{{ data.email }}">
          <div class="chat-input__invalid hidden" data-input-name="email">Укажите почту</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Логин</label>
          <input class="chat-input__input" type="text" name="login" value="{{ data.login }}">
          <div class="chat-input__invalid hidden" data-input-name="login">Укажите логин</div>
        </div>
        <div data-component="save-btn" class="chat-form__btn"></div>
      </div>

      <div class="chat-form__column">
        <div class="chat-input">
          <label class="chat-input__label">Фамилия</label>
          <input class="chat-input__input" type="text" name="second_name" value="{{ data.second_name }}">
          <div class="chat-input__invalid hidden" data-input-name="second_name">Укажите фамилию</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Телефон</label>
          <input class="chat-input__input" type="text" name="phone" value="{{ data.phone }}">
          <div class="chat-input__invalid hidden" data-input-name="phone">Укажите телефон</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Имя в чате</label>
          <input class="chat-input__input" type="text" name="display_name" value="{{ data.display_name }}">
          <div class="chat-input__invalid hidden" data-input-name="display_name">Укажите отображаемое имя</div>
        </div>
      </div>

    </form>
    {{/if}}

    {{#if state.changePassword}}
    <form id="password-form" class="chat-form">
      <div class="chat-form__column">
        <div class="chat-input">
          <label class="chat-input__label">Старый пароль</label>
          <input class="chat-input__input" type="password" name="old_password">
          <div class="chat-input__invalid hidden" data-input-name="old_password">Укажите старый пароль</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Новый парольь</label>
          <input class="chat-input__input" type="password" name="new_password">
          <div class="chat-input__invalid hidden" data-input-name="new_password">Укажите новый пароль</div>
        </div>
        <div class="chat-input">
          <label class="chat-input__label">Новый пароль (ещё раз)</label>
          <input class="chat-input__input" type="password" name="new_password_confirm">
          <div class="chat-input__invalid hidden" data-input-name="new_password_confirm">Укажите новый пароль, ещё раз</div>
        </div>
        <div data-component="save-btn" class="chat-form__btn"></div>
      </div>
    </form>
    {{/if}}

  </div>
</div>
`;
