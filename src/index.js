/*
import MailValidator from './lib/MailValidator';
import PasswordValidator from './lib/PasswordValidator';
*/
const validate = (email, password) => {
	// const mailValidator = new MailValidator(email);
	// const passwordValidator = new PasswordValidator(password);
	return Promise.all([
		mailValidator.validate(),
		passwordValidator.validate()
	]);
}

const addErrorMessage = (type, message) => {
	let input = document.getElementById(type); // メールアドレスなら"email"、パスワードなら"password"がタイプに入る
	// let val = input.val;
	input.classList.add('is-invalid'); // input要素のクラスに`is-invalid`を追加する。
	input.insertAdjacentHTML('afterend', `<div class="invalid-feedback">${message}</div>`); //input要素の後にエラーメッセージを表示する。 
}

const onSubmit = async () => {
	let emailInput = document.getElementById('email');
	let passwordInput = document.getElementById('password');
	let emailVal = emailInput.value;
	let passwordVal = passwordInput.value;
	const results = await validate(emailVal, passwordVal);
	if (results[0].success && results[1].success) {
		// バリデーション成功
	} else if (results[0].success) {
		addErrorMessage("password", results[1].message)
	} else if (results[1].success) {
		addErrorMessage("email", res[0].message);
	}
		addErrorMessage("email", res[0].message);
		addErrorMessage("password", res[1].message);
}

{ //即時関数
	const submit = document.getElementById('submit'); // 送信ボタンの要素を指定する
	submit.addEventListener('click', onSubmit); // 送信ボタンがクリックされるとonSubmitを呼び出す。
}