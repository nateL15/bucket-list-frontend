'use strict'

const store = require('../store')
const itemsApi = require('../items/api')
const itemsUi = require('../items/ui')

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
  $('.message').show()
  $('#user-message').text('Signed up successfully! Please sign in')
  $('.sign-up').hide()
  clearUp()
}
// sign up fail
const signUpFailure = function (error) {
  $('.message').show()
  $('#user-message').text('Error on sign up')
  console.log(error)
  clearUp()
}

// sign in success
const signInSuccess = function (data) {
  store.user = data.user
  console.log('User data is ', data)
  $('.message').show()
  $('#item-message').text('Sign in success').show()
  $('.change-out').show()
  $('.sign-up-in').hide()
  $('.title').hide()
  $('.todo').show()
  itemsApi.showItem()
    .then(itemsUi.showItemSuccess)
    .catch(itemsUi.showItemFailure)
  clearIn()
  itemsApi.showItem()
    .then(itemsUi.findItems)
}

// sign in fail
const signInFailure = function (error) {
  console.log(error)
  $('.message').show()
  $('#user-message').text('Error on sign in')
  clearIn()
}

// change password success
const changePasswordSuccess = function () {
  $('.message').show()
  $('#user-message').text('Password changed')
  clearPass()
}
// Change password fail
const changePasswordFailure = function (error) {
  console.log(error)
  $('.message').show()
  $('#user-message').text('Password Change Failiure')
  clearPass()
}
// sign out success
const signOutSuccess = function () {
  store.user = null
  $('.message').show()
  $('#user-message').text('Signed out! Sign in to create list!')
  $('.change-out').hide()
  $('.todo').hide()
  $('.display-items').hide()
  $('.sign-up-in').show()
  $('#item-message').hide()
}

// sign out fail
const signOutFailure = function (error) {
  $('.message').show()
  $('#user-message').text('Still here')
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
