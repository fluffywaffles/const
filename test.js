// Let's be real, a testing framework would be overkill here.
var Thunk = require('.')

console.log(

  [

    Thunk (
      'A'
    )() == 'A',

    Thunk (
      {
        a: 'a'
      }
    )().a == 'a',

    Thunk (
      function (hello) {
        return 'world'
      }
    )()() == 'world',

  ].every(function (test) {

    return test === true

  })

  ? 'Tests pass'
  : 'How the hell did you fuck this up, it was like 5 lines'

)
