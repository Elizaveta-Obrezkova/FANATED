$(function () {
    setVersion();

    let lang = langDefault;
    if (multiLangFlag && Cookies.get('lang') === "ru") {
        lang = "ru";
    }

    setUtm();

// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/
    i18next
        .use(i18nextXHRBackend)
        .init({
            debug: false,
            lng: lang, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
            fallbackLng: lang,
            backend: {
                loadPath: '/locales/' + lang + '/{{ns}}.json',
            },
            cache: {
                enabled: false,

                // prefix for stored languages
                //prefix: 'i18next_res_',

                // expiration
                expirationTime: 60 * 1000
            }
        }, function (err, t) {
            // for options see
            // https://github.com/i18next/jquery-i18next#initialize-the-plugin
            jqueryI18next.init(i18next, $);

            // start localizing, details:
            // https://github.com/i18next/jquery-i18next#usage-of-selector-function
            $('head').localize();
            $('body').localize();
        });
});

getParameter = (key) => {
    address = window.location.search
    parameterList = new URLSearchParams(address)
    console.log(parameterList.get(key))
    if (parameterList === undefined || parameterList === null || parameterList.get(key) === undefined || parameterList.get(key) === null || parameterList.get(key) === '') {
        return 0;
    }
    return parameterList.get(key)
}

function get_page() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let page = urlParams.get('page');
    if (page === undefined || page === null || page.length === 0) {
        page = 0;
    }
    return page;
}

function get_pages_count(response) {
    let limit = response.headers.get('X-Limit');
    let count = response.headers.get('X-Total-Count');

    if (limit === undefined || limit === null || limit.length === 0 || limit <= 0) {
        return 0;
    }

    if (count === undefined || count === null || count.length === 0 || count <= 0) {
        return 0;
    }

    let pages_count = Math.ceil(count / limit);

    return pages_count;
}

function get_total_count(response) {
    let count = response.headers.get('X-Total-Count');

    if (count === undefined || count === null || count.length === 0 || count <= 0) {
        return 0;
    }

    return count;
}

function get_pages_html(addr, page, pages_count) {
    const max_in_row = 3;

    if (page < 0 || pages_count === 0) {
        return ``;
    }

    if (page === 0) {
        page = 1;
    }

    let page_index_start = Math.floor((page - 1) / max_in_row) * max_in_row + 1

    let page_index_end = page_index_start + max_in_row - 1;

    let style_back = "";
    if (page <= max_in_row) {
        style_back = `display:none`;
    }

    let style_next = "";
    if (page_index_end >= pages_count) {
        style_next = `display:none`;
    }

    let content = ``;

    let last_index = 1;
    for (index = page_index_start; index <= page_index_end && index <= pages_count; index++) {
        let color = "black";
        if (index - page === 0) {
            color = "#00000080";
        }

        content += `<li class="page-item"><a class="page-link"style=" color: ${color};
                font-size: 18px;
                font-weight: 600;
                line-height: 38px;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                margin: 0 5px;
                border-radius: 50%;
                border: none;
                text-align:center;
                transition: all 0.5s ease 0s;"  href="${addr}page=${index}">${index}</a></li>`;

        last_index = index;
    }

    let page_prev_index_end = page_index_start - 1;
    let page_new_index_start = page_index_start + max_in_row;

    if (page_prev_index_end < 1) {
        page_prev_index_end = 1;
    }

    if (page_new_index_start > pages_count) {
        page_new_index_start = last_index;
    }


    let pagination_html = `
    
        <a class="page-link"  href="${addr}page=${page_prev_index_end}" aria-label="Previous" style="${style_back};  color: black;
        font-size: 18px;
        font-weight: 600;
        line-height: 38px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0 5px;
        border-radius: 50%;
        border: none;
        text-align:center;
        transition: all 0.5s ease 0s;">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
   
      ${content}
      <li class="page-item">
        <a class="page-link" href="${addr}page=${page_new_index_start}" aria-label="Next" style="${style_next}; color: black;
        font-size: 18px;
        font-weight: 600;
        line-height: 38px;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0 5px;
        border-radius: 50%;
        border: none;
        text-align:center;
        transition: all 0.5s ease 0s; ">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>`;

    return pagination_html;
}

