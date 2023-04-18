let page = get_page();

let url = site + "/api/users?page=" + page + "&limit=12&version=" + getVersion() + "&shows=" + getShowUsers();

let lang = Cookies.get('lang');

if (lang === undefined || lang === null) {
    setVersion();
    Cookies.set('lang', '', {expires: 360});
}

fetch(url)
  .then((response) => {
    let pages_count = get_pages_count(response);
    document.getElementById("pagination").innerHTML = get_pages_html(
      "/?",
      page,
      pages_count
    );

    return response.json();
  })
  .then((famous) => {
    for (let i = 0; i < famous.length; i++) {
        if (multiLangFlag) {
            if (lang === "ru") {
              if (!ruUsersList.includes(famous[i].id)) {
                  continue
              }
            } else if (!enUsersList.includes(famous[i].id)) {
                    continue
            }
        }

      if (famous[i].img_url !== "" || famous[i].img_url !== "<empty string>") {
        document.getElementById("famous").innerHTML += `   
                 
                 <div class="col parent-card">
                 <a class="all_block_link" href="collections.html?creator=${famous[i].id}">
                     <div class="card main-card-famous">
                         <div class="card-img-parent">
                             <img src="${
                               famous[i].img_url
                             }" class="card-img-top" style="object-fit: contain" width="100%" height="100%" alt="...">
                         </div>
                         
                         <div class="card-body card-body-pc text-center">
                             <div class="card-title-name card-body-df flex-start-min">
                                 <h5 class="card-title card-title-fio">${
                                   famous[i].name
                                 }</h5>
                                 <button class="card-body-button">${t.common.from} ${getAmountToLocale(famous[i].min_price.value, famous[i].min_price.currency)}</button>
                             </div>
                             <div class="card-body-df mt-15 card-body-two">
                                 <div style="display:flex;align-items:center">
                      
                                        <h5 class="card-title" style="margin-right:8px">@${
                                          famous[i].nickname
                                        }</h5>
                                   
                                 
                                     
                                     ${
                                       famous[i].verified
                                         ? '<span class="color-true fz-10"> <img class="ico-verefic" src="img/verefic.png" alt=""></span>'
                                         : `<span class="color-4 fz-10">${t.common.approve} &#10060</span>`
                                     }
                                 </div>

                               
                                 <button class="card-body-button-do">${t.common.to} ${getAmountToLocale(famous[i].max_price.value, famous[i].max_price.currency)}</button>
         
                             </div>
         
                                    <button type="button"   class="famous-btn btn btn-warning btn-warning-gradient mb-15 mt-20" onclick="document.querySelector('.modal-step-1').style.display = 'block';document.querySelector('.modal-step-2').style.display = 'none';">${t.common.collections}</button>
                         </div>

                         <div class="card-body card-body-mobile">
                            <div class="card-name-div">
                              <h5 class="card-title card-title-fio card-t">${
                                famous[i].name
                              }</h5>
                            </div>
                          
                            <div class="card-nick-div" style="display:flex;align-items:center">
                        
                                    <h5 class="card-title card-t" style="margin-right:8px">@${
                                      famous[i].nickname
                                    }</h5>
                            
                            
                                
                                ${
                                  famous[i].verified
                                    ? '<span class="color-true fz-10"> <img class="ico-verefic" src="img/verefic.png" alt=""></span>'
                                    : '<span class="color-4 fz-10">' + t.common.approve + ' &#10060</span>'
                                }
                            </div>
                          
                                <div >
                             
                                    <button class="card-body-button card-b" style="margin-right:10px">${t.common.from} ${getAmountToLocale(famous[i].min_price.value, famous[i].min_price.currency)}</button>
                                
                                    <button class="card-body-button-do card-b">${t.common.to} ${getAmountToLocale(famous[i].max_price.value, famous[i].max_price.currency)}</button>
            
                                </div>
                                        <button type="button"   class="famous-btn btn btn-warning btn-warning-gradient mb-15 mt-20 card-w100" onclick="document.querySelector('.modal-step-1').style.display = 'block';document.querySelector('.modal-step-2').style.display = 'none';">${t.common.collections}</button>
                         </div>
                     </div>  
                     </a>
                 </div>`;
      }

    }

      // Set maxHeight from blocks
      setMaxHeightForBlocks("card-title-name")
  });
