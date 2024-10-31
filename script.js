function loadQueueNumber() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      document.getElementById('currentQueue').innerHTML = data.current;
      var previousList = '';
      for (var i = 0; i < data.previous.length; i++) {
        previousList += '<li>Queue: ' + data.previous[i] + '</li>';
      }
      document.getElementById('previousQueues').innerHTML = previousList;
    }
  };
  xhr.open('GET', '/queue', true);
  xhr.send();
}

// Kemas kini nombor giliran setiap 2 saat
setInterval(loadQueueNumber, 2000);
