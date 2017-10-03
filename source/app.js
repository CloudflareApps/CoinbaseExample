(function () {
  'use strict'

  var options = INSTALL_OPTIONS
  var element

  function updateElement () {
    element = INSTALL.createElement(options.location, element)

    element.setAttribute('app', 'coinbase-wallet-display')

    if (options.bitcoinBalance) {
      element.innerText = 'BTC: ' + options.bitcoinBalance
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateElement)
  } else {
    updateElement()
  }
}())
