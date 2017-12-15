'use strict'

// const showItems = require('../templates/show-Items.handlebars')

const createItemSuccess = function (data) {
  console.log(data)
  $('#message').text('Champion Item created succesfully!')
}

const createItemFailure = function (error) {
  $('#message').text('Error Saving Item', error)
}

const showItemSuccess = (data) => {
  // const onShowItems = showItems({ Items: data.Items })
  // $('.display-Items').empty()
  // $('.display-Items').append(onShowItems)
  // $('#message').text('Items retrieved succesfully!')
  console.log(data)
}

const showItemFailure = function (data) {
  $('#message').text('Failed to get Items')
}
//
// const deleteItemSuccess = function (data) {
//   $('#message').text('Item deleted successfully!')
// }
//
// const deleteItemFailure = function (data) {
//   $('#message').text('Unable to delete Item')
// }
//
// const updateItemSuccess = function (data) {
//   $('#message').text('Item succesfully updated!')
// }
//
// const updateItemFailure = function (data) {
//   $('#message').text('Unable to update Item')
// }

module.exports = {
  createItemSuccess,
  createItemFailure,
  showItemSuccess,
  showItemFailure
  // showItems,
  // deleteItemSuccess,
  // deleteItemFailure,
  // updateItemSuccess,
  // updateItemFailure
}
