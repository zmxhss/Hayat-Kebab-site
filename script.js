(function () {
  // godziny: pn–pt 10–23, sob–nd 11–23
  var H = { 0: [11, 23], 1: [10, 23], 2: [10, 23], 3: [10, 23], 4: [10, 23], 5: [10, 23], 6: [11, 23] };
  var now = new Date(), d = now.getDay(), h = now.getHours() + now.getMinutes() / 60;
  var open = h >= H[d][0] && h < H[d][1];
  document.querySelectorAll('.status').forEach(function (el) {
    el.querySelector('span').textContent = open ? 'Otwarte do 23:00' : 'Teraz zamknięte, otwieramy o ' + H[d][0] + ':00';
    if (!open) el.classList.add('closed');
  });
  var row = document.querySelector('.hours [data-d="' + d + '"]');
  if (row) row.classList.add('today');
})();
