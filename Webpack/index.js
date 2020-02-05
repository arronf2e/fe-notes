var app = document.getElementById('app')

var header = document.createElement('header')

header.innerText = 'here is header'

var footer = document.createElement('footer')

footer.innerText = 'here is footer'

app.appendChild(header, footer)