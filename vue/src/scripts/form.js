
import Vue from 'vue';

new Vue({
	el: "#form",
	data: {
    username: '',
    email: '',
    comment: '',
    nameValid: true,
    emailValid: true,
    commentValid: true,
    nameError: '',
    emailError: '',
    commentError: '',
    overlayMassege: '',
    overlayHidden: true
  },
  methods: {
    validateName() {
      this.name = this.$el.querySelector('#input-username').value;
      if (this.name.length < 3) {
        this.nameValid = false;
        this.nameError = 'Слишком короткое имя';
      } else {
        this.nameValid = true;
        this.nameError = '';
      }
      return this.nameValid;
    },
    validateEmail() {
      var regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
      this.email = this.$el.querySelector('#input-email').value;
      if (this.email.length < 8) {
        this.emailValid = false;
        this.emailError = 'Короткий email';
      }else if (!regex.test(this.email)) {
        this.emailValid = false;
        this.emailError = 'Неверный email';
      } else {
        this.emailValid = true;
        this.emailError = '';
      }
      return this.emailValid;
    },
    validateComment() {
      this.comment = this.$el.querySelector('.form__block-textarea').value;
      if (this.comment.length < 20) {
        this.commentValid = false;
        this.commentError = 'Слишком короткое сообение';
      } else {
        this.commentValid = true;
        this.commentError = '';
      }
      return this.commentValid;
    },
    submitForm() {
      var nameValid = this.validateName(),
        emailValid = this.validateEmail(),
        commentValid = this.validateComment();
      if (nameValid && emailValid && commentValid) {
        var userData = {
          username: this.username,
          email: this.email,
          comment: this.comment
        }
        fetch('src/data/form.txt', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
        }).then((response) => {
          this.overlayMessage = "Сообщение отправлено!";
          this.overlayHidden = false;
          setTimeout(this.hideOverlay, 5000);
        });
      }
    },
    hideOverlay() {
      this.overlayHidden = true;
    }
  }
})