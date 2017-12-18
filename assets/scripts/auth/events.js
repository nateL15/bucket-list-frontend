'use strict'

const authUi = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)
const authApi = require('./api')

// default page
$('.change-out').hide()
$('.todo').hide()

// on sign up
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

// on sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

// on change password
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

// on sign out
const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

// event handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
