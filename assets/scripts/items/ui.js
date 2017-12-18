'use strict'

const showItems = require('../templates/show-items.handlebars')
const showCompletedItems = require('../templates/show-completed-items.handlebars')

const createItemSuccess = function (data) {
  console.log(data)
  $('#message').text('Item created succesfully!')
  $('#create-item')[0].reset()
  $('.message').show()
  $('#user-message').text('Item created succesfully!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
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

const updateItemStateSuccess = function (data) {
  $('#message').text('Completed!')
}

const updateItemStateFailure = function (data) {
  $('#message').text('Unable to perform this request')
}

const showCompletedItemsSuccess = function (data) {
  const onShowItems = showCompletedItems({ items: data.completed })
  $('.display-items').empty()
  $('.display-items').append(onShowItems)
  $('#message').text('items retrieved succesfully!')
}

const checkState = function (data) {
  const completedItems = {
    completed: []
  }
  const allItems = data.items
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].active === false) {
      completedItems.completed.push(allItems[i])
    }
    showCompletedItemsSuccess(completedItems)
  } console.log('ALL COMPLETED ITEMS', completedItems)
}

module.exports = {
  createItemSuccess,
  createItemFailure,
  showItemSuccess,
  showItemFailure,
  showItems,
  showCompletedItems,
  deleteItemSuccess,
  deleteItemFailure,
  updateItemSuccess,
  updateItemFailure,
  updateItemStateFailure,
  updateItemStateSuccess,
  showCompletedItemsSuccess,
  checkState
}
