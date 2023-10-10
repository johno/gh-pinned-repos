'use strict'

const isBlank = require('is-blank')
const got = require('got')
const cheerio = require('cheerio')

module.exports = function ghPinnedRepos(username) {
  if (isBlank(username) || typeof username !== 'string') {
    throw new TypeError('gh-pinned-repos expected a string')
  }

  return got(`https://github.com/${username}`)
    .then(res => res.body)
    .then(cheerio.load)
    .then(cash => cash('.js-pinned-item-list-item.public'))
    .then(repos => repos.map(getHref).get())
}

const getHref = (_, link) => cheerio.load(link)('a').attr('href').replace(/^\//, '')
