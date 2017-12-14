const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onSaveNote = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.saveNote(data)
    .then(ui.saveNoteSuccess)
    .catch(ui.saveNoteFailure)
}

const onGetNote = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.getNote(data)
    .then(ui.getNoteSuccess)
    .catch(ui.getNoteFailure)
}

const onDeleteNote = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteNote(data)
    .then(ui.deleteNoteSuccess)
    .catch(ui.deleteNoteFailure)
}

const onUpdateNote = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateNote(data)
    .then(ui.updateNoteSuccess)
    .catch(ui.updateNoteFailure)
}

const clearNoteForm = function () {
  $('#save-note').trigger('reset')
  $('#get-note').trigger('reset')
  $('#delete-note').trigger('reset')
  $('#update-note').trigger('reset')
}

const hideNoteForm = function () {
  $('#update-note').hide()
  $('#get-note').hide()
  $('#delete-note').hide()
  $('#save-note').hide()
}
$(document).ready(function () {
  $('button').click(function () {
    $('#todo').append('<ul>' + $('input[name=task]').val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>")
  })
  $('body').on('click', '#todo a', function () {
    $(this).closest('ul').remove()
  })
})
hideNoteForm()

const addHandlers = function (event) {
  $('#save-note').on('submit', onSaveNote)
  $('#save-note').on('submit', clearNoteForm)
  $('#get-note').on('submit', onGetNote)
  $('#delete-note').on('submit', onDeleteNote)
  $('#delete-note').on('submit', clearNoteForm)
  $('#update-note').on('submit', onUpdateNote)
  $('#update-note').on('submit', clearNoteForm)
}

module.exports = {
  addHandlers,
  clearNoteForm,
  onUpdateNote,
  onDeleteNote,
  onGetNote
}
