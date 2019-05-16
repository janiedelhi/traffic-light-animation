let signalStatus = document.querySelector('.signal-status');

let t1 = anime.timeline({
  targets: '.signal-light',
  loop: true,
  delay: anime.stagger(1000)
})

t1.add({
  translateY: 0,
  background: '#aa344c',
  changeBegin: function (anim) {
    signalStatus.innerHTML = 'Ready';
  }
})
  .add({
    translateY: 80, 
    background: '#d2bd54', 
    changeBegin: function(anim) {
      signalStatus.innerHTML = 'Set'
    }
  })
  .add({
    translateY: 160, 
    background: '#249a47', 
    changeBegin: function(anim) {
      signalStatus.innerHTML = 'GO!'
    }
  });