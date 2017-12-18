const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateItem = function (event) {
  // if ($('#create-item').val('') !== 0 && $('#create-note').val('') !== 0) {
  //   $('.message').show()
  //   $('#user-message').text('Item created!')
  // } else {
  //   $('.message').show()
  //   $('#user-message').text('Please fill both forms')
  // }
  const data = getFormFields(this)
  event.preventDefault()
  data.item.active = true
  api.createItem(data)
    .then(ui.createItemSuccess)
    .catch(ui.createItemFailure)
}
//
const onShowItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.showItem(data)
    .then(ui.checkActive)
    .catch(ui.showItemFailure)
}

const onShowCompletedItems = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.showItem(data)
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
  api.updateItem(data)
    .then(ui.updateItemSuccess)
    .catch(ui.updateItemFailure)
}

const onUpdateActiveState = function (event) {
  const data = getFormFields(this)
  data.item.active = false
  console.log(data)
  event.preventDefault()
  api.updateItem(data)
    .then(ui.updateItemStateSuccess)
    .catch(ui.updateItemStateFailure)
}

// const clearItemForm = function () {
//   $('#save-Item').trigger('reset')
//   $('#get-Item').trigger('reset')
//   $('#delete-Item').trigger('reset')
//   $('#update-Item').trigger('reset')
// }
//
// const hideItemForm = function () {
//   $('#update-Item').hide()
//   $('#get-Item').hide()
//   $('#delete-Item').hide()
//   $('#save-Item').hide()
// }
// $(document).ready(function () {
//   $('button').click(function () {
//     $('#todo').append('<ul>' + $('input[name=item[name]]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>")
//   })
//   $('body').on('click', '#todo a', function () {
//     $(this).closest('ul').remove()
//   })
// })
// hideItemForm()

const addHandlers = function (event) {
  $('#create-item').on('submit', onCreateItem)
  // $('#save-Item').on('submit', clearItemForm)
  $('#show-item').on('click', onShowItem)
  $('#show-completed-items').on('click', onShowCompletedItems)
  $(document.body).on('submit', '.delete-item', onDeleteItem)
  $(document.body).on('submit', '.delete-completed-item', onDeleteCompletedItem)
  // $('#delete-Item').on('submit', clearItemForm)
  $(document.body).on('submit', '.update-item', onUpdateItem)
  $(document.body).on('submit', '#update-active-status', onUpdateActiveState)
  // $('#update-Item').on('submit', clearItemForm)
}

module.exports = {
  addHandlers,
  // clearItemForm,
  onUpdateItem,
  onDeleteItem,
  onShowItem,
  onShowCompletedItems
}
