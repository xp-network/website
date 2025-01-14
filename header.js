var header = `<div class="closeablebar"><div class="closecont"><p><a href="https://pancakeswap.finance/swap?outputCurrency=0x8cf8238abf7b933bf8bb5ea2c7e4be101c11de2a" target="_blank">PancakeSwap</a> | <a href="https://www.gate.io/trade/XPNET_USDT" target="_blank">Gate.io</a> - XPNET Official BEP20 Contract Address: <a class="contract-address-header" href="https://bscscan.com/token/0x8cf8238abf7b933Bf8BB5Ea2C7E4Be101c11de2A" target="_blank">0x8cf8238abf7b933Bf8BB5Ea2C7E4Be101c11de2A</a> </p> <img onclick="this.parentNode.parentNode.remove();document.getElementById('navbbarhead').classList.remove('extrahead');Array.prototype.slice.call(document.getElementsByClassName('xtramargin'),0).forEach(n =>{n.classList.remove('xtramargin'); n.classList.remove('xtraxtramargin');n.classList.remove('xtramarginmain');n.classList.remove('xpbanerxtra')})" src="/assets/img/icons/close-t.svg" /></div> </div>`

header +='<div id="navbbarhead" class="header_container extrahead"><div class="nav_brand"><a href="/"><img src="/assets/img/icons/logo.svg" alt="LOG" class="d-logo"></a></div><a  class="language-change-style-mobile" id="myBtn1"><img src="/assets/img/lenguage-svg-glob.svg"/></a><div class="manin_menu_area"><ul class="main_menu" id="mainMenu"><li><a target="_blank" href="https://explorer.xp.network" >Explorer</a></li><li><a target="_blank" href="https://bridge.xp.network/">Bridge</a></li><li><a href="http://wiki.xp.network/" target="_blank">Wiki</a></li><li><a href="http://blog.xp.network/" target="_blank">Blog</a></li><li><a href="/ambassadorship/">Ambassadors</a></li><li><a href="/team">Team</a></li><li><a href="/xpnet" class="xp-net"><img src="/assets/img/icons/xpNet-n.svg" alt="">XPNET <span class="livenow">LIVE</span></a></li><li><a class="language-change-style" id="myBtn"><img src="/assets/img/lenguage-svg-glob.svg"/></a></li></ul><ul class="mobile_social"> <li><a href="https://t.me/xp_network"><img src="/assets/img/social/telegram.svg" alt=""></a></li><li><a href="https://www.linkedin.com/company/xp-network/"><img src="/assets/img/social/linkedin.svg" alt=""></a></li><li><a href="https://twitter.com/xpnetwork_"><img src="/assets/img/social/twiter.svg" alt=""></a></li><li><a href="https://www.reddit.com/user/XP_network/"><img src="/assets/img/social/redit.svg" alt=""></a></li></ul></div><span class="menu_triger"><img src="/assets/img/menu-bar.svg" alt="" class="manu_bar" class="manu_bar"><img class="menu-close" src="/assets/img/menu-close.svg" alt="" class="manu_bar"></span></div>'
header +='</div>';

const modals =`<div id="myModal" class="modal"> <div class="modal-content"> <span class="close"></span> <p class="select-language-header">Select language</p><div class="select-language-continuer"><a onclick="setCookie('choseLang', 'en')" href="${window.location.pathname.replace('index.html', '').replace('/cn/', '')}"><div class="language-box"><img class="space-text-language" src="/assets/img/use.svg"/> English</div></a><a onclick="setCookie('choseLang', 'cn')" href="/cn/${window.location.pathname.replace('index.html').replace('/', '').replace('/cn/', '')}"><div class="language-box"><img class="space-text-language" src="/assets/img/china.svg"/>普通话</div></a></div> </div> `


$(document).ready(function(){

	jQuery("#mainHeader").html(header);
 document.body.insertAdjacentHTML('beforeend', modals)
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it

if(!getCookie('choseLang')) {  
  var btn1 = document.getElementById("myBtn1");
  console.log(btn1)
  btn1.click()     
  document.body.style.overflowY = 'none'
} else {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
  }


  const lang = getCookie('choseLang')
  const {pathname} = window.location
  if(lang === 'cn' && !pathname.includes('/cn/')) {
    console.log(pathname)
    window.location.replace((('/cn/' + pathname).replace('//', '/')))
  } else if(lang === 'en' && pathname.includes('/cn/')) {
    console.log('hello')
    window.location.replace((pathname.replace('cn/', '').replace('//', '/')))
  }
}
});
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}