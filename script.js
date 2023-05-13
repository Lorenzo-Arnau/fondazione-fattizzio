




function copyToSend() {

  var copyText = window.location.href;
  navigator.clipboard.writeText(copyText);
  var modal = document.getElementsByClassName('fake-modal')[0]
  modal.classList.remove('invisible')
  modal.classList.add('visible')
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}
function openTextArea(){
  var modal = document.getElementsByClassName('send-text')[0]
  modal.classList.remove('invisible')
  modal.classList.add('visible')
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('invisible')
  overlay.classList.add('visible')
}
function closeModal(){
 var overlay = document.getElementsByClassName('overlay-modal')[0]
  overlay.classList.remove('visible')
  overlay.classList.add('invisible')
  var modal = document.getElementsByClassName('fake-modal')[0]
  modal.classList.remove('visible')
  modal.classList.add('invisible');
}
function sendMessage(){
   var textarea = document.getElementsByClassName('text-area-message')[0]
   console.log(textarea.value);
    var modal = document.getElementsByClassName('send-text')[0]
    modal.classList.remove('visible')
    modal.classList.add('invisible')
    var overlay = document.getElementsByClassName('overlay-modal')[0]
    overlay.classList.remove('visible')
    overlay.classList.add('invisible')
}