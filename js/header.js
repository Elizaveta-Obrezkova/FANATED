async function setHeader() {
  let auth = await checkAuth();
  const res = auth[0];

  let multiLangDisplay = "", langIcon = "gb.png", langText = "EN", headerBurgerDisplay = "", headerMenuIndex = "";

  if (multiLangFlag) {
    if (Cookies.get('lang') === "ru") {
      langIcon = "ru.png"
      langText = "RU"
    }
  } else {
    multiLangDisplay = "display: none";
  }
  let authBoolean = ''
  if(res){
    authBoolean = 'display: block!important'
  } else{
     authBoolean = 'display: none!important'
  }


  let headerButton = `
<div class="header-bot">

     
<div class="dropdown1 " style="${multiLangDisplay}">
    <div class="select">
        <span class="option-lang"><img src="./img/icons/${langIcon}" width="32px"/>${langText}</span>
    </div>

    <input type="hidden" name="gender" value="ru">

    <ul class="dropdown-menu1">
      <li id="en" class="option-lang"><img src="./img/icons/gb.png" width="32px"/>EN</li>
      <li id="ru" class="option-lang"><img src="./img/icons/ru.png" width="32px"/>RU</li>
    </ul>
</div>  

                         <a href="sign_in.html" class="hidden-768px" style="text-decoration: none;"><button
                            class="btn btn-warning btn-sign btn-warning-sign w200 hidden-768px  header-btn" >${t.header.sign_in}
                            </button>
                        </a>
                        
                        <div class="mobile-header-bot show-768px ds-flex-column-768-show">
                            <a href="sign_in.html"><button
                            class="btn btn-warning btn-sign btn-warning-sign w200 header-btn">${t.header.sign_in}</button></a>
                            <a href="registration.html"><button
                            class="btn btn-warning w200 btn-reg header-btn" >${t.header.register}</button></a>
                        </div>

                      
  
</div>
`;

let headerLang = `
<div style="${multiLangDisplay}">
<div class="dropdown3 dropdown-prim ${authBoolean == 'display: none!important' ? "hidden-768px" : ''}">
    <div class="select">
        <span class="option-lang"><img src="./img/icons/${langIcon}" width="32px"/>${langText}</span>
    </div>

    <input type="hidden" name="gender" value="ru">

    <ul class="dropdown-menu3 dropdown-menu-prim">
      <li id="en" class="option-lang"><img src="./img/icons/gb.png" width="32px"/>EN</li>
      <li id="ru" class="option-lang"><img src="./img/icons/ru.png" width="32px"/>RU</li>
    </ul>
</div>
</div>  
`

  if (res) {
    let userId = auth[1].id,
      userImg = getUserImg(auth[1].img_url);
      authBoolean = 'display: flex!important'
    headerBurgerDisplay = "display: none";
    headerMenuIndex = "2";
    headerButton = `
                    <nav>
                    <div style="display:flex;align-items:center">
                    <div style="${multiLangDisplay}">
                      <div class="dropdown2 dropdown-prim hidden-768px" id="dropdown2">
                          <div class="select">
                              <span class="option-lang"><img src="./img/icons/${langIcon}" width="32px"/>${langText}</span>
                          </div>
          
                          <input type="hidden" name="gender" value="ru">
          
                          <ul class=" dropdown-menu-prim dropdown-absolute" id="dropdown-menu2">
                            <li id="en" class="option-lang"><img src="./img/icons/gb.png" width="32px"/>EN</li>
                            <li id="ru" class="option-lang"><img src="./img/icons/ru.png" width="32px"/>RU</li>
                          </ul>
                      </div>
                      </div>

                        <div class="header__list  hidden-768px">
                          <ul class="navbar-nav  mb-2 mb-lg-0">
                              <div class="flex-shrink-0 dropdown">
                                  <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle"
                                      id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                      <img src="${userImg}" alt="mdo" width="76" height="76"
                                          class="rounded-circle">
                                  </a>
                                  <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
                                      <li><a class="dropdown-item" href="lk.html">${t.header.profile}</a></li>
                                      <li><a class="dropdown-item" href="lk_edit.html">${t.header.edit_profile}</a></li>
                                      <li>
                                          <hr class="dropdown-divider">
                                      </li>
                                      <li><a class="dropdown-item" href="#" onclick="logoutClick();return false;">${t.header.sign_out}</a></li>
                                  </ul>
                              </div>
                              
                          </ul>
                        </div>

                      
                    </div>
                  
                </nav>
`;
  }
  console.log("123");
  console.log(res);

  let headerText1 = `
<div class="wrapper">
<header class="header">
    <div class="container" style="max-width:100%!important">
        <div class="header__body">

            <div style="display:flex">
                <a href="/" class="header-logo" style="display:flex;align-items:cet">
                    <img src="img/logo2.svg" alt="" class="header-img" style="margin-right:16px">
                </a>

                
               

                <div class="form form-pc">
                    <div id="myDropdown" class="dropdown-content">
                        <svg class="header-ico fa fa-search" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.031 19.455C14.4492 19.455 18.0308 15.8015 18.0308 11.2946C18.0308 6.78779 14.4492 3.13428 10.031 3.13428C5.61288 3.13428 2.03125 6.78779 2.03125 11.2946C2.03125 15.8015 5.61288 19.455 10.031 19.455Z" stroke="#FDD446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.0296 21.4933L15.6797 17.0562" stroke="#FDD446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input type="text" placeholder="${t.common.search_points}" class="form-control1 form-input1 w_100" id="myInput"
                        onkeyup="filterFunction()">
                    <div id="addBlock">
                        <div class="del">
                        

                            <a href="vk.com" onclick="alert(1)">
                                <div class="block-inpS" >
                                    <div style="display:flex; align-items:center">
                                        <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                        <a class="inpS-name"></a>
                                    </div>
                                </div>
                            </a>

                            <a href="vk.com">
                                <div class="block-inpS" >
                                    <div style="display:flex; align-items:center">
                                        <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                        <a class="inpS-name"></a>
                                    </div>
                                </div>
                            </a>

                            <a href="vk.com">
                                <div class="block-inpS" >
                                    <div style="display:flex; align-items:center">
                                        <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                        <a class="inpS-name"></a>
                                    </div>
                                </div>
                            </a>
             


                        


                        </div>
                    </div>

                </div>
                    </div>
                    
            </div>

    
          
            <nav class="header__menu">
                <div class="header__list">
                    <div class="form-header" style="${authBoolean}">
                              <div class="form form-mobile" style="display: none"> 
                                  <div id="myDropdown1" class="dropdown-content1" style="left:-33px">
                                          <i class="header-ico fa fa-search" style="top:10px!important"></i> <input type="text" placeholder="${t.common.search_points}" class="form-control1 form-input1 w_100" id="myInput1"
                                          onkeyup="filterFunction1()">
                                      <div id="addBlock">
                                          <div class="del1">                                         
                                              <div class="block-inpS">
                                                  <div style="display:flex; align-items:center">
                                                      <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                      <a class="inpS-name"></a>
                                                  </div>
                                              </div>
                                              <div class="block-inpS">
                                                  <div style="display:flex; align-items:center">
                                                      <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                      <a class="inpS-name"></a>
                                                  </div>
                                              </div>
                                              <div class="block-inpS">
                                                  <div style="display:flex; align-items:center">
                                                      <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                      <a class="inpS-name"></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>                            
                          </div>                     
                    </div>

                    <div class="show-768px ${authBoolean == 'display: flex!important' ? "ds-flex-column-768-show" : ''}" >
                    
                        <div class="header-dropdown-box">
                          <li><a class="header-dropdown-item" href="lk.html">${t.header.profile}</a></li>
                          <li><a class="header-dropdown-item" href="lk_edit.html">${t.header.edit_profile}</a></li>
                          <li>
                              <hr class="dropdown-divider">
                          </li>
                          <li style="display:flex;align-items:center"><a class="header-dropdown-item" href="#" onclick="logoutClick();return false;" style="margin-right:5px;margin-bottom:0px">${t.header.sign_out}</a>    <img src="./img/icons/sign-out.png" style="width: 17px;
                          height: 17.59px;"/></li>
                        </div>

                      ${headerLang}

                    </div>
                   
                </div>
`;

  let headerText2 = `    
                </div>
                
            </nav>
   
            <div class="header__burger header__burger1" style="">
                    <span></span>
                </div>
        </div>
    </div>
</header>
</div>


`;

/*  <nav class="header__menu${headerMenuIndex}">
                <div class="header__list">
                    <div class="form-header">

                        <div class="form form-mobile" style="display: none"> 
                     
                                <div id="myDropdown1" class="dropdown-content1" style="left:-33px">
                                        <i class="header-ico fa fa-search" style="top:10px!important"></i> <input type="text" placeholder="${t.common.search_points}" class="form-control1 form-input1 w_100" id="myInput1"
                                        onkeyup="filterFunction1()">
                                    <div id="addBlock">
                                        <div class="del1">
                                        
                                            <div class="block-inpS">
                                                <div style="display:flex; align-items:center">
                                                    <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                    <a class="inpS-name"></a>
                                                </div>
                                            </div>
                                            <div class="block-inpS">
                                                <div style="display:flex; align-items:center">
                                                    <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                    <a class="inpS-name"></a>
                                                </div>
                                            </div>
                                            <div class="block-inpS">
                                                <div style="display:flex; align-items:center">
                                                    <img src="/filestorage/ivleeva_logo_1.jpeg" alt="" class="inpS-img">
                                                    <a class="inpS-name"></a>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                          
                        </div>
                        
                    
                        
                    </div>
`;

  let headerText2 = `    
                </div>
            </nav>
        </div>
    </div>
</header>
</div> */

  console.log(authBoolean)
  let headerText = headerText1 + headerButton + headerText2;

  let header = document.createElement("div");
  header.classList.add("header-container");
  header.innerHTML = headerText;

  document.body.insertAdjacentElement("afterbegin", header);
}

