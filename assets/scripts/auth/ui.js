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
  $('.up-in-message').text('Signed up successfully! Please sign in').show().hide(10000)
  // messageDisplay()
  clearUp()
}
// sign up fail
const signUpFailure = function (error) {
  $('.up-in-message').text('Error on sign up').show().hide(10000)
  console.log(error)
  clearUp()
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  console.log('User data is ', data)
  $('.up-in-message').text('Sign in success').show().hide(10000)
  clearIn()
}

// sign in fail
const signInFailure = function (error) {
  console.log(error)
  $('.up-in-message').text('Error on sign in').show().hide(10000)
  clearIn()
}

// change password success
const changePasswordSuccess = function () {
  clearPass()
}
// Change password fail
const changePasswordFailure = function (error) {
  console.log(error)
  clearPass()
}
// sign out success
const signOutSuccess = function () {
  store.user = null
}

// sign out fail
const signOutFailure = function (error) {
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
