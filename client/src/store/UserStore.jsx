import { makeAutoObservable } from "mobx"; // Для работы с состояниями

class UserStore { // Глобальное состояние
	constructor() {
		// States
		this._isAuth = false // Авторизован ли пользователь
		this._user = {}
		this._isAdmin = false
		makeAutoObservable(this) // Следит за изменениями состояний
	}

	// Actions
	setIsAuth(bool) { // Для изменения состояния авторизации
		this._isAuth = bool
	}
	setUser(user) { // Для изменения пользователя
		this._user = user
	}
	setIsAdmin(bool) {
		this._isAdmin = bool
	}

	// Геттеры
	// Вызываются если переменная внутри была изменена
	get isAuth() {
		return this._isAuth
	}
	get isUser() {
		return this._user
	}
	get isAdmin() {
		return this._isAdmin
	}
}

export { UserStore }