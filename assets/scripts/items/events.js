const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  data.item.active = true
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.createItemFailure)
}
//

const onShowShare = function (event) {
  event.preventDefault()
  api.showShare()
    .then(ui.checkActiveShare)
    .catch(ui.shareItemFailure)
}

const onShowItem = function (event) {
  event.preventDefault()
  api.showItem()
    .then(ui.checkActive)
    .catch(ui.showItemFailure)
}

const onShowCompletedItems = function (event) {
  event.preventDefault()
  api.showItem()
    .then(ui.checkState)
    .catch(ui.showCompletedItemsFailure)
}

//
const onDeleteItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteItem(data)
    .then(ui.deleteItemSuccess)
    .catch(ui.deleteItemFailure)
}

const onDeleteCompletedItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteItem(data)
    .then(ui.deleteCompletedItemSuccess)
    .catch(ui.deleteItemFailure)
}

const onUpdateItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.item.name !== '' && data.item.notes !== '') {
    api.updateItem(data)
      .then(ui.updateItemSuccess)
      .catch(ui.updateItemFailure)
  } else {
    $('#item-message').text('Fill out both fields')
  }
}

const onUpdateActiveState = function (event) {
  const data = getFormFields(this)
  data.item.active = false
  event.preventDefault()
  api.updateItem(data)
    .then(ui.updateItemStateSuccess)
    .catch(ui.updateItemStateFailure)
}

const addHandlers = function (event) {
  $('.create-item').on('submit', onCreateItem)
  $('#show-item').on('click', onShowItem)
  $('#show-completed-items').on('click', onShowCompletedItems)
  $('#show-share').on('click', onShowShare)
  $(document.body).on('submit', '.delete-item', onDeleteItem)
  $(document.body).on('submit', '.delete-completed-item', onDeleteCompletedItem)
  $(document.body).on('submit', '.update-item', onUpdateItem)
  $(document.body).on('submit', '.update-active-status', onUpdateActiveState)
}

module.exports = {
  addHandlers,
  onUpdateItem,
  onDeleteItem,
  onShowItem,
  onShowShare,
  onShowCompletedItems
}
