'use strict'

const showItems = require('../templates/show-items.handlebars')
const showCompletedItems = require('../templates/show-completed-items.handlebars')
const itemsApi = require('./api')

let numberOfItems = 0
let numberOfCompleteItems = 0

const findItems = function (data) {
  numberOfItems = 0
  numberOfCompleteItems = 0
  console.log('ALL DATA', data.items)
  // numberOfItems = data.items.length
  for (let i = 0; i < data.items.length; i++) {
    if (data.items[i].active === true) {
      numberOfItems += 1
    } else if (data.items[i].active === false) {
      numberOfCompleteItems += 1
    }
  }
  console.log('COMPLETE', numberOfCompleteItems)
  console.log('ACTIVE', numberOfItems)
  hideItemButton()
  hideCompletedButton()
}

const hideItemButton = function () {
  if (numberOfItems === 0) {
    $('#show-item').hide()
  } else {
    $('#show-item').show()
  }
}

const hideCompletedButton = function () {
  if (numberOfCompleteItems === 0) {
    $('#show-completed-items').hide()
  } else {
    $('#show-completed-items').show()
  }
}

const createItemSuccess = function (data) {
  numberOfItems += 1
  hideItemButton()
  console.log('HOW MANY ITEMS???', numberOfItems)
  $('.create-item')[0].reset()
  $('.message').show()
  $('#item-message').text('Item created succesfully!')
  itemsApi.showItem(data)
    .then(checkActive)
    .catch(showItemFailure)
}

const createItemFailure = function (error) {
  $('.message').show()
  $('#item-message').text('Error Saving Item', error)
}

const showItemSuccess = (data) => {
  console.log('HERES THE FRICKEN DATA', data)
  const onShowItems = showItems({ items: data.items })
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
  numberOfItems -= 1
  hideItemButton()
  $('#item-message').text('Item deleted successfully!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
}

const deleteCompletedItemSuccess = function (data) {
  numberOfCompleteItems -= 1
  hideCompletedButton()
  $('#item-message').text('Item deleted successfully!')
  itemsApi.showItem(data)
    .then(checkState)
    .catch(showItemFailure)
}

const deleteItemFailure = function (data) {
  $('#item-message').text('Unable to delete Item')
}
//
const updateItemSuccess = function (data) {
  $('#item-message').text('Item successfully updated!')
  itemsApi.showItem(data)
    .then(showItemSuccess)
    .catch(showItemFailure)
}

const updateItemFailure = function (data) {
  $('#item-message').text('Unable to update Item')
}

const updateItemStateSuccess = function (data) {
  numberOfItems -= 1
  numberOfCompleteItems += 1
  hideCompletedButton()
  hideItemButton()
  $('#item-message').text('Completed!')
  itemsApi.showItem(data)
    .then(checkActive)
    .catch(showItemFailure)
}

const updateItemStateFailure = function (data) {
  $('#item-message').text('Unable to perform this request')
}

const showCompletedItemsSuccess = function (data) {
  const onShowItems = showCompletedItems({ items: data.completed })
  $('.display-items').empty()
  $('.display-items').append(onShowItems)
  $('#user-message').text('completed items retrieved!')
}

const checkState = function (data) {
  if (data.items.length === 0) {
    showItemSuccess(data)
  } else {
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
}

const checkActive = function (data) {
  if (data.items.length === 0) {
    showItemSuccess(data)
  } else {
    const activeItems = {
      items: []
    }
    const allItems = data.items
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].active === true) {
        activeItems.items.push(allItems[i])
      }
      showItemSuccess(activeItems)
    } console.log('ALL active ITEMS', activeItems)
  }
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
  deleteCompletedItemSuccess,
  updateItemSuccess,
  updateItemFailure,
  updateItemStateFailure,
  updateItemStateSuccess,
  showCompletedItemsSuccess,
  checkState,
  checkActive,
  findItems
}