setHeader().then((res) => {});

function logoutClick() {
  authLogout();
  location.href = site;
}

function myFunction1(x) {
  if (x.matches) {
    // If media query matches

    function filterFunction1() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput1");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown1");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }

    document.querySelector("#myInput1").onfocus = function () {
      /*             document.querySelector('.parent-inpS').style.borderRadius = '10px'
                        document.querySelector('.blocks-inpS').style.display = 'block' */
      /*  document.querySelector('#myInput').style.border = 'none!important' */
      document.querySelector(".del1").style.display = "block";

      document.querySelector(".dropdown-content1").style.border =
        "1px solid rgba(0, 0, 0, 0.5)";
    };
    document.querySelector("#myInput1").onblur = function () {
      /*        document.querySelector('.parent-inpS').style.borderRadius = '55px' */
      /*   document.querySelector('.del').style.display = 'block' */
      document.querySelector(".del1").style.display = "none";
      /*   document.getElementById('myDropdown1').style.bottom = '20px' */
      document.querySelector(".dropdown-content1").style.border = "0";
    };
  } else {
    document.querySelector("#myInput").onfocus = function () {
      /*             document.querySelector('.parent-inpS').style.borderRadius = '10px'
                        document.querySelector('.blocks-inpS').style.display = 'block' */
      /*  document.querySelector('#myInput').style.border = 'none!important' */
      document.querySelector(".del").style.display = "block";
      document.getElementById("myDropdown").style.bottom = "-124px";
      document.querySelector(".dropdown-content").style.border =
        "1px solid rgba(0, 0, 0, 0.5)";
    };
    document.querySelector("#myInput").onblur = function () {
      /*        document.querySelector('.parent-inpS').style.borderRadius = '55px' */
      /*   document.querySelector('.del').style.display = 'block' */
      document.querySelector(".del").style.display = "none";
      document.getElementById("myDropdown").style.bottom = "15px";
      document.querySelector(".dropdown-content").style.border = "0";
    };

    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }
  }
}

var x = window.matchMedia("(max-width: 770px)");
myFunction1(x); // Call listener function at run time
x.addListener(myFunction1); // Attach listener function on state changes
