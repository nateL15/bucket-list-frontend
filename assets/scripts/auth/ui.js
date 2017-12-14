'use strict'

const store = require('../store')

// clear forms function for sign up
const clearUp = function () {
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
  $('#sign-up-password-confirmation').val('')
}
// clear forms function for sign in
const clearIn = function () {
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}
// clear forms function for change password
const clearPass = function () {
  $('#new-password').val('')
  $('#old-password').val('')
}

// const messageDisplay = function () {
//   this.show().hide(10000)
// }

// sign up  success
const signUpSuccess = function (data) {
  console.log('sign up success data is ', data)
  $('.auth-message').text('Signed up successfully! Please sign in').show().hide(10000)
  $('.sign-up').hide()
  clearUp()
}
// sign up fail
const signUpFailure = function (error) {
  $('.auth-message').text('Error on sign up').show().hide(10000)
  console.log(error)
  clearUp()
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  console.log('User data is ', data)
  $('.auth-message').text('Sign in success').show().hide(10000)
  $('.change-out').show()
  $('.sign-up-in').hide()
  clearIn()
}

// sign in fail
const signInFailure = function (error) {
  console.log(error)
  $('.auth-message').text('Error on sign in').show().hide(10000)
  clearIn()
}

// change password success
const changePasswordSuccess = function () {
  $('.auth-message').text('Password changed').show().hide(10000)
  clearPass()
}
// Change password fail
const changePasswordFailure = function (error) {
  console.log(error)
  $('.auth-message').text('Password changed').show().hide(10000)
  clearPass()
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('.auth-message').text('Signed out').show().hide(10000)
  $('.change-out').hide()
}

// sign out fail
const signOutFailure = function (error) {
  $('.auth-message').text('Still here').show().hide(10000)
  console.log(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
