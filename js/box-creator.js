const blueNode = document.createElement('div')
blueNode.setAttribute('style', 'background-color: blue; padding: 20px; margin: 10px; color: white;')
blueNode.textContent = 'This is a blue div'
document.body.appendChild(blueNode)

if (module.hot) {
  module.hot.dispose(function() {
    blueNode.parentNode.removeChild(blueNode)
  })
}
