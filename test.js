import test from 'ava'
import ghPinnedRepos from './'

test('gh-pinned-repos does something awesome', t => {
  t.plan(1)

  t.true(ghPinnedRepos())
})
