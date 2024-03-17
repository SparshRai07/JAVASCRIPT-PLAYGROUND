const insert = document.getElementById('insert')

window.addEventListener('keydown', (event ) => {
   insert.innerHTML = `


<div class="key">
  ${event.key === '' ? 'Space' : e.key}
   <small>event.Keycode</small>
</div>

<div class="key">
   ${event.keyCode}
   <small>event.code</small>
</div>

<div class="key">
   ${event.code}
</div>
</div>
`

})