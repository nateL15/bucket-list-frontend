'use strict'

const showItemsTemplate = require('../templates/show-items.handlebars')
const itemsApi = require('./api')

const createItemSuccess = function (data) {
  console.log(data)
<<<<<<< HEAD
  $('#message').text('Item created succesfully!')
  $('#create-item')[0].reset()
  $('#create-item')[0].reset()
=======
  $('.message').show()
  $('#user-message').text('Item created succesfully!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
>>>>>>> 18ce921... Update items after update, delete, and create
}

const createItemFailure = function (error) {
  $('.message').show()
  $('#user-message').text('Error Saving Item', error)
}

const showItemSuccess = (data) => {
  console.log('HERES THE FRICKEN DATA', data)
  const onShowItems = showItemsTemplate({ items: data.items })
  if (data.items.length !== 0) {
    $('.message').show()
    $('#user-message').text('Items retrieved successfully!')
  } else {
    $('.message').show()
    $('#user-message').text('Create an item!')
  }
  $('.display-items').empty()
  $('.display-items').append(onShowItems)

  console.log(data)
}

const showItemFailure = function (data) {
  $('.message').show()
  $('#user-message').text('Failed to get Items')
}
//
const deleteItemSuccess = function (data) {
  $('.message').show()
  $('#user-message').text('Item deleted successfully!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
}

const deleteItemFailure = function (data) {
  $('.message').show()
  $('#user-message').text('Unable to delete Item')
}
//
const updateItemSuccess = function (data) {
  $('.message').show()
  $('#user-message').text('Item succesfully updated!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
}

const updateItemFailure = function (data) {
  $('.message').show()
  $('#user-message').text('Unable to update Item')
}

module.exports = {
  createItemSuccess,
  createItemFailure,
  showItemSuccess,
  showItemFailure,
  showItems,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure
}
