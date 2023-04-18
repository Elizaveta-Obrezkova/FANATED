var phoneHtml = "";
if (t.footer.company_phone !== "") {
    phoneHtml = `<p>phone: <span>${t.footer.company_phone}</span></p>`;
}

var footerText = ` <section class="main-footer footer1" style="background: #FDD446;">
<div class="container">
    <footer class="row row-cols-5" style="justify-content:space-between">

        <div class="col mobile-foot">
            <img src="img/footer-logo-dark.png" class="footer-logo" alt="">
            <div class="nav flex-column">
                <p>${t.footer.company_name}</p>
                <p>${t.footer.company_inn}</p>
                <p>e-mail: <span>${t.app.support_email}</span></p>
                ${phoneHtml}

                <ul style="display:flex" class=" footer-ul list-unstyled ">
                    <li><a class="text-muted" href="#"><img src="img/twitter-ico.png" class="footer-social-ico"></a></li>
                    <li><a class="text-muted" href="#"><img src="img/vk-ico.png" class="footer-social-ico"></i></a>
                    </li>

                </ul>
            </div>
        </div>

     

        <div class="foot" style="display:flex;justify-content: space-between;">
            <div class="col">
                <h5 class="footer-title">${t.app.name}</h5>
                <ul class="nav flex-column">
                    <li class=" mb-2"><a href="what-is.html" class="nav-link p-0 text-muted">${t.footer.what_nft}</a>
                    </li>
                    <li class=" mb-2"><a href="create-with-us.html" class="nav-link p-0 text-muted">${t.footer.create_nft}</a>
                    </li>
                </ul>
            </div>

              <div class="col">
            <h5 class="footer-title">${t.footer.company}</h5>
            <ul class="nav flex-column">
                <li class=" mb-2"><a href="about_us.html" class="nav-link p-0 text-muted">${t.footer.about_company}</a></li>
                <li class=" mb-2"><a href="tariff.html" class="nav-link p-0 text-muted">${t.footer.tariff}</a></li>

            </ul>
        </div>

        <div class="col">
            <h5 class="footer-title">${t.footer.support}</h5>
            <ul class="nav flex-column">
                <li class=" mb-2"><a href="help.html" class="nav-link p-0 text-muted">${t.footer.support}</a></li>
            </ul>
        </div>
        <div class="col">
            <h5 class="footer-title">${t.footer.other}</h5>
            <ul class="nav flex-column">
                <li class=" mb-2"><a href="uslovia_using.html" class="nav-link p-0 text-muted" style="white-space: nowrap;">${t.footer.terms_of_use}</a>
                </li>
                <li class=" mb-2"><a href="politica-confidenc.html" class="nav-link p-0 text-muted">${t.footer.privacy_policy}</a></li>
            </ul>
        </div>
        </div>
      
    </footer>
   
</div>

<div style="display: flex;
position: relative;
justify-content: center;">
    <img src="/img/zvezda-footer.png" class="star-footer" alt="">
</div>


<div class="container cc1-parent">
    <footer
        class="d-flex cc1 flex-wrap justify-content-between align-items-center py-3 border-top">
        <div>
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24">
                    <use xlink:href="#bootstrap"></use>
                </svg>
            </a>
            <span class="text-muted-inc">${t.footer.copyright}</span>
   
    </footer>
</div>
</section>

<section class="main-footer foter768_width" style="background: #FDD446;">
        <div class="container">
            <footer class="row row-cols-5 mb-45" style="justify-content: space-evenly;">

                <div class="col mobile-foot">
                    <img src="img/footer-logo-dark.svg" class="footer-logo" alt="">
                    <div class="nav flex-column">
                        <p class=" mb-2">${t.footer.company_name}
                        </p>
                        <p class=" mb-2">${t.footer.company_inn}</p>
                        <p class="mb-2">e-mail:<span>${t.app.support_email}</span></p>

                        <ul style="flex-wrap: nowrap;" class="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li><a class="text-muted" href="#"><img src="img/twitter-ico.png" class="footer-social-ico">></a></li>
                            <li class="ms-3"><a class="text-muted" href="#"><img src="img/vk-ico.png" class="footer-social-ico"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col">
                    <h5>${t.app.name}</h5>
                    <ul class="nav flex-column footer-ul" >
                        <li class=" mb-2"><a href="what-is.html" class="nav-link p-0 text-muted">${t.footer.what_nft}</a>
                        </li>
                        <li class=" mb-2"><a href="create-with-us.html" class="nav-link p-0 text-muted">${t.footer.create_nft}</a>
                        </li>
                    </ul>
                    <div  style="display:flex">
                    <div><a class="text-muted" href="#"><img src="img/twitter-ico.png" class="footer-social-ico"></a>
                   <a class="text-muted" href="#"><img src="img/vk-ico.png" class="footer-social-ico"></a>
                    </li>
                    </div>
        
                </div> 
                    
                </div>

                <div class="col">
                    <h5>${t.footer.company}</h5>
                    <ul class="nav flex-column">
                        <li class=" mb-2"><a href="about_us.html" class="nav-link p-0 text-muted">${t.footer.about_compan}</a></li>

                        <li class=" mb-2"><a href="tariff.html" class="nav-link p-0 text-muted">${t.footer.tariff}</a></li>

                    </ul>
                </div>


                <div class="col">
                    <h5>${t.footer.other}</h5>
                    <ul class="nav flex-column">
                        <li class=" mb-2"><a href="uslovia_using.html" class="white-span-nowrap-pad nav-link p-0 text-muted">${t.footer.terms_of_use}</a>
                        </li>
                        <li class=" mb-2"><a href="politica-confidenc.html" class=" nav-link p-0 text-muted">${t.footer.privacy_policy}</a></li>
                    </ul>
                </div>
            </footer>

        </div>

        <div style="display: flex;
        position: relative;
        justify-content: center;">
            <img src="/img/zvezda-footer.png" class="star-footer" alt="">
        </div>


        <div class="container">
            <footer style="justify-content: flex-end!important;border-top: 1px solid rgba(0, 0, 0, 0.5)!important;"
                class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top" >
  
            </footer>
        </div>

        <div style="display:flex;justify-content:center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24">
                <use xlink:href="#bootstrap"></use>
            </svg>
        </a>
        <span class="text-muted-inc text-muted-inc-pad">${t.footer.copyright}</span>
    </div>
    </section>

   

    <section class="main-footer foter32O_width" style="background: #FDD446;">
        <div class="container">
            <footer style="display:flex;justify-content: space-between">
                <div style="display: flex;flex-direction: column;">
                    <div style="display: flex;
                    flex-direction: column;">

                        <a class="text-muted" href="what-is.html">${t.footer.what_nft}</a>
                        <a class="text-muted" href="create-with-us.html">${t.footer.create_nft}</a>
                        <a class="text-muted" href="about_us.html">${t.footer.about_company}</a>
                        <a class="text-muted" href="tariff.html">${t.footer.tariff}</a>
                        <a class="text-muted" href="help.html">${t.footer.support}</a>
                        <a class="text-muted" href="uslovia_using.html">${t.footer.terms_of_use}</a>
                        <a class="text-muted" href="politica-confidenc.html">${t.footer.privacy_policy}</a>


                    </div>
                </div>
                <div style="display: flex;flex-direction: column;">
                    <div style="display: flex;
                    position: relative;
                    justify-content: center;">
                        <img src="/img/zvezda-footer.png" width="49px" alt="">
                    </div>
                </div>
            </footer>
        </div>
    </section>

`;

function setFooter() {
    var footer = document.createElement("div");
    footer.classList.add('footer-parent')
    footer.innerHTML = footerText;
    document.body.insertAdjacentElement('beforeend', footer);
}

setFooter();   
