'use strict'

const showItems = require('../templates/show-items.handlebars')

const createItemSuccess = function (data) {
  console.log(data)
  $('#message').text('Champion Item created succesfully!')
}

const createItemFailure = function (error) {
  $('#message').text('Error Saving Item', error)
}

const showItemSuccess = (data) => {
  console.log('HERES THE FRICKEN DATA', data)
  const onShowItems = showItems({ items: data.items })
  $('.display-items').empty()
  $('.display-items').append(onShowItems)
  $('#message').text('items retrieved succesfully!')
  console.log(data)
}

const showItemFailure = function (data) {
  $('#message').text('Failed to get Items')
}
//
const deleteItemSuccess = function (data) {
  $('#message').text('Item deleted successfully!')
}

const deleteItemFailure = function (data) {
  $('#message').text('Unable to delete Item')
}
//
const updateItemSuccess = function (data) {
  $('#message').text('Item succesfully updated!')
}

const updateItemFailure = function (data) {
  $('#message').text('Unable to update Item')
}

module.exports = {
  createItemSuccess,
  createItemFailure,
  showItemSuccess,
  showItemFailure,
  // showItems,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure
}
