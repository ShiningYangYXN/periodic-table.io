// const fs = require("fs");
const xlsxFile = require("read-excel-file/node");
const htmlPrivacy = require("./htmlPrivacy.js");
const htmlAbout = require("./htmlAbout.js");

xlsxFile("../Translation/Periodic Table others.xlsm").then((rows) => {
  let languages = [
    // { lang: "en", col: 3 },
    // { lang: "en-gb", col: 40 },
    // { lang: "bg", col: 20 },
    // { lang: "ca", col: 25 },
    // { lang: "zh-cn", col: 6 },
    // { lang: "zh-tw", col: 28 },
    // { lang: "hr", col: 39 },
    // { lang: "cs", col: 24 },
    // { lang: "da", col: 33 },
    // { lang: "nl", col: 7 },
    // { lang: "fi", col: 19 },
    { lang: "fr", col: 5 },
    // { lang: "de", col: 12 },
    // { lang: "el", col: 35 },
    // { lang: "hi", col: 29 },
    // { lang: "hu", col: 11 },
    // { lang: "id", col: 21 },
    // { lang: "it", col: 8 },
    // { lang: "ja", col: 23 },
    // { lang: "ko", col: 10 },
    // { lang: "ms", col: 41 },
    // { lang: "nb-no", col: 27 },
    // { lang: "nn-no", col: 38 },
    // { lang: "pl", col: 30 },
    // { lang: "pt", col: 18 },
    // { lang: "ro", col: 17 },
    // { lang: "ru", col: 9 },
    // { lang: "sr", col: 26 },
    // { lang: "sk", col: 13 },
    // { lang: "sl", col: 37 },
    { lang: "es", col: 4 },
    // { lang: "sv", col: 32 },
    // { lang: "th", col: 34 },
    // { lang: "tr", col: 22 },
    // { lang: "uk", col: 14 },
    // { lang: "vi", col: 15 },
    // { lang: "ar", col: 31 },
    // { lang: "he", col: 36 },
    // { lang: "fa", col: 16 },
    // { lang: "hy", col: 42 },
    // { lang: "mk", col: 43 },
  ];

  languages.forEach((language) => {
    let langValues = printObject(language.col); // es
    let lang = language.lang;

    function printObject(col) {
      let o = {};
      for (var j = 1; j < rows.length; j++) {
        o[rows[j][2]] = rows[j][col] === "" || !rows[j][col] ? rows[j][3] : rows[j][col];
      }

      return o;
    }
    let pages = [
      { page: "about", keywords: "about", title: langValues.about },
      { page: "privacy-policy", keywords: "privacy policy", title: langValues.privacy },
    ];

    let defaultHead = [
      "<!DOCTYPE html>",
      "<html lang='en' class='normalFont' data-direction='ltr' data-theme='dark' data-style='1'>",
      "<head>",
      "<meta charset='utf-8'/>",
      "<meta http-equiv='X-UA-Compatible' content='IE=edge'/>",
      "<meta name='viewport' content='width=device-width,initial-scale=1'/>",
      "<link rel='apple-touch-icon' sizes='180x180' href='/images/icons/apple-touch-icon.png'/>",
      "<link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png'/>",
      "<link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png'/>",
      "<link rel='manifest' href='manifest.json'/>",
      "<link rel='mask-icon' href='safari-pinned-tab.svg' color='#0078d7'/>",

      "<meta name='msapplication-TileColor' content='#0078d7'/>",
      "<meta name='msapplication-TileImage' content='/images/icons/mstile-144x144.png'/>",
      "<meta name='msapplication-square70x70logo' content='/images/icons/mstile-70x70.png'/>",
      "<meta name='msapplication-square150x150logo' content='/images/icons/mstile-150x150.png'/>",
      "<meta name='msapplication-wide310x150logo' content='/images/icons/mstile-310x150.png'/>",
      "<meta name='msapplication-square310x310logo' content='/images/icons/mstile-310x310.png'/>",
      "<meta name='theme-color' content='#003c6c'/>",
      "<meta name='google' content='notranslate'/>",
      "<meta name='robots' content='index,follow'/>",
      "<meta name='format-detection' content='telephone=no'/>",
      "<meta name='mobile-web-app-capable' content='yes'/>",
      "<meta name='apple-mobile-web-app-capable' content='yes'/>",
      "<meta name='author' content='Naveen CS'/>",
      "<meta name='twitter:card' content='summary_large_image'/>",
      "<meta name='twitter:site' content='@periodictableio'/>",
      "<meta property='og:site_name' content='Periodic-Table.io'/>",
      "<meta property='og:type' content='website'/>",
    ];

    let defaultNav = [
      "<nav>",
      "<a id=logo class='navbar-brand' href={langValue} aria-label='Home>",
      "{@html logoIcon}PERIODIC-TABLE.IO",
      "</a>",

      "<label for='drop' class='toggle burger'><svg http://www.w3.org/2000/svg'",
      "width='22' height='22' viewBox='0 0 24 24'",
      "stroke-width='1.5, stroke='currentColor', fill='none'",
      "stroke-linecap='round' stroke-linejoin='round'>",
      "<path stroke='none' d='M0 0h24v24H0z' fill='none' />",
      "<line x1='4' y1='6' x2='20' y2='6' />",
      "<line x1='4' y1='12' x2='20' y2='12' />",
      "<line x1='4' y1='18'x2='20' y2='18' />",
      "</svg></label>",

      "<input type='checkbox' id='drop' /><ul ",
      "<li>",
      // "<a href="+ lang + }"/list">",
      // "{@html listIcon}{Lang.list}</a>",
      // "</li>
      // "<li>",
      // "<a href="{langValue}/compare">
      // "{@html compareIcon}{Lang.compare}</a>
      // "</li>
      // "<li>
      // "<label for="drop-1" class="toggle">
      // "{@html tablesIcon}Tables +</label>
      // "<a>
      // "{@html tablesIcon}Tables ▼</a>
      // "<input type="checkbox" id="drop-1" />
      // "<ul>
      // "<li><a href="#a">Solubility Chart</a></li>
      // "<li><a href="#a">Reactivity Series</a></li>
      // "</ul","
      // ""</li>","
      // ","<li>
      // ","<a href="{langValue}/printables">
      // ","{@html printablesIcon}{Lang.printables}</a>
      // ","</li>
      // ","<li>
      // ","<a href="{langValue}/store">
      // ","{@html storeIcon}{Lang.store}</a>
      // ","</li>
      // ","<li>
      // ","<a href="{langValue}/translation">
      // ","{@html translationIcon}{Lang.translation}</a>
      // ","</li>
      // ","<li>
      // ","<Modal>
      // ","<Content name={Lang.settings} />
      // ","</Modal>
      // ","</li>
      // ","<li>
      // ","<a on:click={() => changeTheme()}>
      // ","<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor">
      //           {#if theme === light}
      //             <path transition:fly={{ y: 200, duration: 600 }} d={theme} />
      //           {:else}
      //           ","            <path transition:fly={{ y: -200, duration: 600 }} d={theme} />
      //           {/if}","
      //         </svg>{Lang.theme}","
      //       </a>","
      "</li>",
      "</ul>",
      "</nav>",
    ];

    let defaultFooter = [
      "<div class='footer'>",
      "<div class='flex flex-wrap justify-center pt-2'>",
      "<a target='_blank' href='https://feedback.periodic-table.io/' rel='noopener noreferrer' class='m-1 p-2'>",
      "<span id='suggestionLink' class='linkText'>" + langValues.suggestions + "</span>",
      "</a>",
      "<a id='translationFooter' href='" + lang + "/translation' class='m-1 p-2 flex'>",
      "<span id='translate2Link' class='linkText'>" + langValues.translate + "</span>",
      "</a>",
      "<a id='aboutFooter' href='" + lang + "/about' class='m-1 p-2'> <span id='aboutLink' class='linkText'>" + langValues.about + "</span> </a>",
      "<a id='creditsFooter' href='" +
        lang +
        "/credits' class='m-1 p-2'> <span id='creditsLink' class='linkText'>" +
        langValues.credits +
        "</span> </a>",
      "<a id='privacyFooter' href='" +
        lang +
        "/privacy-policy' class='m-1 p-2'> <span id='privacyLink' class='linkText'>" +
        langValues.privacy +
        "</span> </a>",
      "</div>",
      "<div class='flex flex-wrap justify-center pt-2 py-4'>",
      "<a target='_blank' href='https://github.com/catchspider2002/periodic-table.io' rel='noopener noreferrer' class='flex m-1 p-2' title='Github'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M256 6.178c-141 0-256 115-256 256 0 113 73 209 175 243 13 3 18-5 18-12 0-6-1-26-1-48-71 16-86-30-86-30-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 40 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-68 0 0 21-6 70 27 20-6 42-9 64-9s44 3 64 9c49-33 70-27 70-27 14 36 6 62 3 68 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48 0 34-1 61-1 70 0 7 5 15 18 12 102-34 175-130 175-243 0-141-115-256-256-256z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://twitter.com/periodictableio' rel='noopener noreferrer' class='flex m-1 p-2' title='Twitter'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M511.426 97c-19 9-39 14-60 17 21-13 38-34 46-58-20 12-43 20-67 25-19-20-46-33-76-33-58 0-105 47-105 105 0 8 0 16 2 24-87-4-164-46-216-110-9 16-14 34-14 53 0 36 18 69 46 87-17 0-33-5-47-13v2c0 50 36 93 84 103-9 2-18 3-28 3-7 0-13 0-20-2 14 42 53 72 99 73-36 29-82 45-131 45-8 0-17 0-25-1 47 30 102 47 161 47 193 0 299-160 299-299v-13c20-15 38-34 52-55z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://www.instagram.com/periodictableio/' rel='noopener noreferrer' class='flex m-1 p-2' title='Instagram'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M466 256c0-68 0-77-2-103-1-25-5-39-8-48-5-12-11-20-20-29s-17-15-29-20c-9-3-23-7-47-8-27-2-36-2-104-2s-76 0-103 2c-25 1-39 5-48 8-12 5-20 11-29 20s-15 17-19 29c-4 9-8 23-9 47-1 27-2 36-2 104s1 76 2 103c1 25 5 39 9 48 4 12 10 20 19 29s17 15 29 19c9 4 23 8 48 9 27 1 35 2 103 2s77-1 103-2c25-1 39-5 48-9 12-4 20-10 29-19s15-17 20-29c3-9 7-23 8-48 2-27 2-35 2-103zm46 0c0 69 0 78-2 105-1 28-5 46-11 63-7 16-16 31-30 45s-29 23-45 30c-17 6-35 10-62 11-28 2-37 2-106 2-70 0-78 0-106-2-27-1-45-5-62-11-17-7-31-16-45-30s-23-29-30-45c-6-17-10-35-11-62-2-28-2-36-2-106 0-69 0-78 2-105 1-28 5-46 11-63 7-16 16-31 30-45s28-23 45-29c17-7 35-11 62-12 28-1 36-2 106-2 69 0 78 1 105 2 28 1 46 5 62 12 17 6 32 15 46 29s23 28 29 45c7 17 11 35 12 62 2 28 2 36 2 106zm-125 0c0 73-58 131-131 131s-132-58-132-131 59-132 132-132 131 59 131 132zm-216 0c0 47 38 85 85 85s85-38 85-85-38-85-85-85-85 38-85 85zM393 89c-17 0-31 13-31 30s14 31 31 31 30-14 30-31-13-30-30-30z' />",
      "</svg>",
      "</a>",
      "<a target='_blank' href='https://gumroad.com/periodictabio' rel='noopener noreferrer' class='flex m-1 p-2' title='Gumroad'>",
      "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512' stroke='currentColor' fill='currentColor'>",
      "<path d='M338 321c12 0 21 10 21 22s-9 22-21 22c0 0 0 0 0 0v0c-12 0-22-10-22-22s10-22 22-22c0 0 0 0 0 0zM455 24s0 0 0 0c12 0 22 9 22 21s-10 22-22 22c0 0 0 0 0 0-12 0-22-10-22-22s10-21 22-21zM71 66h344c7 15 23 25 40 25 25 0 45-21 45-46S480 0 455 0c-19 0-35 12-42 28H71c-33 0-59 26-59 58v366c0 32 27 60 59 60h366c32 0 58-27 58-60V235c0-33-26-60-58-60H220c-33 0-61 27-61 60v68c0 32 27 57 61 57h76c6 17 23 29 42 29v0c25 0 45-21 45-46s-20-45-45-45c-18 0-33 10-41 24v0h-77c-11 0-23-7-23-19v-68c0-12 11-22 23-22h217c11 0 20 10 20 22v217c0 12-9 22-20 22H71c-11 0-21-10-21-22V86c0-11 9-20 21-20z' />",
      "</svg>",
      "</a>",
      "</div>",
      "<div class='flex flex-wrap justify-center p-2 pb-8 self-center'>Made with&nbsp; <span style='color:#e25555'>❤</span> &nbsp;by Naveen CS</div>",
      "</div>",
    ];

    pages.forEach((pageValue) => {
      let keywords =
        pageValue.keywords +
        "Periodic Table, chemical, elements, interactive, PWA, properties, history, name origin, images, applications, hazards, electron shell, diagram, chemistry, electron configuration, isotopes, information";
      let description =
        "Interactive periodic table of the chemical elements in 39 languages - Includes properties, history, name origin, facts, applications, hazards, isotopes and more.";
      let website = "https://periodic-table.io";
      let image = website + "/images/icons/android-chrome-256x256.png";
      let title = pageValue.title + " - " + langValues.homeHeader;
      let page = pageValue.page;
      let link = website + "/" + lang + "/" + pageValue.page + "/";

      let metaTags = [
        "<meta name='keywords' content='" + keywords + "' />",
        "<meta name='description' content='" + description + "' />",
        "<meta property='og:description' content='" + description + "' />",
        "<meta name='twitter:description' content='" + description + "' />",
        "<meta property='og:title' content='" + title + "' />",
        "<meta name='twitter:title' content='" + title + "' />",
        "<title id='homeTitle'>" + title + "</title>",
        "<meta property='og:image' content='" + image + "' />",
        "<meta name='twitter:image' content='" + image + "' />",
        "<meta name='twitter:image:src' content='" + image + "' />",
        "<meta property='og:url' content='" + link + "' />",
        "<link rel='canonical' href='" + link + "' />",
        "<link rel='stylesheet' href='../../style.min.css' />",
        "</head>",
      ];

      switch (page) {
        case "privacy-policy":
          htmlPrivacy.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
        case "about":
          htmlAbout.writeFile(lang, langValues, page, defaultHead, metaTags, defaultNav, defaultFooter);
          break;
      }
    });
  });
});
