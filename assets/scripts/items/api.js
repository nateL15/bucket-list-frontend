const store = require('../store')
const config = require('../config')

const createItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
//
const showItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
//
const deleteItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/items/' + data.item.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createItem,
  updateItem,
  showItem,
  deleteItem
}