function authLogout() {
    Cookies.remove('access_token');
}

function authGetAccessToken() {
    return Cookies.get('access_token');
}

async function checkAuth() {
    const accessToken = authGetAccessToken();
    if (accessToken === undefined || accessToken === null || accessToken.length === 0) {
        return [false, ""];
    }

    let url = site + "/api/me";

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            authorization: "Bearer " + accessToken,
        },
    });

    if (response.status === 401) {
        authLogout();
        return [false, ""]
    }

    if (response.status !== 200) {
        return [false, ""]
    }

    const json = await response.json();

    return [true, json]
}

function getUserImg(userImg) {
    if (userImg === undefined || userImg === null || userImg === '') {
        return 'img/default-avatar.png';
    }

    return userImg
}

function validateEmail(email, showAlert) {
    let reg = /^([A-Za-z0-9_\-.+%])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(email)) {
        if (showAlert) {
            alert(t.error.email_wrong);
        }
        return false;
    } else {
        return true
    }
}

function getAmountToLocale(amount, currency) {
    const number = Number(amount);

    if (currency === "rub") {
        return number.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    }

    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

function setMaxHeightForBlocks(className) {
    let elements = document.getElementsByClassName(className);
    let maxHeight = 0;
    for(let i = 0; i < elements.length; i++) {
        if (elements[i].offsetHeight > maxHeight) {
            maxHeight = elements[i].offsetHeight;
        }
    }
    for(let i = 0; i < elements.length; i++) {
        if (elements[i].offsetHeight !== maxHeight) {
            elements[i].style.minHeight = maxHeight +"px";
        }
    }
}

function setVersion() {
    let version = Cookies.get('version');
    if (version !== undefined && version !== null) {
        return
    }

    let lang = Cookies.get('lang');
    version = '1.0';
    if (lang === undefined || lang === null) {
      version = '1.1';
    }

    Cookies.set('version', version, {expires: 3600});
}

function getVersion() {
    let version = Cookies.get('version');
    if (version !== undefined && version !== null) {
        return version
    }

    let lang = Cookies.get('lang');
    version = '1.0';
    if (lang === undefined || lang === null) {
        version = '1.1';
    }

    return version
}

function setUtm() {
    let utmCampaign = getParameter('utm_campaign');
    if (utmCampaign === 0) {
       return
    }

    let utmCampaignCookies = Cookies.get('utm_campaign');
    if (utmCampaignCookies === undefined || utmCampaignCookies === null) {
        Cookies.set('utm_campaign', utmCampaign, {expires: 360});
    }
}

function getUtm() {
    let utmCampaignCookies = Cookies.get('utm_campaign');
    if (utmCampaignCookies === undefined || utmCampaignCookies === null) {
        return '';
    }

    return utmCampaignCookies;
}

function addShowUser(userID) {
    if (userID === 0) {
        return
    }

    let showUsers = Cookies.get('show_users');
    if (showUsers === undefined || showUsers === null) {
        let myAry = [userID];
        Cookies.set('show_users', JSON.stringify(myAry), {expires: 3600});
        return
    }

    let storedAry = JSON.parse(showUsers);
    if (storedAry === undefined || storedAry === null || storedAry.length === undefined || storedAry.length === null || storedAry.length === 0) {
        let myAry = [userID];
        Cookies.set('show_users', JSON.stringify(myAry), {expires: 3600});
        return
    }

    if (storedAry.includes(userID)) {
        return
    }

    storedAry.push(userID);
    Cookies.set('show_users', JSON.stringify(storedAry), {expires: 3600});
}

function getShowUsers() {
    let showUsers = Cookies.get('show_users');
    if (showUsers === undefined || showUsers === null) {
        return [];
    }

    let storedAry = JSON.parse(showUsers);
    if (storedAry === undefined || storedAry === null || storedAry.length === undefined || storedAry.length === null || storedAry.length === 0) {
        return [];
    }

    return storedAry;
}