<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* @user/layouts/main.twig */
class __TwigTemplate_8428f3f527960a3de9b6b5ad8b044166 extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        yield "
<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ | Vietiso</title>
    <meta charset=\"utf-8\" />
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=IE8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
\t<meta name=\"robots\" content=\"noindex, nofollow\" />
\t<meta name=\"googlebot\" content=\"noindex\">
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/72-x-72.png\" sizes=\"72x72\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/144-x-144.png\" sizes=\"144x144\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/57-x-57.png\" sizes=\"57x57\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/114-x-114.png\" sizes=\"114x114\" />
    <link rel=\"nokia-touch-icon\" href=\"https://manage.matbao.net/Contents/images/Logo/57-x-57.png\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/114-x-114.png\" sizes=\"1x1\" />
    <link href=\"https://www.vietiso.com/favicon.ico\" rel='icon' type='image/x-icon' />
    <link href=\"https://manage.matbao.net/Contents/MBID/bootstrap.min.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/slick.css\" type=\"text/css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/slick-theme.css\" type=\"text/css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/pnotify/pnotify.custom.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/MBID/Shared.css?ver=001\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/summernote.css\" rel=\"stylesheet\" />
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/assets/vendor/select2/css/select2.css\" />
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/assets/vendor/select2-bootstrap-theme/select2-bootstrap.css\" />
    <link href=\"https://manage.matbao.net/Contents/MBID/intro.css\" rel=\"stylesheet\" />
    <script type=\"text/javascript\">
        WebFontConfig = {
            custom: {
                families: [
                    \"Roboto Condensed\",
                    \"Open Sans\",
                    \"Inter\"
                ],
                urls: [
                    \"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\",
                    \"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\",
                    \"https://fonts.googleapis.com/css?family=Inter:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\"
                ]
            },
            timeout: 2e3
        },
        function () {
            var e = document.createElement(\"script\");
            e.src = \"https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\", e.type = \"text/javascript\", e.async = \"true\";
            var t = document.getElementsByTagName(\"script\")[0]; t.parentNode.insertBefore(e, t)
        }();
    </script>
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/Contents/MBID/dashboard/index.css\">
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/Contents/MBID/simple-calendar.css\">
    <link href=\"https://manage.matbao.net/Contents/MBID/intro.css\" rel=\"stylesheet\" />
    <style>
        .contNotification ul li::marker {
            content: '';
        }

        .contNotification ul.active {
            margin-bottom: 0;
        }

        .contNotification ul li {
            margin: 20px 25px;
            border-bottom: 1px solid #d9d9d9;
        }

        .title-tb {
            font-weight: bold;
            font-size: 18px;
            color: #000;
        }

        .btn-size {
            width: 150px;
            height: 36px;
            padding: 5px !important;
            margin-top: 0 !important;
        }

        .xcontent__PINCreate {
            display: inline-block;
            float: right;
            border: 1px solid #1e74e8;
            padding: 0 10px;
            border-radius: 20px;
            width: 150px;
            text-align: center;
        }

        .modal.show .modal-dialog {
            max-width: 700px;
        }

        input[type=radio] {
            width: 19px;
            height: 19px;
            margin-top: 2px;
            margin-right: 15px;
        }

        #tkc {
            border: none;
            background: none;
            outline: none;
        }

        #vw_point, #tt, #km {
            border: none;
            background: none;
            outline: none;
        }

        ::placeholder {
            bottom: 100px;
        }

        .btn-hover:hover {
            font-weight: bold !important;
        }

        .mb-popup .close {
            position: absolute;
            right: 45px;
        }

        .re-content p {
            margin-bottom: 0;
        }

        .re-content span {
            color: #f56969;
        }

        .block a:not([href]):hover {
            color: #1E74E8;
        }

        .xcontent input[type=password] {
            font-size: 18px;
            font-family: Verdana;
        }

        #ekycInstuct {
            position: absolute;
            top: 84px;
            right: 0px;
            display: none;
            width: 320px;
            height: 142px;
            padding: 20px;
            text-align: left;
            background: #3F85F5;
            border-radius: 4px;
            color: #FFF;
            z-index: 10;
        }

        #closeInstructEkyc {
            font-size: 16px;
            font-weight: 700;
            float: right;
            background-color: #3F85F5;
            color: white;
            border: 1px #3F85F5;
            width: 96px;
            height: 36px;
            border-radius: 10px;
            margin-top: 16px;
        }

        #ekycInstuct:before {
            position: absolute;
            display: block;
            content: '';
            width: 10px;
            height: 10px;
            top: -4px;
            right: 45px;
            background: #3F85F5;
            transform: rotate(-136deg);
        }

        #menu-page-search, .search-bar input[type=\"text\"]:focus {
            border-color: white;
            box-shadow: 0;
            outline: 0 none;
        }

        #menu-page-search:focus, .search-bar input[type=\"text\"]:focus {
            box-shadow: 0 1px 1px white inset, 0 0 8px white;
            outline: 0 none;
        }

        .ui-autocomplete:after {
            content: '';
            display: inline-block;
            height: 1px;
            outline: 1px solid pink;
        }

        .ui-autocomplete .ui-menu-item {
            width: 100%;
            height: 40px;
            display: inline-block;
            font-size: 1rem;
        }

        .ui-state-active,
        .ui-widget-content .ui-state-active,
        .ui-widget-header .ui-state-active,
        a.ui-button:active,
        .ui-button:active,
        .ui-button.ui-state-active:hover, .ui-autocomplete .ui-menu-item:hover, .ui-autocomplete .ui-menu-item:active {
            background: #FAFAFA;
        }

        .ui-menu-item-wrapper {
            height: 100%;
        }

        .ui-menu-item-wrapper > * {
            margin-left: 10px;
            padding-top: 8px;
        }

        .search-bar {
            margin-top: 14px;
        }

        .search-bar > div {
            width: 100%;
            padding-right: 62px;
            margin-top: 10px;
            display: flex;
        }

        .search-bar > div input {
            width: calc(100% - 90px);
            margin: 0;
            float: left;
            border-radius: unset;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 16px;
            color: #464646;
        }

        .search-bar > div input::placeholder {
            color: #464646;
        }

        .search-bar > div button {
            background-color: #7fca27;
            width: 90px;
            box-shadow: none;
            height: 36px;
            margin-left: -1px;
            border-radius: unset;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            margin-top: 1px;
        }

        .search-bar > div button:hover {
            cursor: pointer;
        }

        .search-bar > div button:focus {
            border: 0;
            box-shadow: none;
        }

        @media only screen and (max-width: 760px) {
            #check-mobile {
                display: none;
            }
        }

        .Noti.show .thongbao .tab {
            cursor: pointer;
        }

        .Noti.show .thongbao .contab {
            height: auto;
        }

        .bk-lb {
            background-color: #e7effe;
        }

        select {
            background-position: 95%;
        }

        .btn-size {
            width: 150px;
            height: 36px;
            padding: 5px !important;
            margin-top: 0 !important;
        }

        .popup .btn-size {
            width: 100px;
        }

        #btnShowPopup3 + div.modal .close {
            position: absolute;
            right: 5px;
            float: none;
            outline: none;
            font-size: 30px;
            width: 30px;
            opacity: 0.7;
            height: 30px;
        }

        #btnShowPopup3 + div.modal .modal-dialog {
            top: 50%;
            margin-top: -169px;
        }

        .ui-autocomplete {
            margin-left: -10px !important;
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 300px;
            height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            border-radius: 0px 0px 8px 8px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1000;
        }

        .menudown .menu-chevron-left {
            width: 32px;
            height: 22px;
            background-image: url(/Contents/images/Navigation/dauloz.svg);
            background-position: center;
            background-repeat: no-repeat;
        }

        .menudown .menu-chevron-right {
            width: 32px;
            height: 22px;
            background-image: url(/Contents/images/Navigation/daunho.svg);
            background-position: center;
            background-repeat: no-repeat;
        }

        .menudrpdown-icon {
            float: left;
        }

        .LinkWeb {
            width: 16px;
            height: 16px;
            position: absolute;
            background-image: url(/Contents/images/Navigation/IconLink.svg);
            background-position: center;
            background-repeat: no-repeat;
            right: 10px;
        }

        .LinkWebMenuDown {
            width: 38px;
            height: 22px;
            position: absolute;
            background-image: url(/Contents/images/Navigation/IconLink.svg);
            background-position: center;
            background-repeat: no-repeat;
            right: 6px;
        }

        .menu-chevron-down {
            height: 20px;
            width:20px;
            background-image: url(/Contents/images/menuuparrow.svg);
            background-position: center;
            background-repeat: no-repeat
        }

        .menu-chevron-up {
            height: 20px;
            width: 20px;
            background-image: url(/Contents/images/menudownarrow.svg);
            background-position: center;
            background-repeat: no-repeat
        }

        .select2-container--default .select2-selection--single, .select2-selection .select2-selection--single {
            border: 1px solid #d2d6de;
            border-radius: 5px;
            padding: 6px 12px;
            height: 34px;
        }

        .select2-container {
            font-size: 14px !important;
            width: 300px !important;
        }

        .select2-container--default.select2-container--focus, .select2-selection.select2-container--focus, .select2-container--default:focus, .select2-selection:focus, .select2-container--default:active, .select2-selection:active {
            outline: none;
        }

        .select2-container--default .select2-selection--single, .select2-selection .select2-selection--single {
            border: 1px solid #d2d6de;
            border-radius: 5px;
            padding: 6px 12px;
            height: 34px;
        }

        .select2-container--default.select2-container--open {
            border-color: #3c8dbc;
        }

        .select2-dropdown {
            border: 1px solid #d2d6de;
            border-radius: 0;
        }

        .select2-container--default .select2-results__option--highlighted[aria-selected] {
            background-color: #3c8dbc;
            color: white;
        }

        .select2-results__option {
            padding: 6px 12px;
            user-select: none;
            -webkit-user-select: none;
            font-size: 14px;
        }

        .select2-container .select2-selection--single .select2-selection__rendered {
            padding-left: 0;
            padding-right: 0;
            height: auto;
            margin-top: -4px;
        }

        .select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {
            padding-right: 6px;
            padding-left: 20px;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 28px;
            right: 3px;
        }

            .select2-container--default .select2-selection--single .select2-selection__arrow b {
                margin-top: 0;
            }

        .select2-dropdown .select2-search__field, .select2-search--inline .select2-search__field {
            border: 1px solid #d2d6de;
        }

            .select2-dropdown .select2-search__field:focus, .select2-search--inline .select2-search__field:focus {
                outline: none;
            }

        .select2-container--default.select2-container--focus .select2-selection--multiple, .select2-container--default .select2-search--dropdown .select2-search__field {
            border-color: #3c8dbc !important;
        }

        .select2-container--default .select2-results__option[aria-disabled=true] {
            color: #999;
        }

        .select2-container--default .select2-results__option[aria-selected=true] {
            background-color: #ddd;
        }

        .select2-container--default .select2-results__option[aria-selected=true], .select2-container--default .select2-results__option[aria-selected=true]:hover {
            color: #444;
        }

        .select2-container--default .select2-selection--multiple {
            border: 1px solid #d2d6de;
            border-radius: 0;
        }

        .select2-container--default .select2-selection--multiple:focus {
            border-color: #3c8dbc;
        }

        .select2-container--default.select2-container--focus .select2-selection--multiple {
            border-color: #d2d6de;
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice {
            background-color: #3c8dbc;
            border-color: #367fa9;
            padding: 1px 10px;
            color: #fff;
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
            margin-right: 5px;
            color: rgba(255,255,255,0.7);
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
            color: #fff;
        }

        .select2-container .select2-selection--single .select2-selection__rendered {
            padding-right: 10px;
        }

        .selectRequest {
            border-top: solid 1px;
            overflow: hidden;
            border-radius: 5px;
            border: solid 1px #cfcfcf;
            border-collapse: unset;
        }

        .selectRequest td {
            border-bottom: 1px solid #BFBFBF;
            background-color: #F8F8F8;
            width: 400px;
            height: 30px;
            padding-left: 10px;
        }

        .selectRequest tr:last-child td {
            border-bottom: none;
        }

        #hideFlexAppDownload {
            position: fixed;
            top: 0;
            width: 100%;
            display: none;
            z-index: 129;
        }

        #btnAppDownload {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-gap: 0 10px;
            background: #e9e9e9;
            font-weight: bold;
            height: 6vh;
        }

        .googleWorkspaceChild {
            font-size: 14px;
        }

        .dataTable input[type='checkbox'] {
            transform: scale(1.5);
        }

        #menu-page-search {
            background-color: #EFF0F5 !important;
        }

        .khuyenmai.new {
            background-image: url('../../Contents/images/KhuyenMai/new_icon.svg');
        }

        #tichdiemdoiqua {
            position: absolute;
            top: 0;
            right: calc(100% - 500px);
            top: calc(100% - 228px);
            display: none;
            width: 414px;
            min-height: 50px;
            padding: 20px;
            text-align: left;
            background: #3F85F5;
            border-radius: 4px;
            color: #FFF;
        }

        #closetichdiem {
            font-size: 16px;
            float: right;
            background-color: #3F85F5;
            color: white;
            border: 1px solid;
            width: 96px;
            height: 36px;
            border-radius: 10px;
            margin-top: 16px;
        }

        #tichdiemdoiqua:before {
            position: absolute;
            display: block;
            content: '';
            top: calc(100% - 42px);
            width: 10px;
            height: 10px;
            margin-left: -25px;
            background: #3F85F5;
            transform: rotate(-136deg);
        }

        #AADIV38 {
            display: none;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 129;
            background-color: white;
            animation-duration: 0.75s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-name: fade-in;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .header .search-bar {
            display: table;
            float: left;
            margin-top: 0px;
            margin-left: 10px;
            align-items: center;
            width: calc(100% - 900px);
            min-width: 300px;
        }

        @media only screen and (max-width: 768px) {
            .search-bar {
                display: none !important;
            }
        }

        .matbaoWorkspaceChild {
            font-size: 14px;
        }

        .matbaoWorkspaceChild a:hover {
            font-weight: normal;
        }

        .xemcoupon:hover {
            background-color: #619e19 !important;
            color: #FFFFFF;
        }

        #gobackUpgrade:hover {
            border-color: #FC4649;
        }

        .support-review-logo {
            background-image: url('../../Contents/images/Dashboard/SupportReviewMB.svg');
            width: 100%;
            height: 100px;
            background-repeat: no-repeat;
            background-position-x: center;
        }

        #change_support_request:hover {
            color: white;
        }

        .mbWorkSpaceMenu:hover {
            font-weight: normal !important;
        }

        .tx-overslide {
            animation: scrolltx-overslide 10s linear infinite;
        }

        @keyframes scrolltx-overslide {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .animation-name {
            display: inline-block;
        }

        .check-vali-logo {
            width: 14px;
            height: 14px;
            position: absolute;
            top: 32px;
            left: 24px;
        }
        .introjs-prevbutton {
            display: none;
        }

        .introjs-right {
            left: 310px !important;
        }
    </style>
    <script async=async src=\"https://www.googletagmanager.com/gtag/js?id=UA-60799117-5\"></script>
    <script>
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
            if (!location.href.includes(\"dashboard/mobile-app\")) {
                location.href = \"/dashboard/mobile-app\";
            }
        }
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-60799117-5');
    </script>

    <script>
        //bản đồ nhiệt hotjar
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1812778, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

        //bản đồ nhiệt clarity
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = \"https://www.clarity.ms/tag/\" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, \"clarity\", \"script\", \"jqq31e1627\");
    </script>
    <script>/* Mắt Bão Manager TOP */ var k = decodeURIComponent(document.cookie), ca = k.split(';'), psc = \"\"; for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1); if (c.indexOf(\"adcapban\") == 0) psc += (psc == \"\" ? \"\" : \",\") + c.replace(\"adcapban\", \"\").replace(\"=\", \",\"); } var s = document.createElement(\"script\"); s.src = \"https://manage.axys.group/ser.php?t=AADIV38\" + String.fromCharCode(38) + \"f=38\" + String.fromCharCode(38) + \"psc=\" + psc; document.head.appendChild(s);</script>
</head>
<body>
    <div id=\"check-mobile\"></div>
    <div id=\"AADIV38\"></div>
    <div class=\"header\" style=\"top:0;display:block\">
        <div class=\"leftlan\">
            <a class=\"logo\" href=\"/dashboard/\"><img alt=\"Mắt Bão\" src=\"https://hatex.vn/public/upload/files/member_upload/h17843/files/Logo%20Viet%20ISO.jpg\" /></a>
            <div class=\"drop font14\">
                <div id=\"drlLang\" class=\"select\" style=\"padding-left: 0;padding-right: 10px;\" onclick=\"checkDropLang();\">
                    <span></span>
                    <select style=\"background: none !important;border:0px;outline:none;\" class=\"selectLanguage\" id=\"languageSelect\">
                        <option value=\"VI\">Tiếng Việt</option>
                        <option value=\"EN\">English</option>
                    </select>
                    <input type=\"hidden\" value=\"VN\" />
                </div>
            </div>

        </div>
        <div class=\"search-bar\" id=\"search_bar\">
            <div>
                <input type=\"text\" id=\"menu-page-search\" class=\"form-control\" placeholder=\"Tìm kiếm nhanh\" />
                <button style=\"border: unset;\" onclick=\"searchpagemain()\">
                    <?xml version=\"1.0\" encoding=\"utf-8\" ?>
                    <svg fill=\"#FFFFFF\" width=\"20px\" height=\"20px\" style=\"margin-top: -5px;\" viewBox=\"0 0 1920 1920\" xmlns=\"http://www.w3.org/2000/svg\">
                        <path d=\"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z\" fill-rule=\"evenodd\" />
                    </svg>
                </button>
            </div>
        </div>
        <div class=\"righacc\">
            <div class=\"showWiki\">
                <a class=\"wiki\" href=\"https://wiki.matbao.net/\" target=\"_blank\"></a>
            </div>
            <div class=\"Noti\" onclick=\"checkshowNoti();\">
                <a class=\"bell\"></a><span class=\"alert\" id=\"noticeRingBell\"></span>
                <div class=\"thongbao\">
                    <span class=\"title\">Th&#244;ng b&#225;o</span>
                    <div class=\"tab\">
                        <a id=\"formsys\" class=\"active\" data-tab=\"1\">Từ hệ thống <span id=\"noticeForSys\"></span></a>
                        <a id=\"foryou\" class=\"notactive\" data-tab=\"2\">Cho bạn <span id=\"noticeForYou\"></span></a>
                    </div>
                    <div class=\"contab\" style=\"margin-top: -6px;\">
                        <ul data-tab=\"1\" id=\"showNoticeForSys\" class=\"active\"></ul>
                        <ul data-tab=\"2\" id=\"showNoticeForYou\" class=\"\"></ul>
                        <div class=\"col-md-12 text-center\" style=\"padding-bottom:5px;\">
                            <a href=\"/dashboard/notification/\">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class=\"Account\" onclick=\"checkHyper();\">
                <div class=\"myinfo actived\">

                    <img class=\"ava\" alt=\"avatar\" src=\"https://manage.matbao.net/Contents/images/Navigation/avatar.svg\" />
                    <div class=\"name font14\">
                        <div class=\"animation-name tx-overslide\">C&#244;ng ty Cổ phần Du lịch &amp; Dịch vụ H&#242;n Gai - Chi nh&#225;nh Quảng Ninh </div>
                    </div>
                </div>
                <span id=\"myhyperlynk\" class=\"hyperlynk\">
                    <a href=\"/users/account/\">C&#224;i đặt t&#224;i khoản</a>
                    <a href=\"/billing\">Tổng hợp giao dịch</a>
                    <a href=\"/users/logoff/\">Đăng xuất</a>
                </span>
            </div>
        </div>
    </div>
    <div class=\"leftmenu cloze\">
        <ul class=\"menuup\">
            <li>
                <a href=\"/dashboard/\"><i class=\"icon Home\"></i><span style=\"padding-left:8px;\">Trang chủ</span></a>
            </li>
            <li class=\"limainsingle\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Domain domain-count\"></i><span style=\"padding-left:8px;\">T&#234;n miền</span></a>
                <ul>
                    <li class=\"onlyTog\"><a><span>T&#234;n miền</span></a></li>
                    <li><a href=\"/domains/\"><span>Quản l&#253;</span></a></li>
                        <li><a href=\"https://www.matbao.net/ten-mien/dang-ky-ten-mien.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        <li><a href=\"https://www.matbao.net/ten-mien/chuyen-doi-nha-cung-cap.html\" target=\"_blank\"><span>Chuyển về Mắt B&#227;o </span><i class=\"LinkWeb\"></i></a></li>
                </ul>
            </li>
            <li class=\"limain firstguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Hosting hostingservice-count\"></i><span style=\"padding-left:8px;\">Dịch vụ lưu trữ</span></a>
                <ul class=\"openguide1\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Cloud Hosting</span><u class=\"hosting-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-hosting/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/hosting/cloud-hosting.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Wordpress</span><u class=\"wordress-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-wordpress/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/hosting/cloud-wordpress-hosting.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Cloud Server</span><u class=\"server-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-may-chu/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/server/cloud-server.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Mắt B&#227;o WS (web)</span><u class=\"chili-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-chili/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"javascript:void(0);\" class=\"serviceAdvisory\" data-product-code=\"Chili\"><span>Tư vấn dịch vụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class=\"limain secondguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Email emailandwsservice-count\"></i><span style=\"padding-left:8px;\">Email & WorkSpace</span></a>
                <ul class=\"openguide2\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Microsoft 365</span><u class=\"microsoft-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-office-365/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/office-365.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Google Workspace</span><u class=\"google-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-google-workspace/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/google-workspace.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Mắt B&#227;o Workspace</span><u class=\"matbao-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-matbaoworkspace/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/mat-bao-workspace.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Email</span><u class=\"email-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-email/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/email.html\" target=\"_blank\"><span>Đăng k&#253; Email Pro v4</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li class=\"limainsingle\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon SSL ssl-count\"></i><span style=\"padding-left:8px;\">Bảo mật SSL</span></a>
                <ul>

                    <li><a href=\"/services/dich-vu-ssl/\"><span>Quản l&#253;</span></a></li>
                    <li><a href=\"https://tool.matbao.support/SSL\" target=\"_blank\"><span>C&#244;ng cụ</span><i class=\"LinkWeb\"></i></a></li>
                        <li><a href=\"https://www.matbao.net/bao-mat-website/chung-chi-ssl.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                </ul>
            </li>
            <li class=\"limain thirdguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Security sercurityservice-count\"></i><span style=\"padding-left:8px;\">H&#243;a đơn &amp; Chữ k&#253; số</span></a>
                <ul class=\"openguide3\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Chữ k&#253; số - CA</span><u class=\"chukyso-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-hsm/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/chu-ky-so-mat-bao-ca.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>H&#243;a đơn điện tử</span><u class=\"einvoice-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-einvoice/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"javascript:void(0);\" class=\"serviceAdvisory\" data-product-code=\"MBInvoice\"><span>Tư vấn dịch vụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li class=\"limain fourthguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon otherservice utilitieservice-count\"></i><span style=\"padding-left:8px;\">Tiện &#237;ch</span></a>
                <ul class=\"openguide4\">
                    <li><a href=\"/services/dich-vu-khac/\"><span style=\"padding-left:45px;\">Dịch vụ kh&#225;c</span><u class=\"other-service-count\"></u></a></li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Canvato</span><u class=\"canvato-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-canvato/\"><span>Quản l&#253;</span></a></li>
                            <li><a href=\"https://canvato.net/email-signature/overview\" target=\"_blank\"><span>C&#244;ng cụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
        <p class=\"scroll-end\"></p>
        <ul class=\"menudown\">
            <li>
                <a href=\"/supports/dashboard/\"><i class=\"icon Hotro unover\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hỗ trợ</span></a>
            </li>
            <li class=\"myHeThong\">
                <a><span><i class=\"fa menu-chevron-left menudrpdown-icon\"></i></span><i class=\"icon Hethong unover\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hệ thống</span></a>
                <div>
                    <ul class=\"box-shadow-HeThong unover\">
                        <li class=\"onlyTog unover\"><span style=\"font-size:14px;font-weight:600;\" class=\"unover\">Hệ thống</span></li>
                            <li class=\"unover\"><a class=\"unover\" href=\"/users/account/\"><i class=\"icon Account unover\"></i><span class=\"unover\">C&#224;i đặt t&#224;i khoản</span></a></li>
                        <li class=\"unover\"><a class=\"unover\" href=\"/dashboard/notification/\"><i class=\"icon Noti unover\"></i><span class=\"unover\">Th&#244;ng b&#225;o</span></a></li>

                        


                            <li class=\"unover\"><a class=\"unover\" href=\"/users/log-session-working/\"><i class=\"icon Log unover\"></i><span class=\"unover\">Nhật k&#253; hoạt động</span></a></li>
                        <li class=\"unover\"><a class=\"unover\" href=\"https://www.matbao.net/lien-he.html\" target=\"_blank\"><i class=\"icon Lienhe unover\" style=\"background-size: 35px 23px;\"></i><span class=\"unover\">Li&#234;n hệ</span><span><i class=\"LinkWeb\" style=\"top:12px;right:18px;\"></i></span></a></li>
                    </ul>
                </div>
            </li>
                <li class=\"HosoThanhtoanParent\">
                    <a><span><i class=\"fa menu-chevron-left menudrpdown-icon\"></i></span><i class=\"icon HosoThanhtoan\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hồ sơ v&#224; thanh to&#225;n</span></a>
                    <ul class=\"box-shadow-HeThong unover\">
                        <li class=\"onlyTog unover\"><span class=\"unover\" style=\"font-size:14px;font-weight:600;\">Hồ sơ v&#224; thanh to&#225;n</span></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/Orders/\"><i class=\"icon Donhang unover\"></i><span class=\"unover\">Đơn h&#224;ng</span></a></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/contracts/\"><i class=\"icon Hopdong unover\" style=\"background-size: 35px 23px;\"></i><span class=\"unover\">Quản l&#253; hồ sơ</span></a></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/billing/\"><i class=\"icon Giaodich unover\"></i><span class=\"unover\">Tổng hợp giao dịch</span></a></li>
                                                    <li class=\"unover\">
                                <a class=\"unover\" href=\"/coupons/\">
                                    <i class=\"icon uudai unover\"></i><span class=\"unover\">Ưu đ&#227;i</span>
                                </a>

                            </li>
                    </ul>
                </li>

            <li>
                <a href=\"/reviews/\" style=\"margin-left:24px;\"><i class=\"icon Review\"></i><span style=\"padding-left:8px;\">Đ&#225;nh gi&#225;</span></a>
            </li>
        </ul>
        <a class=\"closeMenu\"><u class=\"icon\"></u></a>
        <div id=\"tichdiemdoiqua\">
            <strong style=\"font-size:18px;\">Ưu đãi mới: Tích điểm đổi quà</strong>
            <span style=\"float:right;font-size:14px;\">1/1</span>
            <span style=\"display:block;font-size:14px;margin-top:10px;\">Chương trình đặc biệt dành cho khách hàng Mắt Bão khi thực hiện các nhiệm vụ đơn giản. Tham gia làm nhiệm vụ đơn giản để tích điểm và nhận quà ngay.</span>
            <button class=\"tichdiem\" id=\"closetichdiem\" onclick=\"closepopup()\">Đã hiểu</button>
        </div>
    </div>
    <div class=\"rightcontent\">
        <div class=\"contener\">
            <!-- Meta -->
<input type=\"text\" class=\"hidden\" id=\"userEncrypt\" value=\"ttcese+GSfPa+E4mQ9rxag==\" />
<input type=\"text\" class=\"hidden\" id=\"roleId\" value=\"true\" />
<div class=\"areaLeft\">
    <div class=\"xbox\">
        <div class=\"col-md-4 no-padding\">
                <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Navigation/HosoThanhtoan_color.svg\" style=\"height:55px;\" />
                    <b id=\"countHoSoThanhToan\" class=\"loading-count\"></b>
                    <span>Hồ sơ cần ho&#224;n tất <a class=\"mbtooltip-normal\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"Bao gồm hợp đồng mới tạo, hợp đồng bị từ chối duyệt do chữ k&#253; chưa hợp lệ v&#224; bản khai t&#234;n miền chưa k&#253;.\"></a></span>
                    <a class=\"xlink\" href=\"/contracts/\">Xem</a>
                </div>
                            <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/thanhtoan.svg\" />
                    <b class=\"count-order-processing loading-count\"></b>
                    <span>Đơn h&#224;ng chờ thanh to&#225;n</span>
                    <a class=\"xlink\" href=\"/Orders/?not_payment=True\">Xem</a>
                </div>
                    </div>
        <div class=\"col-md-4 bor-right bor-left no-padding\">
            <div class=\"record\">
                <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/tenmien.svg\" />
                <b class=\"count-domain loading-count\"></b>
                <span>T&#234;n miền cần gia hạn</span>
                <a class=\"xlink\" href=\"/domains/?expire=True\">Xem</a>
            </div>
                <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/dichvu.svg\" style=\"height:55px;\" />
                    <b class=\"count-service loading-count\"></b>
                    <span>Dịch vụ cần gia hạn</span>
                    <a class=\"xlink\" href=\"/services/?expire=True\">Xem</a>
                </div>
        </div>
        <div class=\"col-md-4 no-padding 0-tk\">
            <div class=\"reavar\">
                <b>Bạn đang<br />không có<br />yêu cầu<br />hỗ trợ<br />nào!</b>
                <a class=\"btn openPopR\">Tạo y&#234;u cầu hỗ trợ</a>
            </div>
        </div>
        <div class=\"col-md-4 no-padding has-tk hidden\">
            <div class=\"record\">
                <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/Hotro.svg\" />
                <b class=\"count-ticket loading-count\"></b>
                <span>Yêu cầu hỗ trợ</span>
                <a class=\"xlink\" href=\"/supports/view-support-requested/\">Xem</a>
            </div>
            <div class=\"request\">
                <b>Bạn có thể tạo yêu cầu nhanh tại đây:</b>
                <a class=\"btn openPopR\">Tạo yêu cầu hỗ trợ</a>
            </div>
        </div>
    </div>
    <a class=\"col-md-12 no-padding xbox\" href='https://matbao.in/hop-dong-dien-tu/?utm_source=idmatbaonet&utm_medium=banner&utm_campaign=hopdongdientu' target='_blank' style=\"color: #444; text-decoration: none; min-height: unset;display:block\">
        <img class=\"img-banner-resize\" srcset=\"https://resource.matbao.net/idportal/image/banner/ecotract_700.jpg 1268w, https://resource.matbao.net/idportal/image/banner/ecotract_900.jpg 1600w, https://resource.matbao.net/idportal/image/banner/ecotract_1200.jpg 6000w\" alt=\"ecotract\">
    </a>
    <a class=\"gbox hidden\" href='https://www.matbao.net/uu-dai/uu-dai-hang-thang.html?utm_source=idmatbaonet&utm_medium=thongbao&utm_campaign=kmgiangsinh' target='_blank' style=\"color:#444;text-decoration:none;\">
        <span class=\"special\">Đặc biệt</span>
        Mắt Bão gửi đến Quý khách hàng thông tin CTKM đặc biệt dịp cuối năm 2023 lên đến 50% và hoàn tiền 100k khi thanh toán online. Tìm hiểu thêm <span style=\"text-decoration:underline;color:#1E74E8;\">TẠI Đ&#194;Y</span>
    </a>
    <div class=\"col-md-12 no-padding\">
        <div class=\"col-md-12 no-padding\">
            <div class=\"xbox\" style=\"height:136px;\">
                <div class=\"col-md-6 no-padding\">
                    <div style=\"border-right:1px solid #ccc;height:90px;padding-left:30px;\">
                        <div class=\"active-fast-service--title\">
                            <p class=\"afs--size\">K&#237;ch hoạt dịch vụ nhanh</p>
                            <span>Bạn c&#243; <b class=\"afs__count-services\">0</b> <b style=\"color:#1e74e8;\">dịch vụ </b>cần k&#237;ch hoat</span>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-6 no-padding\">
                    <div class=\"div__active-fast-service\">
                        <div class=\"active-fast-service--body\" style=\"height:90px;\">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class=\"xbox\">
            <strong class=\"xtitle\">
                Ưu đ&#227;i hiện h&#224;nh
                    <a class=\"xlink no-right\" href=\"/coupons\">C&#225;c ưu đ&#227;i kh&#225;c</a>
            </strong>
            <div class=\"col-md-12 pad-bot\">
                <div class=\"a_table mar-t-5\">
                    <div class=\"tr promotion-coupon\">

                    </div>

                </div>
            </div>
        </div>
</div>
<div class=\"areaRight\">
    <div class=\"xbox\">
        <strong class=\"xtitle\">Th&#244;ng tin t&#224;i khoản<a class=\"xlink no-right\" href=\"/users/account/\">Xem chi tiết</a></strong>
        <div class=\"xcontent pad-bot\">
            <div class=\"col-md-12 no-padding\" style=\"padding-top:5px;padding-bottom:5px;\">
                <div class=\"col-md-12 no-padding\">
                            <img alt=\"da-xac-thuc\" title=\"Tài khoản đã xác thực\" src=\"https://manage.matbao.net/Contents/images/Navigation/approved_logo.svg\" height=\"16\">
                            <span style=\"color: #7fca27; font-weight: 600; max-width: calc(100% - 120px); display: inline-flex;\">Tài khoản đã xác thực!</span>
                                <span class=\"float-right btn-verify\" style=\"color: #1E74E8; text-decoration: underline; font-weight: normal; cursor:pointer;\">Xác thực CKS</span>

                </div>
            </div>
            <div class=\"block\" style=\"padding-bottom:15px;\">
                <span class=\"xlabel float-left\">M&#227; PIN hỗ trợ kỹ thuật</span>
                <a class=\"mbtooltip-normal\" style=\"margin:9px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"Khi bạn gọi đến tổng đ&#224;i hỗ trợ kỹ thuật &lt;strong&gt;19001830&lt;/strong&gt;, bạn chỉ cần đọc đ&#250;ng &lt;strong&gt;M&#227; PIN&lt;/strong&gt; k&#232;m với địa chỉ &lt;strong&gt;Email&lt;/strong&gt; hoặc &lt;strong&gt;số điện thoại&lt;/strong&gt; để được hỗ trợ một số vấn đề cần x&#225;c minh đ&#250;ng chủ dịch vụ y&#234;u cầu.\"></a>
                <img class=\"img-spiner-pin\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top:-7px;\">
                <span><strong id=\"PINCode\" style=\"color:red;position:relative; font-size:20px;\"></strong></span>
                <a class=\"xcontent__PINCreate\" id=\"createPINCode\" href=\"javascript:void(0)\">Tạo mới</a>
            </div>
        </div>

        <div class=\"xcontent\">
            <div class=\"xform\">
                <div class=\"block\" style=\"padding-bottom:3px;\">
                    <a class=\"xlabel float-left\" href=\"/billing/transactionhistory/?returnPath=homepage\">T&#224;i khoản Ch&#237;nh</a>
                    <a class=\"mbtooltip-normal\" style=\"margin:15px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"L&#224; tiền được bạn nạp v&#224;o.\"></a>
                    <button id=\"tkc\"><img alt=\"0\" width=\"20\" src=\"https://id.axys.group/Content/images/eyes.svg\" style=\"margin-bottom: 5px;\"></button>
                    <img class=\"img-spiner-main-acount\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top: -7px; display: none;\">
                </div>
                <div class=\"block pad-bot\">
                    <input type=\"password\" class=\"xinput noclock\" id=\"amount-main\" value=\"123456\" readonly />
                        <a class=\"xbtn bor\" href=\"/cart/addfund/\">
                            <img width=\"20\" height=\"20\" alt=\"nut\" src=\"https://manage.matbao.net/Contents/images/Dashboard/money.svg\" /> Nạp tiền
                        </a>
                </div>
\t\t\t\t <div class=\"block\" style=\"padding-bottom:3px;\">
                    <a class=\"xlabel float-left\" href=\"/billing/promotionaccounthistory/?returnPath=homepage\">Điểm thưởng MB</a>
                    <a class=\"mbtooltip-normal\" id=\"tienkhuyenmai\" style=\"margin:15px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"&lt;p style=&#39;font-weight:bold;margin-bottom:5px;&#39;&gt;K&#237;nh gửi Qu&#253; Kh&#225;ch H&#224;ng,&lt;/p&gt;&lt;p style=&#39;margin-bottom:5px;&#39;&gt;Ch&#250;ng t&#244;i xin tr&#226;n trọng th&#244;ng b&#225;o rằng chương tr&#236;nh Điểm thưởng MB sẽ tạm ngưng hoạt động từ ng&#224;y 4.01.2025. Quyết định n&#224;y được đưa ra nhằm mục đ&#237;ch cải thiện hệ thống v&#224; n&#226;ng cao trải nghiệm của Qu&#253; Kh&#225;ch trong tương lai. Ch&#250;ng t&#244;i cam kết sẽ bảo lưu điểm Qu&#253; kh&#225;ch đang c&#243; v&#224; thời gian sử dụng của c&#225;c Điểm thưởng n&#224;y.
Dự kiến hoạt động lại v&#224;o cuối Qu&#253; I năm 2025. Thời gian trở lại cụ thể của chương tr&#236;nh sẽ được th&#244;ng b&#225;o sớm nhất c&#243; thể.
Xin ch&#226;n th&#224;nh cảm ơn Qu&#253; Kh&#225;ch đ&#227; tin tưởng v&#224; lựa chọn Mắt B&#227;o!&lt;/p&gt;&lt;p style=&#39;margin-bottom:5px;&#39;&gt;Tr&#226;n trọng.&lt;/p&gt;&lt;span style=&#39;font-size:18px;font-weight:600;color:#FFFFFF;&#39;&gt;Điểm thưởng MB&lt;/span&gt;&lt;ul style=&#39;padding-left:20px;padding-top:10px;margin-bottom:0;font-size:14px;&#39;&gt;&lt;li&gt;L&#224; điểm ph&#225;t sinh do c&#225;c chương tr&#236;nh khuyến m&#227;i hoặc t&#237;ch lũy dựa v&#224;o hạng thẻ th&#224;nh vi&#234;n hoặc từ việc ho&#224;n th&#224;nh c&#225;c nhiệm vụ như đ&#225;nh gi&#225; y&#234;u cầu, dịch vụ,... &lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Thời hạn sử dụng Điểm thưởng MB l&#224; 12 th&#225;ng kể từ ng&#224;y ph&#225;t sinh giao dịch điểm.&lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Điểm thưởng MB sử dụng cho việc thanh to&#225;n c&#225;c dịch vụ tại trang id.matbao.net trừ t&#234;n miền Việt Nam. &lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Ưu đ&#227;i t&#237;ch lũy thưởng l&#234;n đến 2,5% khi đăng k&#253;, gia hạn dịch vụ tại Mắt B&#227;o, tham khảo &lt;a href=&#39;https://www.matbao.net/uu-dai/hang-the-thanh-vien.html&#39; target=&#39;_blank&#39;&gt; chi tiết chương tr&#236;nh&lt;/a&gt;.&lt;/li&gt;&lt;/ul&gt;\"></a>
                    <button id=\"km\"><img alt=\"0\" width=\"20\" src=\"https://id.axys.group/Content/images/eyes.svg\" style=\"margin-bottom: 5px;\"></button>
                    <img class=\"img-spiner-point\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top:-7px;display:none;\">
                </div>
                <div class=\"block pad-bot\">
                    <input type=\"password\" class=\"xinput noclock\" id=\"promo\" value=\"123456\" readonly />
                </div>
            </div>
        </div>
    </div>
    <div class=\"xbox\">
        <div class=\"col-md-12 no-padding tabNotification\">
            <span class=\"title\">Th&#244;ng b&#225;o</span>
            <ul>
                <li id=\"fromSystems\" class=\"active\" data-tab=\"tab-1\">Từ hệ thống</li>
                <li id=\"forYou\" class=\"no-pad-left\" data-tab=\"tab-2\">Cho bạn</li>
            </ul>
        </div>
        <div class=\"contNotification\">
            <ul class=\"col-md-12 no-padding tab-content active thongbaosTable_Sys\" id=\"tab-1\"></ul>
            <ul class=\"col-md-12 no-padding tab-content thongbaosTable\" id=\"tab-2\"></ul>
            <div class=\"col-md-12 text-left\" style=\"padding: 0 15px 15px 25px;\">
                <a href=\"/dashboard/notification/\"><u>Xem thêm</u></a>
            </div>
        </div>

    </div>
</div>



<div id=\"popup_matbao_workspace\" class=\"myPopup small matbao-popup\" data-click=\"popup\" data-change=\"main\" data-index=\"0\" data-islogin=\"true\" data-isclose=\"false\" data-storage=\"\" data-start='2024-03-20' data-end='2024-05-31' data-cookie=\"_popup_matbao_workspace\" style=\"display: none; z-index: 1000;\">
    <div class=\"popup\" onclick=\"window.open('https://www.matbao.net/mat-bao-workspace.html?utm_source=idmatbao&utm_medium=pop-up&utm_campaign=matbaoworkspace','_blank');\" style=\"width: auto; padding: 0; border-radius: 20px;\">
        <a class=\"close\">
            <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">
                <title>Close</title>
                <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">
                    <g transform=\"translate(-1034.000000, -397.000000)\" fill-rule=\"nonzero\" fill=\"#000\">
                        <g transform=\"translate(506.000000, 362.000000)\">
                            <g transform=\"translate(43.000000, 35.000000)\">
                                <g transform=\"translate(485.000000, 0.000000)\">
                                    <path d=\"M19.7633984,0.236179337 C19.4478906,-0.0787134503 18.9363672,-0.0787134503 18.6208594,0.236179337 L0.236640625,18.5845224 C-0.0788671875,18.8994152 -0.0788671875,19.4099415 0.236640625,19.7248343 C0.394375,19.8823392 0.601171875,19.9610136 0.807929688,19.9610136 C1.0146875,19.9610136 1.22144531,19.8823002 1.37921875,19.7247953 L19.7633984,1.37645224 C20.0788672,1.06159844 20.0788672,0.551072125 19.7633984,0.236179337 Z\" id=\"Path\" />
                                    <path d=\"M19.7633594,18.5845614 L1.37914062,0.236218324 C1.06367187,-0.0786744639 0.552109375,-0.0786744639 0.236640625,0.236218324 C-0.0788671875,0.551072125 -0.0788671875,1.06159844 0.236640625,1.37649123 L18.6208594,19.7248733 C18.7785937,19.8823392 18.9853906,19.9610526 19.1921484,19.9610526 C19.3989062,19.9610526 19.6057031,19.8823392 19.7633984,19.7249123 C20.0788281,19.4099805 20.0788281,18.8994542 19.7633594,18.5845614 Z\" id=\"Path\" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <div class=\"popup-body\">
            <img src=\"http://resource.matbao.com/IDPortal/Image/Popup/matbao_workspace.gif\" />
        </div>
    </div>
</div>

<div id=\"popup_support_review_not_rating\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
    <div class=\"popup\" style=\"height: 302px; padding: 20px; width: 348px;\">
        <a class=\"close\" onclick=\"closePopupSupport()\" style=\"margin-right:14px;margin-top:8px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;width:15px;\" /></a>
        <div class=\"detail text-center\">
            <div class=\"support-review-logo\"></div>
            <div style=\"margin-top:18px;\"><span style=\"font-size:18px;font-weight:600;\">Bạn có <span style=\"color: #EA4649;\"><span class=\"not-review-count\"></span> yêu cầu chưa đánh giá</span>!</span></div>
            <div style=\"margin-top:6px;font-size:14px;font-weight:500;\">
                <span>Vui lòng cho chúng tôi biết cảm nhận của</span>
                <span>bạn, để chúng tôi phục vụ bạn tốt hơn.</span>
            </div>
            <div style=\"margin-top:28px;text-align:center;\">
                <a href=\"/supports/view-support-requested/\" onclick=\"closePopupSupport()\" class=\"btn\" id=\"change_support_request\" style=\"font-size: 12px; font-weight: 600; border-radius: 8px; background-color: #1E74E8;\">Xem các yêu cầu đã gửi</a>
            </div>
        </div>
    </div>
</div>
    <div id=\"ekycInstuct\">
        <span style=\"display:block;font-size:14px;\">Việc xác thực <span>Chữ k&#253; số</span> sẽ giúp bạn hoàn tất hồ sơ nhanh hơn. <br /> Xem hướng dẫn chi tiết <a href=\"https://wiki.matbao.net/huong-dan-xac-thuc-tai-khoan-khach-hang-truc-tuyen/#doi-voi-khach-hang-la-to-chuc\" target=\"_blank\" style=\"color:white;text-decoration:underline;\">tại đây.</a></span>
        <button class=\"closeEkyc\" id=\"closeInstructEkyc\" onclick=\"closepopupEkyc()\">ĐÃ HIỂU</button>
    </div>

        </div>
    </div>
    <div class=\"bottom-popup-group\">
        <div class=\"gopy_home\">
    <a class=\"gopy_btn\">G&#243;p &#253; trải nghiệm</a>
    <div class=\"gopy_content\" style=\"display:none;\">
        <a class=\"close\"></a>
        <strong>G&#243;p &#253; trải nghiệm</strong>
        <div class=\"col-md-12 no-padding\" style=\"padding: 15px 0 10px 0;\">
            <span>Đầu ti&#234;n h&#227;y cho ch&#250;ng t&#244;i biết g&#243;p &#253; của bạn về vấn đề g&#236;?</span>
            <div class=\"col-md-12 no-padding gopy__chklist\">

            </div>
        </div>
        <textarea id=\"txtGopy\" name=\"txtGopy\" placeholder=\"Chia sẻ th&#234;m với ch&#250;ng t&#244;i về g&#243;p &#253; của bạn v&#224; đừng qu&#234;n đ&#237;nh k&#232;m hỉnh ảnh li&#234;n quan bạn nh&#233;!\" rows=\"5\"></textarea>
        <div class=\"col-md-12 no-padding formComment--ChooseFile\" style=\"padding-bottom:10px;\">
            <div class=\"formComment__group\">
                <p class=\"formComment__label\" style=\"width:100% !important;\">
                    Tập tin đ&#237;nh k&#232;m:
                </p>
                <div class=\"formComment__control\">
                    <label for=\"formComment__file\" class=\"formComment__file ChooseFBFile\" style=\"height:36px; line-height: 36px;\">Tải l&#234;n</label>
                    <input name=\"FBFile\" type=\"file\" class=\"form-control FBFile\" data-msg-error-title=\"Upload Error!\" style=\"display:none;\" multiple=multiple accept=\".png, .jpg, .jpeg\" />
                </div>
            </div>
        </div>
        <em><b>Tối đa 5 tập tin</b> đính kèm và tổng dung lượng <b>không quá 4MB </b>với định dạng JPG và PNG.</em>
        <div class=\"col-md-12 no-padding frame_previewFile\" style=\"display:none;\">
            <div class=\"col-md-12 no-padding list-fileGopY\" style=\"margin-bottom:0;\">
            </div>
        </div>
        <u class=\"lblMSG\" style=\"color:red;\"></u>
        <button class=\"gopy_send\" id=\"btnSendGopy\">Gửi g&#243;p &#253;</button>
    </div>
</div>

    </div>
    <!--file Upload temp-->
    <input type=\"file\" class=\"hidden\" id=\"fileUploadTemp\" />
    <!--end-->

    <div class=\"nowloading\">
        <img alt=\"loading\" src=\"https://manage.matbao.net/Contents/images/Navigation/loading.svg\" />
        <b>Xin chờ giây lát...</b>
    </div>

    <div id=\"formServiceAdvisory\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width:600px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformServiceAdvisory\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Tư vấn Chili</span>
            <div class=\"detail bor-top pad-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\">
                        <p style=\"margin-bottom:10px;\">Bạn cần <b>chọn người liên hệ và giờ tư vấn</b>, nhân viên <span class=\"product-name\"></span> sẽ liên hệ để tư vấn dịch vụ cho bạn.</p>
                    </div>
                    <p style=\"margin-bottom:10px;\"><b>Chọn người liên hệ</b></p>
                    <div class=\"col-md-12 no-padding\" id=\"ServiceContact\" style=\"margin-bottom:10px;\">
                        <img class=\"afs--loading\" alt=\"1\" src=\"https://manage.matbao.net/Contents/images/Spinner-1s.gif\" />
                    </div>
                    <a class=\"st-newContact\" href=\"javascript:void(0);\" id=\"addServiceNewContact\">Thêm người liên hệ</a>
                    <p style=\"margin-bottom:10px;display: block;padding-top: 10px;\"><b>Chọn khung giờ liên hệ</b></p>
                    <div class=\"col-md-12 no-padding\">
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" checked=checked value=\"09:00 - 10:30\" /><b>09h - 10h30</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"10:30 - 12:00\" /><b>10h30 - 12h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"13:30 - 15:00\" /><b>13h30 - 15h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"15:00 - 17:00\" /><b>15h - 17h</b></label>
                        </div>
                    </div>
                    <div class=\"col-md-12 no-padding div__SendInfo3Parties\" style=\"margin-top:-5px;padding-bottom:10px;\">
                        <input type=\"checkbox\" id=\"ckbServiceAdvisoryApprove\" name=\"ckbChiliApprove\" />
                        <label for=\"ckbServiceAdvisoryApprove\" class=\"SendInfo3Parties__label\">Tôi đồng ý việc gửi thông tin liên hệ sang nhà cung cấp dịch vụ mà tôi lựa chọn.</label>
                    </div>
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <a id=\"btnConfirmServiceAdvisory\" class=\"btn disabled fr-bt\" data-email=\"\" data-linkedId=\"-1\" data-cpcode=\"\" data-description=\"Tư vấn về dịch vụ\" data-whereclick=\"\" data-phone=\"\" style=\"margin-left:0;float:left;\">Xác nhận</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formAddNewServiceContact\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformAddServiceContact\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Thêm người liên hệ</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:15px;\">Nhập thông tin người liên hệ mới theo mẫu bên dưới</p>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Họ và tên</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtNameService\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Số điện thoại</label>
                        <input type=\"text\" value=\"\" id=\"txtPhoneService\" maxlength=\"10\" placeholder=\"\" onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Email</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtEmailService\" />
                    </div>
                </div>
            </div>
            <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                <a id=\"btnAddNewServiceConfirm\" class=\"btn confirmCP fr-bt\">Xác nhận</a>
            </div>
        </div>
    </div>

    <div id=\"formServiceAdvisorySuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/checked.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký thành công</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <p style=\"margin-bottom:10px;\">Nhân viên <span class=\"product-name\"></span> sẽ liên hệ với bạn theo <b>thông tin:</b></p>
                        <p style=\"margin-bottom:10px;\"><b>- <span id=\"outServiceName\"></span></b> • <span id=\"outServicePhone\"></span></p>
                        <p style=\"margin-bottom:10px;\"><b>- Thời gian liên hệ từ <span id=\"outServiceTime\"></span></b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formCouponPartner\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width: 600px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Coupon từ Đối t&#225;c</span>
            <div class=\"detail bor-top pad-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\">
                        <p style=\"margin-bottom:25px;\">Bạn đ&#227; đăng k&#253; th&#224;nh c&#244;ng  <b><span id=\"title-cp\"></span></b>.</p>
                        <p style=\"margin-bottom:10px;\">Bạn cần <b>chọn người liên hệ và giờ tư vấn</b>, nhân viên <span class=\"employess\"></span> sẽ li&#234;n hệ với bạn để hướng dẫn k&#237;ch hoạt dịch vụ.</p>
                    </div>
                    <p style=\"margin-bottom:10px;\"><b>Chọn người li&#234;n hệ</b></p>
                    <div class=\"col-md-12 no-padding\" id=\"CBContact\" style=\"margin-bottom:10px;\">
                    </div>
                    <a class=\"st-newContact\" href=\"javascript:void(0);\" id=\"addNewContact\">Th&#234;m người li&#234;n hệ</a>
                    <p style=\"margin-bottom:10px;display: block;padding-top: 10px;\"><b>Chọn khung giờ li&#234;n hệ</b></p>
                    <div class=\"col-md-12 no-padding\">
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" checked=checked value=\"09:00 - 10:30\" /><b>09h - 10h30</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"10:30 - 12:00\" /><b>10h30 - 12h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"13:30 - 15:00\" /><b>13h30 - 15h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"15:00 - 17:00\" /><b>15h - 17h</b></label>
                        </div>
                    </div>
                    <div class=\"col-md-12 no-padding div__SendInfo3Parties\" style=\"margin-top:-5px;padding-bottom:10px;\">
                        <input type=\"checkbox\" id=\"ckbApprove\" name=\"ckbApprove\" />
                        <label for=\"ckbApprove\" class=\"SendInfo3Parties__label\">T&#244;i đồng &#253; việc gửi th&#244;ng tin li&#234;n hệ sang nh&#224; cung cấp dịch vụ m&#224; t&#244;i lựa chọn.</label>
                    </div>
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <a id=\"btnCPPartnerConfirm\" class=\"btn confirmCP fr-bt disabled\" data-email=\"\" data-cpcode=\"\" data-description=\"\" data-linkedId=\"-1\" data-phone=\"\" style=\"float:left;margin-left:0 !important;\">X&#225;c nhận</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formAddNewContact\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformAddNewContact\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Th&#234;m người li&#234;n hệ</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:15px;\">Nhập th&#244;ng tin người li&#234;n hệ mới theo mẫu b&#234;n dưới</p>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Họ v&#224; t&#234;n</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtName\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Số điện thoại</label>
                        <input type=\"text\" value=\"\" id=\"txtPhone\" maxlength=\"10\" onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Email</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtEmail\" />
                    </div>
                </div>
            </div>
            <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                <a id=\"btnAddNewConfirm\" class=\"btn confirmCP fr-bt\">X&#225;c nhận</a>
            </div>
        </div>
    </div>

    <div id=\"formRegisterSuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/checked.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký thành công</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <input class=\"hidden\" id=\"outEmail\" value=\"\" />
                        <input class=\"hidden\" id=\"outUserName\" value=\"MB1961543\" />
                        <p style=\"margin-bottom:10px;\">Nhân viên <span class=\"employess\"></span> sẽ liên hệ với bạn theo <b>thông tin:</b></p>
                        <p style=\"margin-bottom:10px;\"><b>- <span id=\"outName\"></span></b> • <span id=\"outPhone\"></span></p>
                        <p style=\"margin-bottom:10px;\"><b>- Thời gian liên hệ <span id=\"outTime\"></span></b></p>
                    </div>
                    <div class=\"col-md-12 no-padding\" id=\"areaForCompany\" style=\"margin-bottom: 0;\">
                        <div class=\"col-md-12 no-padding\" id=\"isAddNew\" style=\"margin-top:10px;\">
                            <p style=\"margin-bottom:5px;\">Bạn có muốn <b>thêm người này vào danh sách quản lý</b> dịch vụ không? Vai trò người này là gì?</p>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"1\" />Quản lý kỹ thuật</label>
                            </div>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"2\" />Quản lý thanh toán</label>
                            </div>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"-1\" />Không, cảm ơn!</label>
                            </div>
                        </div>
                        <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                            <a id=\"btnNewTicketUsers\" class=\"btn disabled confirmCP fr-bt\">Hoàn tất</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formRegisterFailed\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/warning.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký không thành công</span>
            <div class=\"detail\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:10px;\">
                        Đăng ký \"<span id=\"description\"></span>\" không thành công.
                    </p>
                    <span>Vui lòng liên hệ nhân viên Mắt Bão để được hỗ trợ.</span>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formGopYSuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width:600px;\">
            <a class=\"close\" style=\"margin-right:5px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;width:15px;\" /></a>
            <div class=\"detail\">
                <div id=\"frmMobile_1\" class=\"form form_gopy_pa2\">
                    <div class=\"col-md-12 no-padding text-center\" style=\"margin-bottom:0;\">
                        <span><b style=\"color:#1e74e8;display:block;margin-bottom:5px;font-size:20px;\">Gửi góp ý thành công!</b><b>Mắt Bão rất cảm ơn những góp ý của bạn</b> dành cho chúng tôi. Lưu ý rằng <b>chúng tôi sẽ không thể trả lời từng góp ý</b> của bạn, nhưng <b>chắc chắn chúng tôi sẽ ghi nhận và xử lý</b> để hoàn thiện sản phâm hơn.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"popup_verification\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;min-height: 200px;margin-top: -100px;\">
            <a class=\"close\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;\" /></a>
            <span class=\"title text-danger\" style=\"font-size: 20px; margin-bottom: 10px; padding: 0 5px;\">Kiểm tra thông tin cơ bản trước khi xác thực tài khoản bằng eKYC!</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p>
                        Vui lòng kiểm tra và cập nhật thông tin cơ bản của bạn trước khi tiến hành xác thực tài khoản bằng Chữ k&#253; số, đảm bảo những thông tin sau:
                    </p>
                    <ul>
                            <li><b>Mã số thuế</b></li>
                            <li><b>Địa chỉ</b></li>
                            <li><b>Số điện thoại, email đang sử dụng.</b></li>
                            <li><b>Ngày thành lập</b></li>
                        <li>Thay đổi các thông tin khác (nếu có).</li>
                    </ul>
                    <div class=\"col-md-12 no-padding\" style=\"text-align:right;\">
                        <a href=\"/supports/52/ho-tro?parent_module=request&linkfrom=account\" class=\"btn btn-primary\" style=\"height:auto!important; padding: 10px 20px !important; background: #1E74E8; color: #fff; font-weight: 600; font-size: 14px; border-radius: .25rem !important;\">Thay đổi thông tin</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src=\"https://manage.matbao.net/Scripts/MBID/jquery-1.10.2.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/popper.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/bootstrap.min.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/pnotify/pnotify.custom.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/Shared.js?ver=001\"></script>
    <script type=\"text/javascript\" src=\"https://manage.matbao.net/Scripts/slick.min.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/jquery.autocomplete.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/summernote.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/lang/summernote-vi-VN.js\"></script>
    <script src=\"https://manage.matbao.net/assets/vendor/select2/js/select2.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/cookie.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/custom-popup.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/intro.js\"></script>    
    <script src=\"https://code.jquery.com/ui/1.13.2/jquery-ui.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/simple-calendar.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/dashboard/dashboard.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/intro.js\"></script>
    <script type=\"text/javascript\">
        \$(document).ready(function () {
            GetPinCode();

            \$('.tabNotification ul li').click(function () {
                var tab_id = \$(this).attr('data-tab');

                \$('.tabNotification ul li').removeClass('active');
                \$('.tab-content').removeClass('active');

                \$(this).addClass('active');
                \$(\"#\" + tab_id).addClass('active');
            });
            \$(\"#tkc\").click(function () {
                if (\$(this).children(\"img\").attr(\"alt\") == \"0\") {
                    \$('.img-spiner-main-acount').fadeIn();
                    \$.ajax({
                        type: 'POST',
                        url: '/billing/get-main-acount',
                        success: function (resp) {
                            resp = \$.parseJSON(resp);
                            if (resp.Status == true) {
                                var money = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                                if (money.endsWith(\".0\")) {
                                    money = money.substring(0, money.length - 2);
                                }
                                \$('#amount-main').val(money + \" \" + \"đ\");
                                \$('#amount-main').attr(\"type\",\"text\");
                            }
                            else {
                                \$('#amount-main').val(\"0 \" + \"đ\");
                                \$('#amount-main').attr(\"type\", \"text\");
                            }
                            \$('.img-spiner-main-acount').fadeOut();
                        }
                    });
                    \$(this).children(\"img\").attr(\"alt\", \"1\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyex.svg\");
                }
                else {
                    \$(\"#amount-main\").val(\"123456\");
                    \$('#amount-main').attr(\"type\", \"password\");
                    \$(this).children(\"img\").attr(\"alt\", \"0\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyes.svg\");
                }
            });
            \$('#km').click(function () {
                if (\$(this).children(\"img\").attr(\"alt\") == \"0\") {
                    \$('.img-spiner-point').fadeIn();
                    \$.ajax({
                        type: 'POST',
                        url: '/billing/get-promotion-acount',
                        success: function (resp) {
                            resp = \$.parseJSON(resp);
                            if (resp.Status == true) {
                                var money = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                                if (money.endsWith(\".0\")) {
                                    money = money.substring(0, money.length - 2);
                                }
                                \$('#promo').val(money + \" \" + \"điểm\");
                                \$('#promo').attr(\"type\",\"text\");
                            }
                            else {
                                \$('#promo').val(\"0 \" + \"điểm\");
                                \$('#promo').attr(\"type\", \"text\");
                            }
                            \$('.img-spiner-point').fadeOut();
                        }
                    });
                    \$(this).children(\"img\").attr(\"alt\", \"1\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyex.svg\");
                } else {
                    \$(\"#promo\").val(\"123456\");
                    \$('#promo').attr(\"type\", \"password\");
                    \$(this).children(\"img\").attr(\"alt\", \"0\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyes.svg\");
                }
            });
            \$('#vw_point').one('click', function loadPoint() {
                \$.ajax({
                    type: 'get',
                    url: '/dashboard/get-point',
                    success: function (resp) {
                        resp = \$.parseJSON(resp);
                        if (resp.Status == true) {
                            var point = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                            if (point.endsWith(\".0\")) {
                                point = point.substring(0, point.length - 2);
                            }
                            \$('#tt').val(point + \" điểm\");
                        }
                        else {
                            \$('#tt').val(\"0 điểm\");
                        }
                    }
                });
            });

            if (get_cookie(\"ekycinstructure_\" + get_cookie(\"MBIDCodePortalCookieManage\")) != \"readed\") {
                setTimeout(function () {
                    \$(\"#ekycInstuct\").fadeIn();
                }, 1000);
            }
        });

        function promowillexpired() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/count-promotion-about-to-expired',
                success: function (resp) {
                    if (resp.success == true) {
                        var TaiKhoanKhuyenMaiToolttip = \$(\"#tienkhuyenmai\").attr(\"data-original-title\");
                        if (resp.data != undefined && parseInt(resp.data.totalMoney) > 0) {
                            \$(\"#tienkhuyenmai\").attr(\"data-original-title\", `<p><span>- Bạn có \${formatMoney(resp.data.totalMoney)} đồng tiền khuyến mãi hết hạn trong tháng \${resp.data.expiredMonth}</span>. Vui lòng sử dụng ngay hoặc gia hạn ưu đãi bằng cách phát sinh đơn hàng > 99.000đ (Không bao gồm VAT)</p>` + TaiKhoanKhuyenMaiToolttip);
                        }
                        else {
                            \$(\"#tienkhuyenmai\").attr(\"data-original-title\", TaiKhoanKhuyenMaiToolttip);
                        }
                    }
                    else {
                        var TaiKhoanKhuyenMaiToolttip = \$(\"#tienkhuyenmai\").attr(\"data-original-title\");
                        \$(\"#tienkhuyenmai\").attr(\"data-original-title\", TaiKhoanKhuyenMaiToolttip);
                    }
                }
            });
        }
        function rewardpointwillexpired() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/reward-point-about-to-expired',
                success: function (resp) {
                    if (resp.success == true) {
                        var diemthuongtooltip = \$(\"#diemthuong\").attr(\"data-original-title\");
                        if (resp.data != undefined && parseInt(resp.data.point) > 0) {
                            \$(\"#diemthuong\").attr(\"data-original-title\", `<p><span>- Bạn có \${resp.data.point} điểm hết hạn trong tháng \${resp.data.month}</span>. Vui lòng sử dụng ngay hoặc gia hạn ưu đãi bằng cách phát sinh đơn hàng > 99.000đ (Không bao gồm VAT)</p>` + diemthuongtooltip);
                        }
                        else {
                            \$(\"#diemthuong\").attr(\"data-original-title\", diemthuongtooltip);
                        }
                    }
                    else {
                        var diemthuongtooltip = \$(\"#diemthuong\").attr(\"data-original-title\");
                        \$(\"#diemthuong\").attr(\"data-original-title\", diemthuongtooltip);
                    }
                }
            });
        }
        function formatDate(date) {
            let day = date.getDate();
            if (day < 10) {
                day = \"0\" + day;
            }
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = \"0\" + month;
            }
            let year = date.getFullYear();
            return day + \"/\" + month + \"/\" + year;
        }
        function formatMoney(num) {
            var val = num.toString().replace(/[^\\d.]/g, \"\");
            var arr = val.split('.');
            var lftsde = arr[0];
            var rghtsde = arr[1];
            var result = \"\";
            var lng = lftsde.length;
            var j = 0;

            for (i = lng; i > 0; i--) {
                j++;
                if (((j % 3) == 1) && (j != 1)) {
                    result = lftsde.substr(i - 1, 1) + \".\" + result;
                } else {
                    result = lftsde.substr(i - 1, 1) + result;
                }
            }

            if (rghtsde == null) {
                return result;
            } else {
                return result + '.' + arr[1];
            }
        };
        var createCookie = function (name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = \"; expires=\" + date.toGMTString();
            }
            else {
                expires = \"\";
            }
            document.cookie = name + \"=\" + value + expires + \"; path=/\";
        }

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + \"=\");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(\";\", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return \"\";
        }
        function closepopupEkyc() {
            \$(\"#ekycInstuct\").fadeOut();
            set_cookie(\"ekycinstructure_\" + get_cookie(\"MBIDCodePortalCookieManage\"), \"readed\")
        }
        \$(\"#createPINCode\").click(function () {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/create-new-pin-code',
                success: function (resp) {
                    if (resp.status) {
                        \$(\"#PINCode\").text(resp.data);
                        new PNotify({
                            title: 'Thông Báo',
                            text: resp.message,
                            type: 'custom',
                            addclass: 'notification-success',
                            icon: 'fa fa-exclamation'
                        });
                    }
                    else {
                        new PNotify({
                            title: 'Thông Báo',
                            text: resp.message,
                            type: 'custom',
                            addclass: 'notification-error',
                            icon: 'fa fa-exclamation'
                        });
                    }
                }
            });
        });

        function GetPinCode() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/get-pin-code/',
                success: function (resp) {
                    \$('.img-spiner-pin').hide();
                    resp = \$.parseJSON(resp);
                    if (resp.Status == true) {
                        \$('#PINCode').text(resp.Data);
                    }
                    else {
                        \$('#PINCode').text(\"\");
                    }
                },
                error: function () {
                    \$('#PINCode').text(\"\");
                }
            });
        };

        function openPopupSupportReview() {
            var popUpSupportReview = localStorage.getItem(\"popupsupport\");
            if (popUpSupportReview != getCookie(\"MBIDSubPortalCookieManage\")) {
                \$.ajax({
                    type: 'POST',
                    url: '/dashboard/support-review-not-rating',
                    success: function (resp) {
                        if (resp.success == true) {
                            \$(\".not-review-count\").html(resp.data.length);
                            \$(\"#popup_support_review_not_rating\").fadeIn();
                        }
                    }
                });
            }
        }
        function closePopupSupport() {
            localStorage.setItem(\"popupsupport\", getCookie(\"MBIDSubPortalCookieManage\"));
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function startGuide() {
            var storedItem = localStorage.getItem(\"menuguide\");
            if (storedItem == undefined || storedItem == \"\") {
                \$('.leftmenu').removeClass('cloze').addClass('hovermenu');
                \$('.rightcontent').addClass('floatdown');
                await sleep(2000);
                startIntro();
            }
            else {
                flag_start = false;
                openPopupSupportReview();
            }
        }
        function startIntro() {
            var intro = introJs();
            intro.setOptions({
                steps: [
                    {
                        element: document.querySelector('.firstguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>1/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ lưu trữ bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Cloud Hosting</li><li>Wordpress</li><li>Cloud Server</li><li>Mắt Bão WS (web)</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.secondguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>2/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ Email & Workspace bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Microsoft 365</li><li>Google Workspace</li><li>Mắt Bão Workspace</li><li>Email</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.thirdguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>3/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ Hóa đơn & Chữ ký số bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Chữ ký số - CA</li><li>Hóa đơn điện tử</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.fourthguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>4/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ tiện ích bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Dịch vụ khác</li><li>Canvato</li></ul>\",
                        position: 'right',
                    }
                ],
                exitOnOverlayClick: false
            });
            intro.onbeforechange(function () {
                if (this._currentStep == 0) {
                    \$(\".firstguide\").addClass(\"active\");
                    \$(\".firstguide .openguide1\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 1) {
                    \$(\".firstguide\").removeClass(\"active\");
                    \$(\".firstguide .openguide1\").css(\"display\", \"none\");
                    \$(\".secondguide\").addClass(\"active\");
                    \$(\".secondguide .openguide2\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 2) {
                    \$(\".secondguide\").removeClass(\"active\");
                    \$(\".secondguide .openguide2\").css(\"display\", \"none\");
                    \$(\".thirdguide\").addClass(\"active\");
                    \$(\".thirdguide .openguide3\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 3) {
                    \$(\".thirdguide\").removeClass(\"active\");
                    \$(\".thirdguide .openguide3\").css(\"display\", \"none\");
                    \$(\".fourthguide\").addClass(\"active\");
                    \$(\".fourthguide .openguide4\").css(\"display\", \"block\");
                }
            });
            intro.onbeforeexit(function () {
                \$(\".fourthguide\").removeClass(\"active\");
                \$(\".fourthguide .openguide4\").css(\"display\", \"none\");
                \$('.leftmenu').removeClass('hovermenu');
                \$('.leftmenu').addClass('cloze');
                \$('.rightcontent').removeClass('floatdown');
                localStorage.setItem(\"menuguide\", \"seen\");
                flag_start = false;
                openPopupSupportReview();
            });
            intro.start();
        }
        flag_start = true;
        startGuide();
    </script>

    <script>
        function searchpagemain() {
            if (\$(\"#menu-page-search\").val() != \"\")
                window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
        }
        \$(document).ready(function () {
            setTimeout(showTopbanner(), 3500);
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            // Auto Complete cho phần thanh search
            \$(\"#menu-page-search\").keyup(async function (e) {
                if (e.keyCode == 13 && \$(\"#menu-page-search\").val() != \"\")
                    window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
            })
            \$(\"#menu-page-search\").autocomplete({
                // Số kí tự sẽ kích hoạt search-> mở dropdown
                minLength: 1,
                // Source
                source: [{\"label\":\"Cài đặt tài khoản\",\"desc\":\"Cài đặt tài khoản\",\"display\":\"Cài đặt\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Danh sách bản khai tên miền\",\"desc\":\"Danh sách bản khai tên miền\",\"display\":\"Danh sách\",\"url\":\"/domains/ho-so-ten-mien\",\"scrolltoId\":null},{\"label\":\"Danh sách đơn hàng\",\"desc\":\"Danh sách đơn hàng\",\"display\":\"Danh sách\",\"url\":\"/Orders\",\"scrolltoId\":null},{\"label\":\"Danh sách hợp đồng\",\"desc\":\"Danh sách hợp đồng\",\"display\":\"Danh sách\",\"url\":\"/contracts/list-contracts\",\"scrolltoId\":null},{\"label\":\"Nạp tiền \",\"desc\":\"Nạp tiền \",\"display\":\"Nạp tiền\",\"url\":\"/cart/addfund\",\"scrolltoId\":null},{\"label\":\"Quản lý Cloud Server\",\"desc\":\"Quản lý Cloud Server\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-may-chu\",\"scrolltoId\":null},{\"label\":\"Quản lý Chili web\",\"desc\":\"Quản lý Chili web\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-chili\",\"scrolltoId\":null},{\"label\":\"Quản lý Chữ ký email Canvato\",\"desc\":\"Quản lý Chữ ký email Canvato\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-canvato\",\"scrolltoId\":null},{\"label\":\"Quản lý Dịch vụ khác\",\"desc\":\"Quản lý Dịch vụ khác\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-khac\",\"scrolltoId\":null},{\"label\":\"Quản lý Email\",\"desc\":\"Quản lý Email\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-email\",\"scrolltoId\":null},{\"label\":\"Quản lý Google Workspace\",\"desc\":\"Quản lý Google Workspace\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-google-workspace\",\"scrolltoId\":null},{\"label\":\"Quản lý Hóa đơn điện tử Mifi\",\"desc\":\"Quản lý Hóa đơn điện tử Mifi\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-einvoice\",\"scrolltoId\":null},{\"label\":\"Quản lý Hosting\",\"desc\":\"Quản lý Hosting\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-hosting\",\"scrolltoId\":null},{\"label\":\"Quản lý Office 365\",\"desc\":\"Quản lý Office 365\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-office-365\",\"scrolltoId\":null},{\"label\":\"Quản lý SSL\",\"desc\":\"Quản lý SSL\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-ssl\",\"scrolltoId\":null},{\"label\":\"Quản lý tên miền\",\"desc\":\"Quản lý tên miền\",\"display\":\"Quản lý\",\"url\":\"/domains\",\"scrolltoId\":null},{\"label\":\"Quản lý WordPress\",\"desc\":\"Quản lý WordPress\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-wordpress\",\"scrolltoId\":null},{\"label\":\"Tài khoản Chính\",\"desc\":\"Tài khoản Chính\",\"display\":\"Tài khoản\",\"url\":\"/billing/transactionhistory\",\"scrolltoId\":null},{\"label\":\"Tài khoản Khuyến mãi \",\"desc\":\"Tài khoản Khuyến mãi \",\"display\":\"Tài khoản\",\"url\":\"/billing/promotionaccounthistory\",\"scrolltoId\":null},{\"label\":\"Tài khoản Tài khoản\",\"desc\":\"Tài khoản Tài khoản\",\"display\":\"Tài khoản\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Thanh toán \",\"desc\":\"Thanh toán \",\"display\":\"Thanh toán\",\"url\":\"/billing/Payment\",\"scrolltoId\":null},{\"label\":\"Thay đổi mật khẩu\",\"desc\":\"Thay đổi mật khẩu\",\"display\":\"Thay đổi\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-dang-nhap\"},{\"label\":\"Thay đổi thông tin tài khoản\",\"desc\":\"Thay đổi thông tin tài khoản\",\"display\":\"Thay đổi\",\"url\":\"/supports/52/ho-tro?parent_module=request&linkfrom=account\",\"scrolltoId\":null},{\"label\":\"Thông báo \",\"desc\":\"Thông báo \",\"display\":\"Thông báo\",\"url\":\"/dashboard/notification/#290_s\",\"scrolltoId\":null},{\"label\":\"Thông tin cơ bản\",\"desc\":\"Thông tin cơ bản\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-co-ban\"},{\"label\":\"Thông tin đăng nhập\",\"desc\":\"Thông tin đăng nhập\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-dang-nhap\"},{\"label\":\"Thông tin tài khoản\",\"desc\":\"Thông tin tài khoản\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Coupon từ đối tác\",\"desc\":\"Ưu đãi Coupon từ đối tác\",\"display\":\"Ưu đãi\",\"url\":\"/coupons/promotions-linked-new\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Điểm thưởng\",\"desc\":\"Ưu đãi Điểm thưởng\",\"display\":\"Ưu đãi\",\"url\":\"/coupons/reward-points\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Đổi quà\",\"desc\":\"Ưu đãi Đổi quà\",\"display\":\"Ưu đãi\",\"url\":\"/gifts/exchange-gifts\",\"scrolltoId\":null},{\"label\":\"Ưu đãi khuyến mãi \",\"desc\":\"Ưu đãi khuyến mãi \",\"display\":\"Ưu đãi\",\"url\":\"/coupons/promotion\",\"scrolltoId\":null}],
                // Giao diện hiển thị của dropdown ui
                create: function () {
                    \$(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                        if (item.desc == \"Wiki\")
                            return \$('<li>').addClass('default')
                                .append(`<div>
                                            <p>
                                                <?xml version=\"1.0\" encoding=\"utf-8\"?>
                                                <svg fill=\"#000000\" width=\"17px\" height=\"17px\" viewBox=\"0 0 1920 1920\" xmlns=\"http://www.w3.org/2000/svg\">
                                                    <path d=\"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z\" fill-rule=\"evenodd\"/>
                                                </svg>&nbsp;
                                                <a style=\"color:#464646;text-decoration: none\" target=\"_blank\" href='https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}' >Tìm từ khóa \"\${\$(\"#menu-page-search\").val()}\"</a>
                                            </p>
                                        </div>`)
                                .appendTo(ul);
                        else
                            return \$('<li>')
                                .append('<div><p>' + item.desc + '</p></div>')
                                .appendTo(ul);
                    };
                    \$(this).data('ui-autocomplete')._resizeMenu = function () {
                        var ul = this.menu.element;
                        ul.outerWidth(this.element.outerWidth());
                    }
                },
                response: function (event, ui) {
                    ui.content.unshift({ desc: \"Wiki\", value: \"\" });
                },
                // Gắn dropdown vào div search bar
                appendTo: \"#search_bar\",
                // Click chọn 1 item nào đó
                select: function (event, ui) {
                    if (ui.item == undefined)
                        window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
                    window.location.href = ui.item.url + \"?scrolltoId=\" + ui.item.scrolltoId;
                    return false;
                },
            });
            \$(window).resize(function () {
                let width = \$('.header .leftlan').width() + \$('.header .righacc').width() + 25;
                \$('.ui-autocomplete').hide();
                showTopbanner()
            });

            activeMenu();
            loadCountMenu();

            \$(\".gopy_btn\").click(function () {
                loadFeedbackMenu();
                \$(\".gopy_btn\").hide();
                \$(\".gopy_content\").fadeIn();
            });
            \$(\".gopy_content .close\").click(function () {
                \$(\".gopy_content\").hide();
                \$(\".gopy_btn\").show();
            });

            //phuong an 2
            var storedItem = localStorage.getItem(\"counter\");
            if (storedItem == undefined || storedItem == \"\") {
                setTimeout(function () {
                    \$(\"#tichdiemdoiqua\").fadeIn();
                }, 1000);
            }

            let window_verify;
            \$('body').on('click', '.btn-verify', function (e) {
                \$.get('/users/verify-digital-get-link', function (resp) {
                    if (resp.status == true) {
                        window_verify = show_window_open();
                        window_verify.location = resp.data;
                    }
                    else {
                        \$('#popup_verification').fadeIn();
                    }
                });
            })
            function show_window_open() {
                var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
                var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;

                var left = ((width / 2) - 575) + dualScreenLeft;
                var strWindowFeatures = \"toolbar=yes,scrollbars=yes,resizable=yes,fullscreen=yes,titlebar=no,dialog=yes,top=0,left=\" + left + \",width=1150,height=\" + window.screen.height;
                var elm = window.open(\"\", \"_blank\", strWindowFeatures);
                if (window.focus) { elm.focus() }
                return elm;
            }

        });
        var lg = 'VI';
        \$('#languageSelect').val(lg);
        \$('#languageSelect').on('change', function () {
            window.location.href = '/changelang?currCulture=' + this.value + '&returnUrl=' + '/dashboard/';
        });
        function closepopup() {
            \$(\"#tichdiemdoiqua\").fadeOut();
            localStorage.setItem(\"counter\", \"count\");
        }
        function getDataNoticeForYouNew() {
            \$.ajax({
                type: \"GET\",
                url: '/dashboard/get-list-notify-new/',
                async: true,
                success: function (resp) {
                    if (resp.status && resp.data.success) {
                        var arrThongBao = resp.data.list_notifys;
                        if (arrThongBao.length > 0) {
                            var cNoiticeForY = '(' + arrThongBao.length + ')';
                            var results = groupNotice(arrThongBao, \"1\");
                            \$(\"#noticeForYou\").html(cNoiticeForY);
                            \$(\"#showNoticeForYou\").html(results);
                            \$(\"#showNoticeForYou\").addClass(\"active\");

                            var countDaysforY = arrThongBao.filter(x => x.is_readed == false).length;
                            if (countDaysforY === null || countDaysforY === 0) {
                                countDaysforY = 0;
                            }
                            \$(\"#noticeRingBell\").text(countDaysforY > 0 ? countDaysforY : \"\");
                        }
                        else {
                            \$(\"#noticeForYou\").html(\"\");
                            \$(\"#showNoticeForYou\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                            \$(\".thongbaosTable\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                        }
                    }
                    else {
                        \$(\"#noticeForYou\").html(\"\");
                        \$(\"#showNoticeForYou\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                        \$(\".thongbaosTable\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");//thong bao o trang chu
                    }
                },
                error: function (resp) {
                    if (resp.error_code == 0) {
                        console.log(resp.message);
                    }
                }
            });
        }

        var shake10s = setInterval(shake, 3500);
        function shake() {
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"shake 0.5s\", \"animation-iteration-count\": \"infinite\", \"background-image\": \"url(../Contents/images/Navigation/B_IconHotro.svg)\" }); }, 2000);
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"\", \"background-image\": \"url(../Contents/images/Navigation/IconHotro.svg)\" }); }, 1);
        }
        function showTopbanner() {
            if (\$(\"#AADIV38\").find('img').length > 0) {
                let height = \$(\"#AADIV38\").height();
                \$(\".header\").css({
                    \"top\": height + \"px\",
                    \"transition\": \"top 0.5s ease-in\"
                });
                \$(\".leftmenu\").css({
                    \"top\": height + 60 + \"px\",
                    \"transition\": \"top 0.5s ease-in\"
                });
                \$(\".rightcontent\").css({
                    \"margin-top\": height + 60 + \"px\",
                    \"transition\": \"margin-top 0.5s ease-in\"
                });
                \$(\".leftmenu ul.menudown\").css({
                    \"bottom\": height + \"px\",
                    
                });
                let menudown = \$(\".leftmenu ul.menudown\").height() + 197;
                \$(\".leftmenu ul.menuup\").css({
                    \"height\": \"calc(105vh - \" + menudown + \"px)\",
                    
                });
                \$(\"#AADIV38\").show();
            }
            else {
                \$(\".leftmenu ul.menudown\").css({
                    
                    \"bottom\": 30 + \"px\",
                });
                let menudown = \$(\".leftmenu ul.menudown\").height() + 170;
                \$(\".leftmenu ul.menuup\").css({
                    \"height\": \"calc(105vh - \" + menudown + \"px)\",
                });
            }
        }

        function activeMenu() {
            var myURL = location.pathname.split('/');
            var myOrigin = location.origin;
            var lastUrl = (myURL[myURL.length - 1] == \"\" ? myURL[myURL.length - 2] : myURL[myURL.length - 1]).replace('-cloud', '').replace('detail-', 'dich-vu-').replace('server', 'may-chu');
            if (lastUrl == 'ssl') {
                lastUrl = 'dich-vu-ssl';
            }
            else if (lastUrl == 'office') {
                lastUrl = 'dich-vu-office-365';
            }
            var mypage = (lastUrl == myURL[1] ? lastUrl + '-' : myURL[1] + '-' + lastUrl);
            \$(\".leftmenu ul.menuup li a[href], .leftmenu ul.menudown li a[href]\").each(function () {
                var curURL = \$(this).attr('href').replace(myOrigin, '').split('/');
                var finisURL = (curURL[curURL.length - 1] == \"\" ? curURL[curURL.length - 2] : curURL[curURL.length - 1]).replace('-cloud', '');
                var curpage = (finisURL == curURL[1] ? finisURL + '-' : curURL[1] + '-' + finisURL);
                if (curpage == mypage) {
                    var parent = \$(this).parent('li').parent('ul');
                    if (parent.attr('class') == undefined || parent.attr('class').indexOf('menuup') <= -1) {
                        if (parent.attr('class') == undefined || parent.attr('class').indexOf('menudown') <= -1) {
                            \$(this).parent('li').addClass('active');
                            if (parent.attr('class') == undefined || parent.attr(\"class\").indexOf(\"box-shadow-HeThong\") <= -1) {
                                \$(this).parent('li').parent('ul').parent('li').children().children().children('i').removeClass('menu-chevron-down');
                                \$(this).parent('li').parent('ul').parent('li').children().children().children('i').addClass('menu-chevron-up');

                                \$(this).parent('li').parent('ul').parent('li').addClass('active');
                                \$(this).parent('li').parent('ul').show();

                                \$(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').addClass('active');
                                \$(this).parent('li').parent('ul').parent('li').parent('ul').show();
                            }
                            else {
                                \$(this).parent('li').parent('ul').parent('li').addClass('acturl')
                            }
                        }
                        else {
                            \$(this).parent('li').addClass('active');
                        }
                    }
                    else {
                        \$(this).parent('li').addClass('active');
                    }
                }
            });
        }
        function checkDropLang() {
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
        };
        function checkHyper() {
            var checkLang = \$(\"#drlLang\").hasClass('active');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
        };
        function checkHosoThanhtoanParent() {
            if (\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            } else {
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-right\");
            }
        }
        function checkHeThong() {
            if (\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            }
            if (\$(\".myHeThong\").hasClass(\"active\")) {
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-right\");
            } else {
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-right\");
            }
            var checkLang = \$(\"#drlLang\").hasClass('active');
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
            \$(\".leftmenu.cloze ul.menuup li\").removeClass(\"active\");
        };
        function checkshowNoti() {
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkLang = \$(\"#drlLang\").hasClass('active');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
        };
        var hostingcount = 0;
        var servercount = 0;
        var wordpresscount = 0;
        var googlecount = 0;
        var microsoftcount = 0;
        var mbcount = 0;
        var emailcount = 0;
        var ctscount = 0;
        var sslcount = 0;
        var hddtcount = 0;
        var othercount = 0;
        var canvatocount = 0;
        var chilicount = 0;
        function loadCountMenu() {
            \$.get('https://apiida.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=DM', function (data) {
                if (data > 0) {
                    \$(\".domain-count\").html(\"<u class='alert'>\"+ data + \"</u>\");
                }
                else {
                    \$(\".domain-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".domain-count\").html(\"\");
            });

            \$.get('https://apiidb.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CLOUDSERVER', function (data) {
                servercount = data;
                if (data > 0) {
                    \$(\".server-count\").html(data);
                    \$(\".server-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".server-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".server-count\").html(\"\");
            });

            \$.get('https://apiidd.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HOSTWP', function (data) {
                wordpresscount = data;
                if (data > 0) {
                    \$(\".wordress-count\").html(data);
                    \$(\".wordress-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".wordress-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".wordress-count\").html(\"\");
            });

            \$.get('https://apiide.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=EMAIL', function (data) {
                emailcount = data;
                if (data > 0) {
                    \$(\".email-count\").html(data);
                    \$(\".email-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".email-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".email-count\").html(\"\");
            });

            \$.get('https://apiidc.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=MICROSOFT', function (data) {
                microsoftcount = data;
                if (data > 0) {
                    \$(\".microsoft-count\").html(data);
                    \$(\".microsoft-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".microsoft-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".microsoft-count\").html(\"\");
            });

            \$.get('https://apiidf.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=SSL', function (data) {
                if (data > 0) {
                    \$(\".ssl-count\").html(\"<u class='alert'>\" + data + \"</u>\");
                }
                else {
                    \$(\".ssl-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".ssl-count\").html(\"\");
            });

            \$.get('https://apiidg.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CHILI', function (data) {
                chilicount = data;
                if (data > 0) {
                    \$(\".chili-count\").html(data);
                    \$(\".chili-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".chili-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".chili-count\").html(\"\");
            });

            \$.get('https://apiidh.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HDDT', function (data) {
                hddtcount = data;
                if (data > 0) {
                    \$(\".einvoice-count\").html(data);
                    \$(\".einvoice-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".einvoice-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".einvoice-count\").html(\"\");
            });

            \$.get('https://apiida.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CANVATO', function (data) {
                canvatocount = data;
                if (data > 0) {
                    \$(\".canvato-count\").html(data);
                    \$(\".canvato-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".canvato-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".canvato-count\").html(\"\");
            });

            var count
            \$.get('https://apiidi.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HOSTWL', function (data) {
                hostingcount = data;
                if (data > 0) {
                    \$(\".hosting-count\").html(data);
                    \$(\".hosting-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".hosting-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".hosting-count\").html(\"\");
            });

            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=OTHER', function (data) {
                othercount = data;
                if (data > 0) {
                    \$(\".other-service-count\").html(data);
                    \$(\".other-service-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".other-service-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".other-service-count\").html(\"\");
            });
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CTS', function (data) {
                ctscount = data;
                if (data > 0) {
                    \$(\".chukyso-count\").html(data);
                    \$(\".chukyso-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".chukyso-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".chukyso-count\").html(\"\");
            });
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=GOOGLE', function (data) {
                googlecount = data;
                if (data > 0) {
                    \$(\".google-count\").html(data);
                    \$(\".google-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".google-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".google-count\").html(\"\");
            });
            setTimeout(function () {
                countContainService();
                countEmailService();
                countSecurityService();
                countUtilityService();
            }, 2000);
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=MATBAOWORKSPACE', function (data) {
                mbcount = data;
                if (data > 0) {
                    \$(\".matbao-count\").html(data);
                    \$(\".matbao-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".matbao-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".matbao-count\").html(\"\");
            });
            var sumHoSo = 0;
            var link3 = 'https://apiidf.matbao.com/api/CountContract?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
            \$.get(link3, function (data) {
                sumHoSo = parseInt(data);

                var link5 = 'https://apiida.matbao.com/api/CountRegistrationDocument?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
                \$.get(link5, function (data) {
                    sumHoSo += parseInt(data);

                    \$(\"li a .icon.Hopdong\").html(\"<u class='alert'>\" + sumHoSo + \"</u>\");

                    \$(\"#countHoSoThanhToan\").html(sumHoSo);
                    \$(\"#countHoSoThanhToan\").removeClass(\"loading-count\");
                });
            });

            var link4 = 'https://apiidc.matbao.com/api/CountOrder?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
            \$.get(link4, function (data) {
                \$(\".count-order-processing\").removeClass(\"loading-count\");
                \$(\".count-order-processing\").html(data);
                \$(\"li a .icon.Donhang\").html(\"<u class='alert'>\" + data + \"</u>\");
            });
            function countContainService() {
                var servicecount = hostingcount + servercount + wordpresscount;
                if (servicecount > 0) {
                    \$(\".hostingservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".hostingservice-count\").html(\"\");
                }
            }
            function countEmailService() {
                var servicecount = microsoftcount + googlecount + mbcount + emailcount;
                if (servicecount > 0) {
                    \$(\".emailandwsservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".emailandwsservice-count\").html(\"\");
                }
            }
            function countSecurityService() {
                var servicecount = ctscount + sslcount + hddtcount;
                if (servicecount > 0) {
                    \$(\".sercurityservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".sercurityservice-count\").html(\"\");
                }
            }
            function countUtilityService() {
                var servicecount = othercount + canvatocount;
                if (servicecount > 0) {
                    \$(\".utilitieservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".utilitieservice-count\").html(\"\");
                }
            }
        }

        function CheckRenew(renewType, serviceType) {
            if (serviceType == undefined || serviceType != 'SSL') {
                serviceType = '';
            }
            \$(\".nowloading\").fadeIn();
            var checkservice = \$('.checkservice:checkbox:checked');
            var data_ids = [];
            \$.each(checkservice, function (index, value) {
                data_ids.push(\$(value).val())
            });

            if (data_ids == null || data_ids.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            GiaHanDichVu(data_ids, renewType, serviceType);
        }

        function CheckRenewDetail(productCode, id, renewType, serviceType) {
            if (serviceType == undefined || serviceType != 'SSL') {
                serviceType = '';
            }

            \$(\".nowloading\").fadeIn();
            var data_ids = [];
            data_ids.push(id);
            if (id != '') {
                data_ids.indexOf(id) == -1 ? data_ids.push(id) : \"\";
            }

            if (data_ids == null || data_ids.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            GiaHanDichVu(data_ids, renewType, serviceType);
        }

        function GiaHanDichVu(data, renewType, serviceType) {
            \$(\".nowloading\").fadeIn();

            if (data == null || data.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            \$.post(\"/cart/renew-serivces/\", { data: data, type: renewType, serviceType: serviceType }, function(data) {
                \$(\".nowloading\").fadeOut();
                if (data.countFail > 0) {
                    new PNotify({
                        title: 'Thông Báo',
                        text: 'Dịch vụ không trong thời kỳ được gia hạn',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                }
                if (data.returnUrl.length > 0)
                    window.location.href = data.returnUrl;
            });
        }

        \$(\"#confirmUpgrade\").click(function () {
            var productCategoryCodeUpgrade = \$(\"#serviceUpgrade\").val();
            if (productCategoryCodeUpgrade == \"\" || productCategoryCodeUpgrade == undefined) {
                new PNotify({
                    title: 'Th&#244;ng B&#225;o',
                    text: \"Vui lòng lựa chọn dịch vụ nâng cấp!\",
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return;
            }
            var serviceRef = \$(\"#serviceId\").val();
            \$(\".nowloading\").fadeIn();
            \$.ajax({
                type: 'POST',
                url: '/services/upgrade-service',
                data:
                {
                    serviceId: serviceRef,
                    ermId: productCategoryCodeUpgrade,
                },
                success: function (resp) {
                    \$(\".nowloading\").fadeOut();
                    resp = \$.parseJSON(resp);
                    if (resp.Status == true) {
                        new PNotify({
                            title: 'Th&#244;ng B&#225;o',
                            text: resp.Message,
                            type: 'custom',
                            addclass: 'notification-success',
                            icon: 'fa fa-check'
                        });
                        window.location.href = resp.Data;
                    }
                    else {
                        new PNotify({
                            title: 'Th&#244;ng B&#225;o',
                            text: resp.Message,
                            type: 'custom',
                            addclass: 'notification-error',
                            icon: 'fa fa-exclamation'
                        });
                    }
                },
                error: function (resp) {
                    \$(\".nowloading\").fadeOut();
                    console.log(\"co loi\");
                }
            });
        });
        \$(\"#submitUpgrade\").click(function () {
            var productCategoryCodeUpgrade = (\$(\"#serviceUpgrade\").val());
            var qty = (parseInt(\$(\"#timeUpgrade\").val()) * 12);
            if (productCategoryCodeUpgrade == \"\" || productCategoryCodeUpgrade == undefined) {
                    new PNotify({
                        title: 'Th&#244;ng B&#225;o',
                        text: \"Vui lòng lựa chọn dịch vụ nâng cấp!\",
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return;
                }
                if (qty == \"\" || qty == undefined) {
                    new PNotify({
                        title: 'Th&#244;ng B&#225;o',
                        text: \"Vui lòng lựa chọn thời hạn đăng ký\",
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return;
                }
                var serviceRef = \$(\"#serviceId\").val();
                \$(\".nowloading\").fadeIn();
                \$.ajax({
                    type: 'POST',
                    url: '/services/upgrade-service',
                    data:
                    {
                        serviceId: serviceRef,
                        ermId: productCategoryCodeUpgrade,
                        time: qty
                    },
                    success: function (resp) {
                        \$(\".nowloading\").fadeOut();
                        resp = \$.parseJSON(resp);
                        if (resp.Status == true) {
                            new PNotify({
                                title: 'Th&#244;ng B&#225;o',
                                text: resp.Message,
                                type: 'custom',
                                addclass: 'notification-success',
                                icon: 'fa fa-check'
                            });
                            window.location.href = resp.Data;
                        }
                        else {
                            new PNotify({
                                title: 'Th&#244;ng B&#225;o',
                                text: resp.Message,
                                type: 'custom',
                                addclass: 'notification-error',
                                icon: 'fa fa-exclamation'
                            });
                        }
                    },
                    error: function (resp) {
                        \$(\".nowloading\").fadeOut();
                        console.log(\"co loi\");
                    }
                });
        });
        \$(\"#gobackUpgrade\").click(function () {
            \$(\"#popupConfirmUpgrade\").hide();
            \$(\"#formUpgrade\").show();
        });
        \$(\".closePopUpUpgrade\").click(function () {
            \$(\"#popupConfirmUpgrade\").hide();
            \$(\"#formUpgrade\").show();
        });
        //End

        //Feedback UI
        \$(\"#btnSendGopy\").click(function () {
            const checked = \$(\"input:radio[name=feedback_choose]:checked\").val();
            if (checked == undefined) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Vui lòng hãy cho chúng tôi biết góp ý của bạn về vấn đề gì?',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation',
                });
                return false;
            }
            var feebBack = \$(\"#txtGopy\").val();
            if (feebBack == \"\") {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Bạn chưa nhập ý kiến đóng góp! Vui lòng kiểm tra lại',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return false;
            }
            \$(\".gopy_content\").hide();
            \$(\".nowloading\").show();

            var data = new FormData();
            data.append(\"feedback_id\", checked);
            data.append(\"menuId\", \"0\");
            data.append(\"comment\", feebBack);

            var files = \$(\".FBFile\").get(0).files;
            if (files.length > 0) {
                for (var i = 0 ; i < files.length; i++) {
                    data.append(\"FileUpload[\" + i + \"]\", files[i]);
                }
            }

            var ajaxRequest = \$.ajax({
                type: \"POST\",
                url: \"/dashboard/submit-comment\",
                contentType: false,
                processData: false,
                data: data
            });

            ajaxRequest.done(function (xhr) {
                \$(\".nowloading\").hide();
                if (xhr.status == true) {
                    \$(\".gopy_btn\").show();
                    \$(\"#formGopYSuccess\").fadeIn();
                    setTimeout(function () {
                        \$(\"#formGopYSuccess\").fadeOut();
                    },5000);
                }
                else {
                    new PNotify({
                        title: 'Thông báo',
                        text: 'Đóng góp ý kiến không thành công!',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                }
            });
        });
        //end
        function showHideFeedBackUI() {
            \$.get('https://apiidb.matbao.com/api/isusercomment?id=' + \"ttcese+GSfPa+E4mQ9rxag==\", function (data) {
                console.log(data);
                if (data > 0) {
                    \$(\".gopy_home\").hide();
                    //\$(\".gopy_home_pa2\").hide();
                }
                else {
                    \$(\".gopy_home\").show();
                    //\$(\".gopy_home_pa2\").hide();
                }
            }).fail(function () {
                \$(\".gopy_home\").hide();
                //\$(\".gopy_home_pa2\").hide();
            });
        }
        \$(document).click(function (event) {
            if (!\$(\".myHeThong\").hasClass(\"active\")) {
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-right\");
            }
            if (!\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            }
            var \$target = \$(event.target);
            if (!\$target.closest('.gopy_home').length &&
                \$('.gopy_content').is(\":visible\")) {
                \$('.gopy_content').hide();
                \$(\".gopy_btn\").fadeIn();
            }
        });
        //UploadFile FeedBack
        \$(\"#ChooseCMFile\").click(function () {
            \$(\"#CMFile\").trigger('click');
        });
        \$(\"#CMFile\").change(function () {
            var CM_fileSize = \$(\"#CMFile\")[0].files[0].size;
            var CM_fileName = \$(\"#CMFile\")[0].files[0].name;
            if (CM_fileSize > 4 * (1024 * 1024)) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Vui lòng chọn file có dung lượng nhỏ hơn 4MB!',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                \$(\"#CMFileName\").text(\"Chưa có file được chọn\");
                return;
            }
            \$(\"#CMFileName\").text(CM_fileName);
        });

        \$(\".ChooseFBFile\").click(function () {
            \$(\".FBFile\").trigger('click');
        });
        //phuong an 1 2
        \$(\".FBFile\").change(function () {
            var tmpFile = \$(\"#fileUploadTemp\").get(0).files;
            if (tmpFile.length > 0) {
                var files = \$.merge(\$.merge([], tmpFile), this.files);
            }
            else {
                var files = this.files;
            }

            if (files.length > 5) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Chỉ được tải lên tối đa 5 tập tin, quý khách vui lòng kiểm tra lại số lượng tập tin.!',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return false;
            }
            //var \$thisFile = this.files;

            var str2 = \"\";//phuong an 2
            \$.each(files,function (index, value) {
                var CM_fileSize = value.size;
                if (CM_fileSize > 4 * (1024 * 1024)) {
                    new PNotify({
                        title: 'Thông báo',
                        text: 'Tập tin ' + value.name + ' có dung lượng lớn hơn 4MB!',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return false;
                }
                str2 += `
                            <div class=\"list-fileGopY-item\">
                                <a href=\"javascript:void(0);\" class=\"btn-closeimg\"><img class=\"close_img\" src=\"https://manage.matbao.net/Contents/images/Navigation/close_img.svg\" /></a>
                                <img src=\"\${URL.createObjectURL(files[index])}\" id=\"imgPreviewFileUpload\${index}\" data-view=\"\${index}\" />
                            </div>
                        `;
            });
            \$(\".list-fileGopY\").html(str2);
            \$(\".frame_previewFile\").show();

            // Copy data file to Temp
            const dtTemp = new DataTransfer();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                dtTemp.items.add(file);
            }
            \$(\".FBFile\").get(0).files = \$(\"#fileUploadTemp\").get(0).files = dtTemp.files;

        });
        \$(\".gopy_home\").on(EventClick, \".btn-closeimg\", function () {//#formGopYPhuongAn2
            const \$this = \$(this);
            \$this.parent().children(\"img\").attr(\"src\", \"\");
            var convertFilesToArray = Array.from(\$(\".FBFile\").get(0).files);
            const getFileView = \$this.parent().children(\"img\").attr(\"data-view\");
            convertFilesToArray.splice(getFileView, 1);
            \$this.parent().hide();

            /*xoa file khoi input*/
            const files = convertFilesToArray;
            \$(\".FBFile\").val(\"\");
            const dt = new DataTransfer();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                dt.items.add(file);
            }
            \$(\".FBFile\").get(0).files = \$(\"#fileUploadTemp\").get(0).files = dt.files;
        });

        //end phuong an 2
        var shake10s = setInterval(shake, 3500);
        function shake() {
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"shake 0.5s\", \"animation-iteration-count\": \"infinite\", \"background-image\": \"url(/Contents/images/Navigation/IconHotro.svg)\" }); }, 2000);
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"\", \"background-image\": \"url(/Contents/images/Navigation/IconHotro.svg)\" }); }, 1);
        }
        //End

        function loadCategoriesMenu() {
            \$(\"#categoryIDPage\").select2();
            \$.ajax({
                type: 'post',
                url: '/dashboard/get-list-category-menu-ID/',
                async: true,
                success: function (resp) {
                    if (resp.status) {
                        var data = resp.data;
                        var str = \"\";
                        str = \"<option value=''>Chọn danh mục trên trang ID</option>\";
                        for (i = 0; i < data.length; i++) {
                            str += \"<option value='\" + data[i].id + \"'>\" + data[i].menu_name + \"</option>\";
                        }
                        \$(\"#categoryIDPage\").html(str);
                    }
                }
            });
        }

        function loadFeedbackMenu() {
            \$(\"#feedbackMenu\").select2();
            \$.ajax({
                type: 'post',
                url: '/dashboard/get-list-feed-menu-ID/',
                async: true,
                success: function (resp) {
                    if (resp.status) {
                        var data = resp.data;
                        var str = \"\";
                        var str2 = \"\";
                        for (const item of data) {
                            var feedback = \"\";
                            if (item.id == 1) {
                                feedback = \"B&#225;o c&#225;o sự cố\";
                            }
                            else if (item.id == 2) {
                                feedback = \"Đề xuất t&#237;nh năng\";
                            }
                            str += `<div class='col-md-12 no-padding'>
                                        <input class='feedback_menu' id=\"\${item.id}\" type=\"radio\" name=\"feedback_choose\" class=\"rd-size\" value=\"\${item.id}\" />
                                        <label for=\"\${item.id}\">\${feedback}</label>
                                    </div>`;
                            str2 += `<option value=\"\${item.id}\">\${item.feedback_name}</option>`;
                        }
                        \$(\".gopy__chklist\").html(str);
                        \$(\"#feedbackMenu\").html(str2);
                    }
                }
            });
        }

        function checkRefreshLogin() {
            setInterval (function() {
                if (getCookieByName(\"MBIDSessionLogin\") == undefined || getCookieByName(\"MBIDSessionLogin\") == '') {
                    location.reload();
                }
            }, 300000);
        }

        function getCookieByName(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + \"=\");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(\";\", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return \"\";
        }
    </script>
</body>
</html>
";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "@user/layouts/main.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("
<!DOCTYPE html>
<html>
<head>
    <title>Trang chủ | Vietiso</title>
    <meta charset=\"utf-8\" />
    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=IE8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
\t<meta name=\"robots\" content=\"noindex, nofollow\" />
\t<meta name=\"googlebot\" content=\"noindex\">
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/72-x-72.png\" sizes=\"72x72\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/144-x-144.png\" sizes=\"144x144\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/57-x-57.png\" sizes=\"57x57\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/114-x-114.png\" sizes=\"114x114\" />
    <link rel=\"nokia-touch-icon\" href=\"https://manage.matbao.net/Contents/images/Logo/57-x-57.png\" />
    <link rel=\"apple-touch-icon-precomposed\" href=\"https://manage.matbao.net/Contents/images/Logo/114-x-114.png\" sizes=\"1x1\" />
    <link href=\"https://www.vietiso.com/favicon.ico\" rel='icon' type='image/x-icon' />
    <link href=\"https://manage.matbao.net/Contents/MBID/bootstrap.min.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/font-awesome-4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/slick.css\" type=\"text/css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/slick-theme.css\" type=\"text/css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/pnotify/pnotify.custom.css\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Contents/MBID/Shared.css?ver=001\" rel=\"stylesheet\" />
    <link href=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/summernote.css\" rel=\"stylesheet\" />
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/assets/vendor/select2/css/select2.css\" />
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/assets/vendor/select2-bootstrap-theme/select2-bootstrap.css\" />
    <link href=\"https://manage.matbao.net/Contents/MBID/intro.css\" rel=\"stylesheet\" />
    <script type=\"text/javascript\">
        WebFontConfig = {
            custom: {
                families: [
                    \"Roboto Condensed\",
                    \"Open Sans\",
                    \"Inter\"
                ],
                urls: [
                    \"https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\",
                    \"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\",
                    \"https://fonts.googleapis.com/css?family=Inter:300,300i,400,400i,500,500i,600,600i,700,700i&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese\"
                ]
            },
            timeout: 2e3
        },
        function () {
            var e = document.createElement(\"script\");
            e.src = \"https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\", e.type = \"text/javascript\", e.async = \"true\";
            var t = document.getElementsByTagName(\"script\")[0]; t.parentNode.insertBefore(e, t)
        }();
    </script>
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/Contents/MBID/dashboard/index.css\">
    <link rel=\"stylesheet\" href=\"https://manage.matbao.net/Contents/MBID/simple-calendar.css\">
    <link href=\"https://manage.matbao.net/Contents/MBID/intro.css\" rel=\"stylesheet\" />
    <style>
        .contNotification ul li::marker {
            content: '';
        }

        .contNotification ul.active {
            margin-bottom: 0;
        }

        .contNotification ul li {
            margin: 20px 25px;
            border-bottom: 1px solid #d9d9d9;
        }

        .title-tb {
            font-weight: bold;
            font-size: 18px;
            color: #000;
        }

        .btn-size {
            width: 150px;
            height: 36px;
            padding: 5px !important;
            margin-top: 0 !important;
        }

        .xcontent__PINCreate {
            display: inline-block;
            float: right;
            border: 1px solid #1e74e8;
            padding: 0 10px;
            border-radius: 20px;
            width: 150px;
            text-align: center;
        }

        .modal.show .modal-dialog {
            max-width: 700px;
        }

        input[type=radio] {
            width: 19px;
            height: 19px;
            margin-top: 2px;
            margin-right: 15px;
        }

        #tkc {
            border: none;
            background: none;
            outline: none;
        }

        #vw_point, #tt, #km {
            border: none;
            background: none;
            outline: none;
        }

        ::placeholder {
            bottom: 100px;
        }

        .btn-hover:hover {
            font-weight: bold !important;
        }

        .mb-popup .close {
            position: absolute;
            right: 45px;
        }

        .re-content p {
            margin-bottom: 0;
        }

        .re-content span {
            color: #f56969;
        }

        .block a:not([href]):hover {
            color: #1E74E8;
        }

        .xcontent input[type=password] {
            font-size: 18px;
            font-family: Verdana;
        }

        #ekycInstuct {
            position: absolute;
            top: 84px;
            right: 0px;
            display: none;
            width: 320px;
            height: 142px;
            padding: 20px;
            text-align: left;
            background: #3F85F5;
            border-radius: 4px;
            color: #FFF;
            z-index: 10;
        }

        #closeInstructEkyc {
            font-size: 16px;
            font-weight: 700;
            float: right;
            background-color: #3F85F5;
            color: white;
            border: 1px #3F85F5;
            width: 96px;
            height: 36px;
            border-radius: 10px;
            margin-top: 16px;
        }

        #ekycInstuct:before {
            position: absolute;
            display: block;
            content: '';
            width: 10px;
            height: 10px;
            top: -4px;
            right: 45px;
            background: #3F85F5;
            transform: rotate(-136deg);
        }

        #menu-page-search, .search-bar input[type=\"text\"]:focus {
            border-color: white;
            box-shadow: 0;
            outline: 0 none;
        }

        #menu-page-search:focus, .search-bar input[type=\"text\"]:focus {
            box-shadow: 0 1px 1px white inset, 0 0 8px white;
            outline: 0 none;
        }

        .ui-autocomplete:after {
            content: '';
            display: inline-block;
            height: 1px;
            outline: 1px solid pink;
        }

        .ui-autocomplete .ui-menu-item {
            width: 100%;
            height: 40px;
            display: inline-block;
            font-size: 1rem;
        }

        .ui-state-active,
        .ui-widget-content .ui-state-active,
        .ui-widget-header .ui-state-active,
        a.ui-button:active,
        .ui-button:active,
        .ui-button.ui-state-active:hover, .ui-autocomplete .ui-menu-item:hover, .ui-autocomplete .ui-menu-item:active {
            background: #FAFAFA;
        }

        .ui-menu-item-wrapper {
            height: 100%;
        }

        .ui-menu-item-wrapper > * {
            margin-left: 10px;
            padding-top: 8px;
        }

        .search-bar {
            margin-top: 14px;
        }

        .search-bar > div {
            width: 100%;
            padding-right: 62px;
            margin-top: 10px;
            display: flex;
        }

        .search-bar > div input {
            width: calc(100% - 90px);
            margin: 0;
            float: left;
            border-radius: unset;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            font-size: 16px;
            color: #464646;
        }

        .search-bar > div input::placeholder {
            color: #464646;
        }

        .search-bar > div button {
            background-color: #7fca27;
            width: 90px;
            box-shadow: none;
            height: 36px;
            margin-left: -1px;
            border-radius: unset;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            margin-top: 1px;
        }

        .search-bar > div button:hover {
            cursor: pointer;
        }

        .search-bar > div button:focus {
            border: 0;
            box-shadow: none;
        }

        @media only screen and (max-width: 760px) {
            #check-mobile {
                display: none;
            }
        }

        .Noti.show .thongbao .tab {
            cursor: pointer;
        }

        .Noti.show .thongbao .contab {
            height: auto;
        }

        .bk-lb {
            background-color: #e7effe;
        }

        select {
            background-position: 95%;
        }

        .btn-size {
            width: 150px;
            height: 36px;
            padding: 5px !important;
            margin-top: 0 !important;
        }

        .popup .btn-size {
            width: 100px;
        }

        #btnShowPopup3 + div.modal .close {
            position: absolute;
            right: 5px;
            float: none;
            outline: none;
            font-size: 30px;
            width: 30px;
            opacity: 0.7;
            height: 30px;
        }

        #btnShowPopup3 + div.modal .modal-dialog {
            top: 50%;
            margin-top: -169px;
        }

        .ui-autocomplete {
            margin-left: -10px !important;
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 300px;
            height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            border-radius: 0px 0px 8px 8px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            z-index: 1000;
        }

        .menudown .menu-chevron-left {
            width: 32px;
            height: 22px;
            background-image: url(/Contents/images/Navigation/dauloz.svg);
            background-position: center;
            background-repeat: no-repeat;
        }

        .menudown .menu-chevron-right {
            width: 32px;
            height: 22px;
            background-image: url(/Contents/images/Navigation/daunho.svg);
            background-position: center;
            background-repeat: no-repeat;
        }

        .menudrpdown-icon {
            float: left;
        }

        .LinkWeb {
            width: 16px;
            height: 16px;
            position: absolute;
            background-image: url(/Contents/images/Navigation/IconLink.svg);
            background-position: center;
            background-repeat: no-repeat;
            right: 10px;
        }

        .LinkWebMenuDown {
            width: 38px;
            height: 22px;
            position: absolute;
            background-image: url(/Contents/images/Navigation/IconLink.svg);
            background-position: center;
            background-repeat: no-repeat;
            right: 6px;
        }

        .menu-chevron-down {
            height: 20px;
            width:20px;
            background-image: url(/Contents/images/menuuparrow.svg);
            background-position: center;
            background-repeat: no-repeat
        }

        .menu-chevron-up {
            height: 20px;
            width: 20px;
            background-image: url(/Contents/images/menudownarrow.svg);
            background-position: center;
            background-repeat: no-repeat
        }

        .select2-container--default .select2-selection--single, .select2-selection .select2-selection--single {
            border: 1px solid #d2d6de;
            border-radius: 5px;
            padding: 6px 12px;
            height: 34px;
        }

        .select2-container {
            font-size: 14px !important;
            width: 300px !important;
        }

        .select2-container--default.select2-container--focus, .select2-selection.select2-container--focus, .select2-container--default:focus, .select2-selection:focus, .select2-container--default:active, .select2-selection:active {
            outline: none;
        }

        .select2-container--default .select2-selection--single, .select2-selection .select2-selection--single {
            border: 1px solid #d2d6de;
            border-radius: 5px;
            padding: 6px 12px;
            height: 34px;
        }

        .select2-container--default.select2-container--open {
            border-color: #3c8dbc;
        }

        .select2-dropdown {
            border: 1px solid #d2d6de;
            border-radius: 0;
        }

        .select2-container--default .select2-results__option--highlighted[aria-selected] {
            background-color: #3c8dbc;
            color: white;
        }

        .select2-results__option {
            padding: 6px 12px;
            user-select: none;
            -webkit-user-select: none;
            font-size: 14px;
        }

        .select2-container .select2-selection--single .select2-selection__rendered {
            padding-left: 0;
            padding-right: 0;
            height: auto;
            margin-top: -4px;
        }

        .select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {
            padding-right: 6px;
            padding-left: 20px;
        }

        .select2-container--default .select2-selection--single .select2-selection__arrow {
            height: 28px;
            right: 3px;
        }

            .select2-container--default .select2-selection--single .select2-selection__arrow b {
                margin-top: 0;
            }

        .select2-dropdown .select2-search__field, .select2-search--inline .select2-search__field {
            border: 1px solid #d2d6de;
        }

            .select2-dropdown .select2-search__field:focus, .select2-search--inline .select2-search__field:focus {
                outline: none;
            }

        .select2-container--default.select2-container--focus .select2-selection--multiple, .select2-container--default .select2-search--dropdown .select2-search__field {
            border-color: #3c8dbc !important;
        }

        .select2-container--default .select2-results__option[aria-disabled=true] {
            color: #999;
        }

        .select2-container--default .select2-results__option[aria-selected=true] {
            background-color: #ddd;
        }

        .select2-container--default .select2-results__option[aria-selected=true], .select2-container--default .select2-results__option[aria-selected=true]:hover {
            color: #444;
        }

        .select2-container--default .select2-selection--multiple {
            border: 1px solid #d2d6de;
            border-radius: 0;
        }

        .select2-container--default .select2-selection--multiple:focus {
            border-color: #3c8dbc;
        }

        .select2-container--default.select2-container--focus .select2-selection--multiple {
            border-color: #d2d6de;
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice {
            background-color: #3c8dbc;
            border-color: #367fa9;
            padding: 1px 10px;
            color: #fff;
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice__remove {
            margin-right: 5px;
            color: rgba(255,255,255,0.7);
        }

        .select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {
            color: #fff;
        }

        .select2-container .select2-selection--single .select2-selection__rendered {
            padding-right: 10px;
        }

        .selectRequest {
            border-top: solid 1px;
            overflow: hidden;
            border-radius: 5px;
            border: solid 1px #cfcfcf;
            border-collapse: unset;
        }

        .selectRequest td {
            border-bottom: 1px solid #BFBFBF;
            background-color: #F8F8F8;
            width: 400px;
            height: 30px;
            padding-left: 10px;
        }

        .selectRequest tr:last-child td {
            border-bottom: none;
        }

        #hideFlexAppDownload {
            position: fixed;
            top: 0;
            width: 100%;
            display: none;
            z-index: 129;
        }

        #btnAppDownload {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-gap: 0 10px;
            background: #e9e9e9;
            font-weight: bold;
            height: 6vh;
        }

        .googleWorkspaceChild {
            font-size: 14px;
        }

        .dataTable input[type='checkbox'] {
            transform: scale(1.5);
        }

        #menu-page-search {
            background-color: #EFF0F5 !important;
        }

        .khuyenmai.new {
            background-image: url('../../Contents/images/KhuyenMai/new_icon.svg');
        }

        #tichdiemdoiqua {
            position: absolute;
            top: 0;
            right: calc(100% - 500px);
            top: calc(100% - 228px);
            display: none;
            width: 414px;
            min-height: 50px;
            padding: 20px;
            text-align: left;
            background: #3F85F5;
            border-radius: 4px;
            color: #FFF;
        }

        #closetichdiem {
            font-size: 16px;
            float: right;
            background-color: #3F85F5;
            color: white;
            border: 1px solid;
            width: 96px;
            height: 36px;
            border-radius: 10px;
            margin-top: 16px;
        }

        #tichdiemdoiqua:before {
            position: absolute;
            display: block;
            content: '';
            top: calc(100% - 42px);
            width: 10px;
            height: 10px;
            margin-left: -25px;
            background: #3F85F5;
            transform: rotate(-136deg);
        }

        #AADIV38 {
            display: none;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 129;
            background-color: white;
            animation-duration: 0.75s;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-name: fade-in;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .header .search-bar {
            display: table;
            float: left;
            margin-top: 0px;
            margin-left: 10px;
            align-items: center;
            width: calc(100% - 900px);
            min-width: 300px;
        }

        @media only screen and (max-width: 768px) {
            .search-bar {
                display: none !important;
            }
        }

        .matbaoWorkspaceChild {
            font-size: 14px;
        }

        .matbaoWorkspaceChild a:hover {
            font-weight: normal;
        }

        .xemcoupon:hover {
            background-color: #619e19 !important;
            color: #FFFFFF;
        }

        #gobackUpgrade:hover {
            border-color: #FC4649;
        }

        .support-review-logo {
            background-image: url('../../Contents/images/Dashboard/SupportReviewMB.svg');
            width: 100%;
            height: 100px;
            background-repeat: no-repeat;
            background-position-x: center;
        }

        #change_support_request:hover {
            color: white;
        }

        .mbWorkSpaceMenu:hover {
            font-weight: normal !important;
        }

        .tx-overslide {
            animation: scrolltx-overslide 10s linear infinite;
        }

        @keyframes scrolltx-overslide {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(-100%);
            }
        }

        .animation-name {
            display: inline-block;
        }

        .check-vali-logo {
            width: 14px;
            height: 14px;
            position: absolute;
            top: 32px;
            left: 24px;
        }
        .introjs-prevbutton {
            display: none;
        }

        .introjs-right {
            left: 310px !important;
        }
    </style>
    <script async=async src=\"https://www.googletagmanager.com/gtag/js?id=UA-60799117-5\"></script>
    <script>
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
            if (!location.href.includes(\"dashboard/mobile-app\")) {
                location.href = \"/dashboard/mobile-app\";
            }
        }
    </script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-60799117-5');
    </script>

    <script>
        //bản đồ nhiệt hotjar
        (function (h, o, t, j, a, r) {
            h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
            h._hjSettings = { hjid: 1812778, hjsv: 6 };
            a = o.getElementsByTagName('head')[0];
            r = o.createElement('script'); r.async = 1;
            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
            a.appendChild(r);
        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

        //bản đồ nhiệt clarity
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }; t = l.createElement(r); t.async = 1; t.src = \"https://www.clarity.ms/tag/\" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, \"clarity\", \"script\", \"jqq31e1627\");
    </script>
    <script>/* Mắt Bão Manager TOP */ var k = decodeURIComponent(document.cookie), ca = k.split(';'), psc = \"\"; for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1); if (c.indexOf(\"adcapban\") == 0) psc += (psc == \"\" ? \"\" : \",\") + c.replace(\"adcapban\", \"\").replace(\"=\", \",\"); } var s = document.createElement(\"script\"); s.src = \"https://manage.axys.group/ser.php?t=AADIV38\" + String.fromCharCode(38) + \"f=38\" + String.fromCharCode(38) + \"psc=\" + psc; document.head.appendChild(s);</script>
</head>
<body>
    <div id=\"check-mobile\"></div>
    <div id=\"AADIV38\"></div>
    <div class=\"header\" style=\"top:0;display:block\">
        <div class=\"leftlan\">
            <a class=\"logo\" href=\"/dashboard/\"><img alt=\"Mắt Bão\" src=\"https://hatex.vn/public/upload/files/member_upload/h17843/files/Logo%20Viet%20ISO.jpg\" /></a>
            <div class=\"drop font14\">
                <div id=\"drlLang\" class=\"select\" style=\"padding-left: 0;padding-right: 10px;\" onclick=\"checkDropLang();\">
                    <span></span>
                    <select style=\"background: none !important;border:0px;outline:none;\" class=\"selectLanguage\" id=\"languageSelect\">
                        <option value=\"VI\">Tiếng Việt</option>
                        <option value=\"EN\">English</option>
                    </select>
                    <input type=\"hidden\" value=\"VN\" />
                </div>
            </div>

        </div>
        <div class=\"search-bar\" id=\"search_bar\">
            <div>
                <input type=\"text\" id=\"menu-page-search\" class=\"form-control\" placeholder=\"Tìm kiếm nhanh\" />
                <button style=\"border: unset;\" onclick=\"searchpagemain()\">
                    <?xml version=\"1.0\" encoding=\"utf-8\" ?>
                    <svg fill=\"#FFFFFF\" width=\"20px\" height=\"20px\" style=\"margin-top: -5px;\" viewBox=\"0 0 1920 1920\" xmlns=\"http://www.w3.org/2000/svg\">
                        <path d=\"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z\" fill-rule=\"evenodd\" />
                    </svg>
                </button>
            </div>
        </div>
        <div class=\"righacc\">
            <div class=\"showWiki\">
                <a class=\"wiki\" href=\"https://wiki.matbao.net/\" target=\"_blank\"></a>
            </div>
            <div class=\"Noti\" onclick=\"checkshowNoti();\">
                <a class=\"bell\"></a><span class=\"alert\" id=\"noticeRingBell\"></span>
                <div class=\"thongbao\">
                    <span class=\"title\">Th&#244;ng b&#225;o</span>
                    <div class=\"tab\">
                        <a id=\"formsys\" class=\"active\" data-tab=\"1\">Từ hệ thống <span id=\"noticeForSys\"></span></a>
                        <a id=\"foryou\" class=\"notactive\" data-tab=\"2\">Cho bạn <span id=\"noticeForYou\"></span></a>
                    </div>
                    <div class=\"contab\" style=\"margin-top: -6px;\">
                        <ul data-tab=\"1\" id=\"showNoticeForSys\" class=\"active\"></ul>
                        <ul data-tab=\"2\" id=\"showNoticeForYou\" class=\"\"></ul>
                        <div class=\"col-md-12 text-center\" style=\"padding-bottom:5px;\">
                            <a href=\"/dashboard/notification/\">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class=\"Account\" onclick=\"checkHyper();\">
                <div class=\"myinfo actived\">

                    <img class=\"ava\" alt=\"avatar\" src=\"https://manage.matbao.net/Contents/images/Navigation/avatar.svg\" />
                    <div class=\"name font14\">
                        <div class=\"animation-name tx-overslide\">C&#244;ng ty Cổ phần Du lịch &amp; Dịch vụ H&#242;n Gai - Chi nh&#225;nh Quảng Ninh </div>
                    </div>
                </div>
                <span id=\"myhyperlynk\" class=\"hyperlynk\">
                    <a href=\"/users/account/\">C&#224;i đặt t&#224;i khoản</a>
                    <a href=\"/billing\">Tổng hợp giao dịch</a>
                    <a href=\"/users/logoff/\">Đăng xuất</a>
                </span>
            </div>
        </div>
    </div>
    <div class=\"leftmenu cloze\">
        <ul class=\"menuup\">
            <li>
                <a href=\"/dashboard/\"><i class=\"icon Home\"></i><span style=\"padding-left:8px;\">Trang chủ</span></a>
            </li>
            <li class=\"limainsingle\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Domain domain-count\"></i><span style=\"padding-left:8px;\">T&#234;n miền</span></a>
                <ul>
                    <li class=\"onlyTog\"><a><span>T&#234;n miền</span></a></li>
                    <li><a href=\"/domains/\"><span>Quản l&#253;</span></a></li>
                        <li><a href=\"https://www.matbao.net/ten-mien/dang-ky-ten-mien.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        <li><a href=\"https://www.matbao.net/ten-mien/chuyen-doi-nha-cung-cap.html\" target=\"_blank\"><span>Chuyển về Mắt B&#227;o </span><i class=\"LinkWeb\"></i></a></li>
                </ul>
            </li>
            <li class=\"limain firstguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Hosting hostingservice-count\"></i><span style=\"padding-left:8px;\">Dịch vụ lưu trữ</span></a>
                <ul class=\"openguide1\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Cloud Hosting</span><u class=\"hosting-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-hosting/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/hosting/cloud-hosting.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Wordpress</span><u class=\"wordress-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-wordpress/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/hosting/cloud-wordpress-hosting.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Cloud Server</span><u class=\"server-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-may-chu/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/server/cloud-server.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Mắt B&#227;o WS (web)</span><u class=\"chili-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-chili/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"javascript:void(0);\" class=\"serviceAdvisory\" data-product-code=\"Chili\"><span>Tư vấn dịch vụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class=\"limain secondguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Email emailandwsservice-count\"></i><span style=\"padding-left:8px;\">Email & WorkSpace</span></a>
                <ul class=\"openguide2\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Microsoft 365</span><u class=\"microsoft-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-office-365/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/office-365.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Google Workspace</span><u class=\"google-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-google-workspace/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/google-workspace.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Mắt B&#227;o Workspace</span><u class=\"matbao-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-matbaoworkspace/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/mat-bao-workspace.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Email</span><u class=\"email-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-email/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/email.html\" target=\"_blank\"><span>Đăng k&#253; Email Pro v4</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li class=\"limainsingle\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon SSL ssl-count\"></i><span style=\"padding-left:8px;\">Bảo mật SSL</span></a>
                <ul>

                    <li><a href=\"/services/dich-vu-ssl/\"><span>Quản l&#253;</span></a></li>
                    <li><a href=\"https://tool.matbao.support/SSL\" target=\"_blank\"><span>C&#244;ng cụ</span><i class=\"LinkWeb\"></i></a></li>
                        <li><a href=\"https://www.matbao.net/bao-mat-website/chung-chi-ssl.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                </ul>
            </li>
            <li class=\"limain thirdguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon Security sercurityservice-count\"></i><span style=\"padding-left:8px;\">H&#243;a đơn &amp; Chữ k&#253; số</span></a>
                <ul class=\"openguide3\">
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Chữ k&#253; số - CA</span><u class=\"chukyso-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-hsm/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"https://www.matbao.net/chu-ky-so-mat-bao-ca.html\" target=\"_blank\"><span>Đăng k&#253;</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>H&#243;a đơn điện tử</span><u class=\"einvoice-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-einvoice/\"><span>Quản l&#253;</span></a></li>
                                <li><a href=\"javascript:void(0);\" class=\"serviceAdvisory\" data-product-code=\"MBInvoice\"><span>Tư vấn dịch vụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
            <li class=\"limain fourthguide\">
                <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><i class=\"icon otherservice utilitieservice-count\"></i><span style=\"padding-left:8px;\">Tiện &#237;ch</span></a>
                <ul class=\"openguide4\">
                    <li><a href=\"/services/dich-vu-khac/\"><span style=\"padding-left:45px;\">Dịch vụ kh&#225;c</span><u class=\"other-service-count\"></u></a></li>
                    <li class=\"lisub\">
                        <a><span><i class=\"fa menu-chevron-down menudrpdown-icon\"></i></span><span>Canvato</span><u class=\"canvato-count\"></u></a>
                        <ul class=\"ulsub\">
                            <li><a href=\"/services/dich-vu-canvato/\"><span>Quản l&#253;</span></a></li>
                            <li><a href=\"https://canvato.net/email-signature/overview\" target=\"_blank\"><span>C&#244;ng cụ</span><i class=\"LinkWeb\"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>
        <p class=\"scroll-end\"></p>
        <ul class=\"menudown\">
            <li>
                <a href=\"/supports/dashboard/\"><i class=\"icon Hotro unover\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hỗ trợ</span></a>
            </li>
            <li class=\"myHeThong\">
                <a><span><i class=\"fa menu-chevron-left menudrpdown-icon\"></i></span><i class=\"icon Hethong unover\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hệ thống</span></a>
                <div>
                    <ul class=\"box-shadow-HeThong unover\">
                        <li class=\"onlyTog unover\"><span style=\"font-size:14px;font-weight:600;\" class=\"unover\">Hệ thống</span></li>
                            <li class=\"unover\"><a class=\"unover\" href=\"/users/account/\"><i class=\"icon Account unover\"></i><span class=\"unover\">C&#224;i đặt t&#224;i khoản</span></a></li>
                        <li class=\"unover\"><a class=\"unover\" href=\"/dashboard/notification/\"><i class=\"icon Noti unover\"></i><span class=\"unover\">Th&#244;ng b&#225;o</span></a></li>

                        


                            <li class=\"unover\"><a class=\"unover\" href=\"/users/log-session-working/\"><i class=\"icon Log unover\"></i><span class=\"unover\">Nhật k&#253; hoạt động</span></a></li>
                        <li class=\"unover\"><a class=\"unover\" href=\"https://www.matbao.net/lien-he.html\" target=\"_blank\"><i class=\"icon Lienhe unover\" style=\"background-size: 35px 23px;\"></i><span class=\"unover\">Li&#234;n hệ</span><span><i class=\"LinkWeb\" style=\"top:12px;right:18px;\"></i></span></a></li>
                    </ul>
                </div>
            </li>
                <li class=\"HosoThanhtoanParent\">
                    <a><span><i class=\"fa menu-chevron-left menudrpdown-icon\"></i></span><i class=\"icon HosoThanhtoan\" style=\"margin-left:24px;\"></i><span class=\"unover\" style=\"padding-left:8px;\">Hồ sơ v&#224; thanh to&#225;n</span></a>
                    <ul class=\"box-shadow-HeThong unover\">
                        <li class=\"onlyTog unover\"><span class=\"unover\" style=\"font-size:14px;font-weight:600;\">Hồ sơ v&#224; thanh to&#225;n</span></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/Orders/\"><i class=\"icon Donhang unover\"></i><span class=\"unover\">Đơn h&#224;ng</span></a></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/contracts/\"><i class=\"icon Hopdong unover\" style=\"background-size: 35px 23px;\"></i><span class=\"unover\">Quản l&#253; hồ sơ</span></a></li>
                                                    <li class=\"unover\"><a class=\"unover\" href=\"/billing/\"><i class=\"icon Giaodich unover\"></i><span class=\"unover\">Tổng hợp giao dịch</span></a></li>
                                                    <li class=\"unover\">
                                <a class=\"unover\" href=\"/coupons/\">
                                    <i class=\"icon uudai unover\"></i><span class=\"unover\">Ưu đ&#227;i</span>
                                </a>

                            </li>
                    </ul>
                </li>

            <li>
                <a href=\"/reviews/\" style=\"margin-left:24px;\"><i class=\"icon Review\"></i><span style=\"padding-left:8px;\">Đ&#225;nh gi&#225;</span></a>
            </li>
        </ul>
        <a class=\"closeMenu\"><u class=\"icon\"></u></a>
        <div id=\"tichdiemdoiqua\">
            <strong style=\"font-size:18px;\">Ưu đãi mới: Tích điểm đổi quà</strong>
            <span style=\"float:right;font-size:14px;\">1/1</span>
            <span style=\"display:block;font-size:14px;margin-top:10px;\">Chương trình đặc biệt dành cho khách hàng Mắt Bão khi thực hiện các nhiệm vụ đơn giản. Tham gia làm nhiệm vụ đơn giản để tích điểm và nhận quà ngay.</span>
            <button class=\"tichdiem\" id=\"closetichdiem\" onclick=\"closepopup()\">Đã hiểu</button>
        </div>
    </div>
    <div class=\"rightcontent\">
        <div class=\"contener\">
            <!-- Meta -->
<input type=\"text\" class=\"hidden\" id=\"userEncrypt\" value=\"ttcese+GSfPa+E4mQ9rxag==\" />
<input type=\"text\" class=\"hidden\" id=\"roleId\" value=\"true\" />
<div class=\"areaLeft\">
    <div class=\"xbox\">
        <div class=\"col-md-4 no-padding\">
                <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Navigation/HosoThanhtoan_color.svg\" style=\"height:55px;\" />
                    <b id=\"countHoSoThanhToan\" class=\"loading-count\"></b>
                    <span>Hồ sơ cần ho&#224;n tất <a class=\"mbtooltip-normal\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"Bao gồm hợp đồng mới tạo, hợp đồng bị từ chối duyệt do chữ k&#253; chưa hợp lệ v&#224; bản khai t&#234;n miền chưa k&#253;.\"></a></span>
                    <a class=\"xlink\" href=\"/contracts/\">Xem</a>
                </div>
                            <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/thanhtoan.svg\" />
                    <b class=\"count-order-processing loading-count\"></b>
                    <span>Đơn h&#224;ng chờ thanh to&#225;n</span>
                    <a class=\"xlink\" href=\"/Orders/?not_payment=True\">Xem</a>
                </div>
                    </div>
        <div class=\"col-md-4 bor-right bor-left no-padding\">
            <div class=\"record\">
                <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/tenmien.svg\" />
                <b class=\"count-domain loading-count\"></b>
                <span>T&#234;n miền cần gia hạn</span>
                <a class=\"xlink\" href=\"/domains/?expire=True\">Xem</a>
            </div>
                <div class=\"record\">
                    <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/dichvu.svg\" style=\"height:55px;\" />
                    <b class=\"count-service loading-count\"></b>
                    <span>Dịch vụ cần gia hạn</span>
                    <a class=\"xlink\" href=\"/services/?expire=True\">Xem</a>
                </div>
        </div>
        <div class=\"col-md-4 no-padding 0-tk\">
            <div class=\"reavar\">
                <b>Bạn đang<br />không có<br />yêu cầu<br />hỗ trợ<br />nào!</b>
                <a class=\"btn openPopR\">Tạo y&#234;u cầu hỗ trợ</a>
            </div>
        </div>
        <div class=\"col-md-4 no-padding has-tk hidden\">
            <div class=\"record\">
                <img alt=\"ten-mien\" src=\"https://manage.matbao.net/Contents/images/Dashboard/Hotro.svg\" />
                <b class=\"count-ticket loading-count\"></b>
                <span>Yêu cầu hỗ trợ</span>
                <a class=\"xlink\" href=\"/supports/view-support-requested/\">Xem</a>
            </div>
            <div class=\"request\">
                <b>Bạn có thể tạo yêu cầu nhanh tại đây:</b>
                <a class=\"btn openPopR\">Tạo yêu cầu hỗ trợ</a>
            </div>
        </div>
    </div>
    <a class=\"col-md-12 no-padding xbox\" href='https://matbao.in/hop-dong-dien-tu/?utm_source=idmatbaonet&utm_medium=banner&utm_campaign=hopdongdientu' target='_blank' style=\"color: #444; text-decoration: none; min-height: unset;display:block\">
        <img class=\"img-banner-resize\" srcset=\"https://resource.matbao.net/idportal/image/banner/ecotract_700.jpg 1268w, https://resource.matbao.net/idportal/image/banner/ecotract_900.jpg 1600w, https://resource.matbao.net/idportal/image/banner/ecotract_1200.jpg 6000w\" alt=\"ecotract\">
    </a>
    <a class=\"gbox hidden\" href='https://www.matbao.net/uu-dai/uu-dai-hang-thang.html?utm_source=idmatbaonet&utm_medium=thongbao&utm_campaign=kmgiangsinh' target='_blank' style=\"color:#444;text-decoration:none;\">
        <span class=\"special\">Đặc biệt</span>
        Mắt Bão gửi đến Quý khách hàng thông tin CTKM đặc biệt dịp cuối năm 2023 lên đến 50% và hoàn tiền 100k khi thanh toán online. Tìm hiểu thêm <span style=\"text-decoration:underline;color:#1E74E8;\">TẠI Đ&#194;Y</span>
    </a>
    <div class=\"col-md-12 no-padding\">
        <div class=\"col-md-12 no-padding\">
            <div class=\"xbox\" style=\"height:136px;\">
                <div class=\"col-md-6 no-padding\">
                    <div style=\"border-right:1px solid #ccc;height:90px;padding-left:30px;\">
                        <div class=\"active-fast-service--title\">
                            <p class=\"afs--size\">K&#237;ch hoạt dịch vụ nhanh</p>
                            <span>Bạn c&#243; <b class=\"afs__count-services\">0</b> <b style=\"color:#1e74e8;\">dịch vụ </b>cần k&#237;ch hoat</span>
                        </div>
                    </div>
                </div>
                <div class=\"col-md-6 no-padding\">
                    <div class=\"div__active-fast-service\">
                        <div class=\"active-fast-service--body\" style=\"height:90px;\">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class=\"xbox\">
            <strong class=\"xtitle\">
                Ưu đ&#227;i hiện h&#224;nh
                    <a class=\"xlink no-right\" href=\"/coupons\">C&#225;c ưu đ&#227;i kh&#225;c</a>
            </strong>
            <div class=\"col-md-12 pad-bot\">
                <div class=\"a_table mar-t-5\">
                    <div class=\"tr promotion-coupon\">

                    </div>

                </div>
            </div>
        </div>
</div>
<div class=\"areaRight\">
    <div class=\"xbox\">
        <strong class=\"xtitle\">Th&#244;ng tin t&#224;i khoản<a class=\"xlink no-right\" href=\"/users/account/\">Xem chi tiết</a></strong>
        <div class=\"xcontent pad-bot\">
            <div class=\"col-md-12 no-padding\" style=\"padding-top:5px;padding-bottom:5px;\">
                <div class=\"col-md-12 no-padding\">
                            <img alt=\"da-xac-thuc\" title=\"Tài khoản đã xác thực\" src=\"https://manage.matbao.net/Contents/images/Navigation/approved_logo.svg\" height=\"16\">
                            <span style=\"color: #7fca27; font-weight: 600; max-width: calc(100% - 120px); display: inline-flex;\">Tài khoản đã xác thực!</span>
                                <span class=\"float-right btn-verify\" style=\"color: #1E74E8; text-decoration: underline; font-weight: normal; cursor:pointer;\">Xác thực CKS</span>

                </div>
            </div>
            <div class=\"block\" style=\"padding-bottom:15px;\">
                <span class=\"xlabel float-left\">M&#227; PIN hỗ trợ kỹ thuật</span>
                <a class=\"mbtooltip-normal\" style=\"margin:9px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"Khi bạn gọi đến tổng đ&#224;i hỗ trợ kỹ thuật &lt;strong&gt;19001830&lt;/strong&gt;, bạn chỉ cần đọc đ&#250;ng &lt;strong&gt;M&#227; PIN&lt;/strong&gt; k&#232;m với địa chỉ &lt;strong&gt;Email&lt;/strong&gt; hoặc &lt;strong&gt;số điện thoại&lt;/strong&gt; để được hỗ trợ một số vấn đề cần x&#225;c minh đ&#250;ng chủ dịch vụ y&#234;u cầu.\"></a>
                <img class=\"img-spiner-pin\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top:-7px;\">
                <span><strong id=\"PINCode\" style=\"color:red;position:relative; font-size:20px;\"></strong></span>
                <a class=\"xcontent__PINCreate\" id=\"createPINCode\" href=\"javascript:void(0)\">Tạo mới</a>
            </div>
        </div>

        <div class=\"xcontent\">
            <div class=\"xform\">
                <div class=\"block\" style=\"padding-bottom:3px;\">
                    <a class=\"xlabel float-left\" href=\"/billing/transactionhistory/?returnPath=homepage\">T&#224;i khoản Ch&#237;nh</a>
                    <a class=\"mbtooltip-normal\" style=\"margin:15px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"right\" data-original-title=\"L&#224; tiền được bạn nạp v&#224;o.\"></a>
                    <button id=\"tkc\"><img alt=\"0\" width=\"20\" src=\"https://id.axys.group/Content/images/eyes.svg\" style=\"margin-bottom: 5px;\"></button>
                    <img class=\"img-spiner-main-acount\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top: -7px; display: none;\">
                </div>
                <div class=\"block pad-bot\">
                    <input type=\"password\" class=\"xinput noclock\" id=\"amount-main\" value=\"123456\" readonly />
                        <a class=\"xbtn bor\" href=\"/cart/addfund/\">
                            <img width=\"20\" height=\"20\" alt=\"nut\" src=\"https://manage.matbao.net/Contents/images/Dashboard/money.svg\" /> Nạp tiền
                        </a>
                </div>
\t\t\t\t <div class=\"block\" style=\"padding-bottom:3px;\">
                    <a class=\"xlabel float-left\" href=\"/billing/promotionaccounthistory/?returnPath=homepage\">Điểm thưởng MB</a>
                    <a class=\"mbtooltip-normal\" id=\"tienkhuyenmai\" style=\"margin:15px 0 0 5px;\" data-toggle=\"tooltip\" data-placement=\"bottom\" data-original-title=\"&lt;p style=&#39;font-weight:bold;margin-bottom:5px;&#39;&gt;K&#237;nh gửi Qu&#253; Kh&#225;ch H&#224;ng,&lt;/p&gt;&lt;p style=&#39;margin-bottom:5px;&#39;&gt;Ch&#250;ng t&#244;i xin tr&#226;n trọng th&#244;ng b&#225;o rằng chương tr&#236;nh Điểm thưởng MB sẽ tạm ngưng hoạt động từ ng&#224;y 4.01.2025. Quyết định n&#224;y được đưa ra nhằm mục đ&#237;ch cải thiện hệ thống v&#224; n&#226;ng cao trải nghiệm của Qu&#253; Kh&#225;ch trong tương lai. Ch&#250;ng t&#244;i cam kết sẽ bảo lưu điểm Qu&#253; kh&#225;ch đang c&#243; v&#224; thời gian sử dụng của c&#225;c Điểm thưởng n&#224;y.
Dự kiến hoạt động lại v&#224;o cuối Qu&#253; I năm 2025. Thời gian trở lại cụ thể của chương tr&#236;nh sẽ được th&#244;ng b&#225;o sớm nhất c&#243; thể.
Xin ch&#226;n th&#224;nh cảm ơn Qu&#253; Kh&#225;ch đ&#227; tin tưởng v&#224; lựa chọn Mắt B&#227;o!&lt;/p&gt;&lt;p style=&#39;margin-bottom:5px;&#39;&gt;Tr&#226;n trọng.&lt;/p&gt;&lt;span style=&#39;font-size:18px;font-weight:600;color:#FFFFFF;&#39;&gt;Điểm thưởng MB&lt;/span&gt;&lt;ul style=&#39;padding-left:20px;padding-top:10px;margin-bottom:0;font-size:14px;&#39;&gt;&lt;li&gt;L&#224; điểm ph&#225;t sinh do c&#225;c chương tr&#236;nh khuyến m&#227;i hoặc t&#237;ch lũy dựa v&#224;o hạng thẻ th&#224;nh vi&#234;n hoặc từ việc ho&#224;n th&#224;nh c&#225;c nhiệm vụ như đ&#225;nh gi&#225; y&#234;u cầu, dịch vụ,... &lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Thời hạn sử dụng Điểm thưởng MB l&#224; 12 th&#225;ng kể từ ng&#224;y ph&#225;t sinh giao dịch điểm.&lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Điểm thưởng MB sử dụng cho việc thanh to&#225;n c&#225;c dịch vụ tại trang id.matbao.net trừ t&#234;n miền Việt Nam. &lt;/li&gt;&lt;li style=&#39;padding-top:5px;&#39;&gt;Ưu đ&#227;i t&#237;ch lũy thưởng l&#234;n đến 2,5% khi đăng k&#253;, gia hạn dịch vụ tại Mắt B&#227;o, tham khảo &lt;a href=&#39;https://www.matbao.net/uu-dai/hang-the-thanh-vien.html&#39; target=&#39;_blank&#39;&gt; chi tiết chương tr&#236;nh&lt;/a&gt;.&lt;/li&gt;&lt;/ul&gt;\"></a>
                    <button id=\"km\"><img alt=\"0\" width=\"20\" src=\"https://id.axys.group/Content/images/eyes.svg\" style=\"margin-bottom: 5px;\"></button>
                    <img class=\"img-spiner-point\" alt=\"1\" width=\"25\" src=\"https://manage.matbao.net/Contents/images/spiner.gif\" style=\"margin-top:-7px;display:none;\">
                </div>
                <div class=\"block pad-bot\">
                    <input type=\"password\" class=\"xinput noclock\" id=\"promo\" value=\"123456\" readonly />
                </div>
            </div>
        </div>
    </div>
    <div class=\"xbox\">
        <div class=\"col-md-12 no-padding tabNotification\">
            <span class=\"title\">Th&#244;ng b&#225;o</span>
            <ul>
                <li id=\"fromSystems\" class=\"active\" data-tab=\"tab-1\">Từ hệ thống</li>
                <li id=\"forYou\" class=\"no-pad-left\" data-tab=\"tab-2\">Cho bạn</li>
            </ul>
        </div>
        <div class=\"contNotification\">
            <ul class=\"col-md-12 no-padding tab-content active thongbaosTable_Sys\" id=\"tab-1\"></ul>
            <ul class=\"col-md-12 no-padding tab-content thongbaosTable\" id=\"tab-2\"></ul>
            <div class=\"col-md-12 text-left\" style=\"padding: 0 15px 15px 25px;\">
                <a href=\"/dashboard/notification/\"><u>Xem thêm</u></a>
            </div>
        </div>

    </div>
</div>



<div id=\"popup_matbao_workspace\" class=\"myPopup small matbao-popup\" data-click=\"popup\" data-change=\"main\" data-index=\"0\" data-islogin=\"true\" data-isclose=\"false\" data-storage=\"\" data-start='2024-03-20' data-end='2024-05-31' data-cookie=\"_popup_matbao_workspace\" style=\"display: none; z-index: 1000;\">
    <div class=\"popup\" onclick=\"window.open('https://www.matbao.net/mat-bao-workspace.html?utm_source=idmatbao&utm_medium=pop-up&utm_campaign=matbaoworkspace','_blank');\" style=\"width: auto; padding: 0; border-radius: 20px;\">
        <a class=\"close\">
            <svg width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">
                <title>Close</title>
                <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">
                    <g transform=\"translate(-1034.000000, -397.000000)\" fill-rule=\"nonzero\" fill=\"#000\">
                        <g transform=\"translate(506.000000, 362.000000)\">
                            <g transform=\"translate(43.000000, 35.000000)\">
                                <g transform=\"translate(485.000000, 0.000000)\">
                                    <path d=\"M19.7633984,0.236179337 C19.4478906,-0.0787134503 18.9363672,-0.0787134503 18.6208594,0.236179337 L0.236640625,18.5845224 C-0.0788671875,18.8994152 -0.0788671875,19.4099415 0.236640625,19.7248343 C0.394375,19.8823392 0.601171875,19.9610136 0.807929688,19.9610136 C1.0146875,19.9610136 1.22144531,19.8823002 1.37921875,19.7247953 L19.7633984,1.37645224 C20.0788672,1.06159844 20.0788672,0.551072125 19.7633984,0.236179337 Z\" id=\"Path\" />
                                    <path d=\"M19.7633594,18.5845614 L1.37914062,0.236218324 C1.06367187,-0.0786744639 0.552109375,-0.0786744639 0.236640625,0.236218324 C-0.0788671875,0.551072125 -0.0788671875,1.06159844 0.236640625,1.37649123 L18.6208594,19.7248733 C18.7785937,19.8823392 18.9853906,19.9610526 19.1921484,19.9610526 C19.3989062,19.9610526 19.6057031,19.8823392 19.7633984,19.7249123 C20.0788281,19.4099805 20.0788281,18.8994542 19.7633594,18.5845614 Z\" id=\"Path\" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </a>
        <div class=\"popup-body\">
            <img src=\"http://resource.matbao.com/IDPortal/Image/Popup/matbao_workspace.gif\" />
        </div>
    </div>
</div>

<div id=\"popup_support_review_not_rating\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
    <div class=\"popup\" style=\"height: 302px; padding: 20px; width: 348px;\">
        <a class=\"close\" onclick=\"closePopupSupport()\" style=\"margin-right:14px;margin-top:8px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;width:15px;\" /></a>
        <div class=\"detail text-center\">
            <div class=\"support-review-logo\"></div>
            <div style=\"margin-top:18px;\"><span style=\"font-size:18px;font-weight:600;\">Bạn có <span style=\"color: #EA4649;\"><span class=\"not-review-count\"></span> yêu cầu chưa đánh giá</span>!</span></div>
            <div style=\"margin-top:6px;font-size:14px;font-weight:500;\">
                <span>Vui lòng cho chúng tôi biết cảm nhận của</span>
                <span>bạn, để chúng tôi phục vụ bạn tốt hơn.</span>
            </div>
            <div style=\"margin-top:28px;text-align:center;\">
                <a href=\"/supports/view-support-requested/\" onclick=\"closePopupSupport()\" class=\"btn\" id=\"change_support_request\" style=\"font-size: 12px; font-weight: 600; border-radius: 8px; background-color: #1E74E8;\">Xem các yêu cầu đã gửi</a>
            </div>
        </div>
    </div>
</div>
    <div id=\"ekycInstuct\">
        <span style=\"display:block;font-size:14px;\">Việc xác thực <span>Chữ k&#253; số</span> sẽ giúp bạn hoàn tất hồ sơ nhanh hơn. <br /> Xem hướng dẫn chi tiết <a href=\"https://wiki.matbao.net/huong-dan-xac-thuc-tai-khoan-khach-hang-truc-tuyen/#doi-voi-khach-hang-la-to-chuc\" target=\"_blank\" style=\"color:white;text-decoration:underline;\">tại đây.</a></span>
        <button class=\"closeEkyc\" id=\"closeInstructEkyc\" onclick=\"closepopupEkyc()\">ĐÃ HIỂU</button>
    </div>

        </div>
    </div>
    <div class=\"bottom-popup-group\">
        <div class=\"gopy_home\">
    <a class=\"gopy_btn\">G&#243;p &#253; trải nghiệm</a>
    <div class=\"gopy_content\" style=\"display:none;\">
        <a class=\"close\"></a>
        <strong>G&#243;p &#253; trải nghiệm</strong>
        <div class=\"col-md-12 no-padding\" style=\"padding: 15px 0 10px 0;\">
            <span>Đầu ti&#234;n h&#227;y cho ch&#250;ng t&#244;i biết g&#243;p &#253; của bạn về vấn đề g&#236;?</span>
            <div class=\"col-md-12 no-padding gopy__chklist\">

            </div>
        </div>
        <textarea id=\"txtGopy\" name=\"txtGopy\" placeholder=\"Chia sẻ th&#234;m với ch&#250;ng t&#244;i về g&#243;p &#253; của bạn v&#224; đừng qu&#234;n đ&#237;nh k&#232;m hỉnh ảnh li&#234;n quan bạn nh&#233;!\" rows=\"5\"></textarea>
        <div class=\"col-md-12 no-padding formComment--ChooseFile\" style=\"padding-bottom:10px;\">
            <div class=\"formComment__group\">
                <p class=\"formComment__label\" style=\"width:100% !important;\">
                    Tập tin đ&#237;nh k&#232;m:
                </p>
                <div class=\"formComment__control\">
                    <label for=\"formComment__file\" class=\"formComment__file ChooseFBFile\" style=\"height:36px; line-height: 36px;\">Tải l&#234;n</label>
                    <input name=\"FBFile\" type=\"file\" class=\"form-control FBFile\" data-msg-error-title=\"Upload Error!\" style=\"display:none;\" multiple=multiple accept=\".png, .jpg, .jpeg\" />
                </div>
            </div>
        </div>
        <em><b>Tối đa 5 tập tin</b> đính kèm và tổng dung lượng <b>không quá 4MB </b>với định dạng JPG và PNG.</em>
        <div class=\"col-md-12 no-padding frame_previewFile\" style=\"display:none;\">
            <div class=\"col-md-12 no-padding list-fileGopY\" style=\"margin-bottom:0;\">
            </div>
        </div>
        <u class=\"lblMSG\" style=\"color:red;\"></u>
        <button class=\"gopy_send\" id=\"btnSendGopy\">Gửi g&#243;p &#253;</button>
    </div>
</div>

    </div>
    <!--file Upload temp-->
    <input type=\"file\" class=\"hidden\" id=\"fileUploadTemp\" />
    <!--end-->

    <div class=\"nowloading\">
        <img alt=\"loading\" src=\"https://manage.matbao.net/Contents/images/Navigation/loading.svg\" />
        <b>Xin chờ giây lát...</b>
    </div>

    <div id=\"formServiceAdvisory\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width:600px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformServiceAdvisory\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Tư vấn Chili</span>
            <div class=\"detail bor-top pad-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\">
                        <p style=\"margin-bottom:10px;\">Bạn cần <b>chọn người liên hệ và giờ tư vấn</b>, nhân viên <span class=\"product-name\"></span> sẽ liên hệ để tư vấn dịch vụ cho bạn.</p>
                    </div>
                    <p style=\"margin-bottom:10px;\"><b>Chọn người liên hệ</b></p>
                    <div class=\"col-md-12 no-padding\" id=\"ServiceContact\" style=\"margin-bottom:10px;\">
                        <img class=\"afs--loading\" alt=\"1\" src=\"https://manage.matbao.net/Contents/images/Spinner-1s.gif\" />
                    </div>
                    <a class=\"st-newContact\" href=\"javascript:void(0);\" id=\"addServiceNewContact\">Thêm người liên hệ</a>
                    <p style=\"margin-bottom:10px;display: block;padding-top: 10px;\"><b>Chọn khung giờ liên hệ</b></p>
                    <div class=\"col-md-12 no-padding\">
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" checked=checked value=\"09:00 - 10:30\" /><b>09h - 10h30</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"10:30 - 12:00\" /><b>10h30 - 12h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"13:30 - 15:00\" /><b>13h30 - 15h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeServiceRadio\" value=\"15:00 - 17:00\" /><b>15h - 17h</b></label>
                        </div>
                    </div>
                    <div class=\"col-md-12 no-padding div__SendInfo3Parties\" style=\"margin-top:-5px;padding-bottom:10px;\">
                        <input type=\"checkbox\" id=\"ckbServiceAdvisoryApprove\" name=\"ckbChiliApprove\" />
                        <label for=\"ckbServiceAdvisoryApprove\" class=\"SendInfo3Parties__label\">Tôi đồng ý việc gửi thông tin liên hệ sang nhà cung cấp dịch vụ mà tôi lựa chọn.</label>
                    </div>
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <a id=\"btnConfirmServiceAdvisory\" class=\"btn disabled fr-bt\" data-email=\"\" data-linkedId=\"-1\" data-cpcode=\"\" data-description=\"Tư vấn về dịch vụ\" data-whereclick=\"\" data-phone=\"\" style=\"margin-left:0;float:left;\">Xác nhận</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formAddNewServiceContact\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformAddServiceContact\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Thêm người liên hệ</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:15px;\">Nhập thông tin người liên hệ mới theo mẫu bên dưới</p>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Họ và tên</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtNameService\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Số điện thoại</label>
                        <input type=\"text\" value=\"\" id=\"txtPhoneService\" maxlength=\"10\" placeholder=\"\" onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Email</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtEmailService\" />
                    </div>
                </div>
            </div>
            <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                <a id=\"btnAddNewServiceConfirm\" class=\"btn confirmCP fr-bt\">Xác nhận</a>
            </div>
        </div>
    </div>

    <div id=\"formServiceAdvisorySuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/checked.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký thành công</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <p style=\"margin-bottom:10px;\">Nhân viên <span class=\"product-name\"></span> sẽ liên hệ với bạn theo <b>thông tin:</b></p>
                        <p style=\"margin-bottom:10px;\"><b>- <span id=\"outServiceName\"></span></b> • <span id=\"outServicePhone\"></span></p>
                        <p style=\"margin-bottom:10px;\"><b>- Thời gian liên hệ từ <span id=\"outServiceTime\"></span></b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formCouponPartner\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width: 600px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Coupon từ Đối t&#225;c</span>
            <div class=\"detail bor-top pad-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\">
                        <p style=\"margin-bottom:25px;\">Bạn đ&#227; đăng k&#253; th&#224;nh c&#244;ng  <b><span id=\"title-cp\"></span></b>.</p>
                        <p style=\"margin-bottom:10px;\">Bạn cần <b>chọn người liên hệ và giờ tư vấn</b>, nhân viên <span class=\"employess\"></span> sẽ li&#234;n hệ với bạn để hướng dẫn k&#237;ch hoạt dịch vụ.</p>
                    </div>
                    <p style=\"margin-bottom:10px;\"><b>Chọn người li&#234;n hệ</b></p>
                    <div class=\"col-md-12 no-padding\" id=\"CBContact\" style=\"margin-bottom:10px;\">
                    </div>
                    <a class=\"st-newContact\" href=\"javascript:void(0);\" id=\"addNewContact\">Th&#234;m người li&#234;n hệ</a>
                    <p style=\"margin-bottom:10px;display: block;padding-top: 10px;\"><b>Chọn khung giờ li&#234;n hệ</b></p>
                    <div class=\"col-md-12 no-padding\">
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" checked=checked value=\"09:00 - 10:30\" /><b>09h - 10h30</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"10:30 - 12:00\" /><b>10h30 - 12h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"13:30 - 15:00\" /><b>13h30 - 15h</b></label>
                        </div>
                        <div class=\"radio\">
                            <label><input type=\"radio\" name=\"timeradio\" value=\"15:00 - 17:00\" /><b>15h - 17h</b></label>
                        </div>
                    </div>
                    <div class=\"col-md-12 no-padding div__SendInfo3Parties\" style=\"margin-top:-5px;padding-bottom:10px;\">
                        <input type=\"checkbox\" id=\"ckbApprove\" name=\"ckbApprove\" />
                        <label for=\"ckbApprove\" class=\"SendInfo3Parties__label\">T&#244;i đồng &#253; việc gửi th&#244;ng tin li&#234;n hệ sang nh&#224; cung cấp dịch vụ m&#224; t&#244;i lựa chọn.</label>
                    </div>
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <a id=\"btnCPPartnerConfirm\" class=\"btn confirmCP fr-bt disabled\" data-email=\"\" data-cpcode=\"\" data-description=\"\" data-linkedId=\"-1\" data-phone=\"\" style=\"float:left;margin-left:0 !important;\">X&#225;c nhận</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formAddNewContact\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"formAddNewContact__close\" style=\"margin-right:15px;\" id=\"closeformAddNewContact\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <span class=\"title\" style=\"font-size:26px;padding: 0 40px 15px 0;\">Th&#234;m người li&#234;n hệ</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:15px;\">Nhập th&#244;ng tin người li&#234;n hệ mới theo mẫu b&#234;n dưới</p>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Họ v&#224; t&#234;n</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtName\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Số điện thoại</label>
                        <input type=\"text\" value=\"\" id=\"txtPhone\" maxlength=\"10\" onkeypress=\"return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))\" />
                    </div>
                    <div class=\"col-md-12 no-padding\">
                        <label class=\"formAddNewContact__lb\">Email</label>
                        <input class=\"ip-width-name\" type=\"text\" value=\"\" id=\"txtEmail\" />
                    </div>
                </div>
            </div>
            <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                <a id=\"btnAddNewConfirm\" class=\"btn confirmCP fr-bt\">X&#225;c nhận</a>
            </div>
        </div>
    </div>

    <div id=\"formRegisterSuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/checked.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký thành công</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <div class=\"col-md-12 no-padding\" style=\"margin-bottom: 0;\">
                        <input class=\"hidden\" id=\"outEmail\" value=\"\" />
                        <input class=\"hidden\" id=\"outUserName\" value=\"MB1961543\" />
                        <p style=\"margin-bottom:10px;\">Nhân viên <span class=\"employess\"></span> sẽ liên hệ với bạn theo <b>thông tin:</b></p>
                        <p style=\"margin-bottom:10px;\"><b>- <span id=\"outName\"></span></b> • <span id=\"outPhone\"></span></p>
                        <p style=\"margin-bottom:10px;\"><b>- Thời gian liên hệ <span id=\"outTime\"></span></b></p>
                    </div>
                    <div class=\"col-md-12 no-padding\" id=\"areaForCompany\" style=\"margin-bottom: 0;\">
                        <div class=\"col-md-12 no-padding\" id=\"isAddNew\" style=\"margin-top:10px;\">
                            <p style=\"margin-bottom:5px;\">Bạn có muốn <b>thêm người này vào danh sách quản lý</b> dịch vụ không? Vai trò người này là gì?</p>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"1\" />Quản lý kỹ thuật</label>
                            </div>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"2\" />Quản lý thanh toán</label>
                            </div>
                            <div class=\"radio\">
                                <label><input type=\"radio\" name=\"roleradio\" value=\"-1\" />Không, cảm ơn!</label>
                            </div>
                        </div>
                        <div class=\"col-md-12 no-padding float-right\" style=\"margin-bottom: 0;\">
                            <a id=\"btnNewTicketUsers\" class=\"btn disabled confirmCP fr-bt\">Hoàn tất</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formRegisterFailed\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;margin-top: -100px;padding:30px;\">
            <a class=\"close\" style=\"margin-right:15px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 17px;\" /></a>
            <img src=\"https://manage.matbao.net/Contents/images/Icon/warning.svg\" style=\"float:left;width:30px;margin-top:5px;\" />
            <span class=\"title\" style=\"font-size:26px;padding: 0px 40px 15px 40px;\">Đăng ký không thành công</span>
            <div class=\"detail\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p style=\"margin-bottom:10px;\">
                        Đăng ký \"<span id=\"description\"></span>\" không thành công.
                    </p>
                    <span>Vui lòng liên hệ nhân viên Mắt Bão để được hỗ trợ.</span>
                </div>
            </div>
        </div>
    </div>

    <div id=\"formGopYSuccess\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;padding:30px;width:600px;\">
            <a class=\"close\" style=\"margin-right:5px;\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;width:15px;\" /></a>
            <div class=\"detail\">
                <div id=\"frmMobile_1\" class=\"form form_gopy_pa2\">
                    <div class=\"col-md-12 no-padding text-center\" style=\"margin-bottom:0;\">
                        <span><b style=\"color:#1e74e8;display:block;margin-bottom:5px;font-size:20px;\">Gửi góp ý thành công!</b><b>Mắt Bão rất cảm ơn những góp ý của bạn</b> dành cho chúng tôi. Lưu ý rằng <b>chúng tôi sẽ không thể trả lời từng góp ý</b> của bạn, nhưng <b>chắc chắn chúng tôi sẽ ghi nhận và xử lý</b> để hoàn thiện sản phâm hơn.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id=\"popup_verification\" class=\"myPopup small\" data-change=\"main\" style=\"display:none;\">
        <div class=\"popup\" style=\"height: auto;min-height: 200px;margin-top: -100px;\">
            <a class=\"close\"><img src=\"https://manage.matbao.net/Contents/images/Icon/Close.svg\" style=\"height: 15px;\" /></a>
            <span class=\"title text-danger\" style=\"font-size: 20px; margin-bottom: 10px; padding: 0 5px;\">Kiểm tra thông tin cơ bản trước khi xác thực tài khoản bằng eKYC!</span>
            <div class=\"detail pad-top bor-top\">
                <div id=\"frmMobile_1\" class=\"form\">
                    <p>
                        Vui lòng kiểm tra và cập nhật thông tin cơ bản của bạn trước khi tiến hành xác thực tài khoản bằng Chữ k&#253; số, đảm bảo những thông tin sau:
                    </p>
                    <ul>
                            <li><b>Mã số thuế</b></li>
                            <li><b>Địa chỉ</b></li>
                            <li><b>Số điện thoại, email đang sử dụng.</b></li>
                            <li><b>Ngày thành lập</b></li>
                        <li>Thay đổi các thông tin khác (nếu có).</li>
                    </ul>
                    <div class=\"col-md-12 no-padding\" style=\"text-align:right;\">
                        <a href=\"/supports/52/ho-tro?parent_module=request&linkfrom=account\" class=\"btn btn-primary\" style=\"height:auto!important; padding: 10px 20px !important; background: #1E74E8; color: #fff; font-weight: 600; font-size: 14px; border-radius: .25rem !important;\">Thay đổi thông tin</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src=\"https://manage.matbao.net/Scripts/MBID/jquery-1.10.2.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/popper.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/bootstrap.min.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/pnotify/pnotify.custom.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/Shared.js?ver=001\"></script>
    <script type=\"text/javascript\" src=\"https://manage.matbao.net/Scripts/slick.min.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/jquery.autocomplete.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/summernote.js\"></script>
    <script src=\"https://manage.matbao.net/Assets/MBID/vendor/summernote/lang/summernote-vi-VN.js\"></script>
    <script src=\"https://manage.matbao.net/assets/vendor/select2/js/select2.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/cookie.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/custom-popup.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/intro.js\"></script>    
    <script src=\"https://code.jquery.com/ui/1.13.2/jquery-ui.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/simple-calendar.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/dashboard/dashboard.js\"></script>
    <script src=\"https://manage.matbao.net/Scripts/MBID/intro.js\"></script>
    <script type=\"text/javascript\">
        \$(document).ready(function () {
            GetPinCode();

            \$('.tabNotification ul li').click(function () {
                var tab_id = \$(this).attr('data-tab');

                \$('.tabNotification ul li').removeClass('active');
                \$('.tab-content').removeClass('active');

                \$(this).addClass('active');
                \$(\"#\" + tab_id).addClass('active');
            });
            \$(\"#tkc\").click(function () {
                if (\$(this).children(\"img\").attr(\"alt\") == \"0\") {
                    \$('.img-spiner-main-acount').fadeIn();
                    \$.ajax({
                        type: 'POST',
                        url: '/billing/get-main-acount',
                        success: function (resp) {
                            resp = \$.parseJSON(resp);
                            if (resp.Status == true) {
                                var money = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                                if (money.endsWith(\".0\")) {
                                    money = money.substring(0, money.length - 2);
                                }
                                \$('#amount-main').val(money + \" \" + \"đ\");
                                \$('#amount-main').attr(\"type\",\"text\");
                            }
                            else {
                                \$('#amount-main').val(\"0 \" + \"đ\");
                                \$('#amount-main').attr(\"type\", \"text\");
                            }
                            \$('.img-spiner-main-acount').fadeOut();
                        }
                    });
                    \$(this).children(\"img\").attr(\"alt\", \"1\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyex.svg\");
                }
                else {
                    \$(\"#amount-main\").val(\"123456\");
                    \$('#amount-main').attr(\"type\", \"password\");
                    \$(this).children(\"img\").attr(\"alt\", \"0\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyes.svg\");
                }
            });
            \$('#km').click(function () {
                if (\$(this).children(\"img\").attr(\"alt\") == \"0\") {
                    \$('.img-spiner-point').fadeIn();
                    \$.ajax({
                        type: 'POST',
                        url: '/billing/get-promotion-acount',
                        success: function (resp) {
                            resp = \$.parseJSON(resp);
                            if (resp.Status == true) {
                                var money = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                                if (money.endsWith(\".0\")) {
                                    money = money.substring(0, money.length - 2);
                                }
                                \$('#promo').val(money + \" \" + \"điểm\");
                                \$('#promo').attr(\"type\",\"text\");
                            }
                            else {
                                \$('#promo').val(\"0 \" + \"điểm\");
                                \$('#promo').attr(\"type\", \"text\");
                            }
                            \$('.img-spiner-point').fadeOut();
                        }
                    });
                    \$(this).children(\"img\").attr(\"alt\", \"1\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyex.svg\");
                } else {
                    \$(\"#promo\").val(\"123456\");
                    \$('#promo').attr(\"type\", \"password\");
                    \$(this).children(\"img\").attr(\"alt\", \"0\");
                    \$(this).children(\"img\").attr(\"src\", \"https://login.matbao.net/Content/images/eyes.svg\");
                }
            });
            \$('#vw_point').one('click', function loadPoint() {
                \$.ajax({
                    type: 'get',
                    url: '/dashboard/get-point',
                    success: function (resp) {
                        resp = \$.parseJSON(resp);
                        if (resp.Status == true) {
                            var point = resp.Data.toFixed(1).replace(/\\d(?=(\\d{3})+\\.)/g, '\$&.');
                            if (point.endsWith(\".0\")) {
                                point = point.substring(0, point.length - 2);
                            }
                            \$('#tt').val(point + \" điểm\");
                        }
                        else {
                            \$('#tt').val(\"0 điểm\");
                        }
                    }
                });
            });

            if (get_cookie(\"ekycinstructure_\" + get_cookie(\"MBIDCodePortalCookieManage\")) != \"readed\") {
                setTimeout(function () {
                    \$(\"#ekycInstuct\").fadeIn();
                }, 1000);
            }
        });

        function promowillexpired() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/count-promotion-about-to-expired',
                success: function (resp) {
                    if (resp.success == true) {
                        var TaiKhoanKhuyenMaiToolttip = \$(\"#tienkhuyenmai\").attr(\"data-original-title\");
                        if (resp.data != undefined && parseInt(resp.data.totalMoney) > 0) {
                            \$(\"#tienkhuyenmai\").attr(\"data-original-title\", `<p><span>- Bạn có \${formatMoney(resp.data.totalMoney)} đồng tiền khuyến mãi hết hạn trong tháng \${resp.data.expiredMonth}</span>. Vui lòng sử dụng ngay hoặc gia hạn ưu đãi bằng cách phát sinh đơn hàng > 99.000đ (Không bao gồm VAT)</p>` + TaiKhoanKhuyenMaiToolttip);
                        }
                        else {
                            \$(\"#tienkhuyenmai\").attr(\"data-original-title\", TaiKhoanKhuyenMaiToolttip);
                        }
                    }
                    else {
                        var TaiKhoanKhuyenMaiToolttip = \$(\"#tienkhuyenmai\").attr(\"data-original-title\");
                        \$(\"#tienkhuyenmai\").attr(\"data-original-title\", TaiKhoanKhuyenMaiToolttip);
                    }
                }
            });
        }
        function rewardpointwillexpired() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/reward-point-about-to-expired',
                success: function (resp) {
                    if (resp.success == true) {
                        var diemthuongtooltip = \$(\"#diemthuong\").attr(\"data-original-title\");
                        if (resp.data != undefined && parseInt(resp.data.point) > 0) {
                            \$(\"#diemthuong\").attr(\"data-original-title\", `<p><span>- Bạn có \${resp.data.point} điểm hết hạn trong tháng \${resp.data.month}</span>. Vui lòng sử dụng ngay hoặc gia hạn ưu đãi bằng cách phát sinh đơn hàng > 99.000đ (Không bao gồm VAT)</p>` + diemthuongtooltip);
                        }
                        else {
                            \$(\"#diemthuong\").attr(\"data-original-title\", diemthuongtooltip);
                        }
                    }
                    else {
                        var diemthuongtooltip = \$(\"#diemthuong\").attr(\"data-original-title\");
                        \$(\"#diemthuong\").attr(\"data-original-title\", diemthuongtooltip);
                    }
                }
            });
        }
        function formatDate(date) {
            let day = date.getDate();
            if (day < 10) {
                day = \"0\" + day;
            }
            let month = date.getMonth() + 1;
            if (month < 10) {
                month = \"0\" + month;
            }
            let year = date.getFullYear();
            return day + \"/\" + month + \"/\" + year;
        }
        function formatMoney(num) {
            var val = num.toString().replace(/[^\\d.]/g, \"\");
            var arr = val.split('.');
            var lftsde = arr[0];
            var rghtsde = arr[1];
            var result = \"\";
            var lng = lftsde.length;
            var j = 0;

            for (i = lng; i > 0; i--) {
                j++;
                if (((j % 3) == 1) && (j != 1)) {
                    result = lftsde.substr(i - 1, 1) + \".\" + result;
                } else {
                    result = lftsde.substr(i - 1, 1) + result;
                }
            }

            if (rghtsde == null) {
                return result;
            } else {
                return result + '.' + arr[1];
            }
        };
        var createCookie = function (name, value, days) {
            var expires;
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = \"; expires=\" + date.toGMTString();
            }
            else {
                expires = \"\";
            }
            document.cookie = name + \"=\" + value + expires + \"; path=/\";
        }

        function getCookie(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + \"=\");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(\";\", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return \"\";
        }
        function closepopupEkyc() {
            \$(\"#ekycInstuct\").fadeOut();
            set_cookie(\"ekycinstructure_\" + get_cookie(\"MBIDCodePortalCookieManage\"), \"readed\")
        }
        \$(\"#createPINCode\").click(function () {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/create-new-pin-code',
                success: function (resp) {
                    if (resp.status) {
                        \$(\"#PINCode\").text(resp.data);
                        new PNotify({
                            title: 'Thông Báo',
                            text: resp.message,
                            type: 'custom',
                            addclass: 'notification-success',
                            icon: 'fa fa-exclamation'
                        });
                    }
                    else {
                        new PNotify({
                            title: 'Thông Báo',
                            text: resp.message,
                            type: 'custom',
                            addclass: 'notification-error',
                            icon: 'fa fa-exclamation'
                        });
                    }
                }
            });
        });

        function GetPinCode() {
            \$.ajax({
                type: 'POST',
                url: '/dashboard/get-pin-code/',
                success: function (resp) {
                    \$('.img-spiner-pin').hide();
                    resp = \$.parseJSON(resp);
                    if (resp.Status == true) {
                        \$('#PINCode').text(resp.Data);
                    }
                    else {
                        \$('#PINCode').text(\"\");
                    }
                },
                error: function () {
                    \$('#PINCode').text(\"\");
                }
            });
        };

        function openPopupSupportReview() {
            var popUpSupportReview = localStorage.getItem(\"popupsupport\");
            if (popUpSupportReview != getCookie(\"MBIDSubPortalCookieManage\")) {
                \$.ajax({
                    type: 'POST',
                    url: '/dashboard/support-review-not-rating',
                    success: function (resp) {
                        if (resp.success == true) {
                            \$(\".not-review-count\").html(resp.data.length);
                            \$(\"#popup_support_review_not_rating\").fadeIn();
                        }
                    }
                });
            }
        }
        function closePopupSupport() {
            localStorage.setItem(\"popupsupport\", getCookie(\"MBIDSubPortalCookieManage\"));
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function startGuide() {
            var storedItem = localStorage.getItem(\"menuguide\");
            if (storedItem == undefined || storedItem == \"\") {
                \$('.leftmenu').removeClass('cloze').addClass('hovermenu');
                \$('.rightcontent').addClass('floatdown');
                await sleep(2000);
                startIntro();
            }
            else {
                flag_start = false;
                openPopupSupportReview();
            }
        }
        function startIntro() {
            var intro = introJs();
            intro.setOptions({
                steps: [
                    {
                        element: document.querySelector('.firstguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>1/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ lưu trữ bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Cloud Hosting</li><li>Wordpress</li><li>Cloud Server</li><li>Mắt Bão WS (web)</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.secondguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>2/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ Email & Workspace bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Microsoft 365</li><li>Google Workspace</li><li>Mắt Bão Workspace</li><li>Email</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.thirdguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>3/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ Hóa đơn & Chữ ký số bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Chữ ký số - CA</li><li>Hóa đơn điện tử</li></ul>\",
                        position: 'right',
                    },
                    {
                        element: document.querySelector('.fourthguide'),
                        title: \"<p style='font-size:14px;font-weight:500;float:right;'>4/4</p><p style='font-size:16px;font-weight:700;'>Hướng dẫn</p>\",
                        intro: \"<p style='font-size:14px;margin-bottom:0px;'>Các dịch vụ tiện ích bao gồm:</p><ul style='font-size:14px;padding-left:20px;'><li>Dịch vụ khác</li><li>Canvato</li></ul>\",
                        position: 'right',
                    }
                ],
                exitOnOverlayClick: false
            });
            intro.onbeforechange(function () {
                if (this._currentStep == 0) {
                    \$(\".firstguide\").addClass(\"active\");
                    \$(\".firstguide .openguide1\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 1) {
                    \$(\".firstguide\").removeClass(\"active\");
                    \$(\".firstguide .openguide1\").css(\"display\", \"none\");
                    \$(\".secondguide\").addClass(\"active\");
                    \$(\".secondguide .openguide2\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 2) {
                    \$(\".secondguide\").removeClass(\"active\");
                    \$(\".secondguide .openguide2\").css(\"display\", \"none\");
                    \$(\".thirdguide\").addClass(\"active\");
                    \$(\".thirdguide .openguide3\").css(\"display\", \"block\");
                }
                else if (this._currentStep == 3) {
                    \$(\".thirdguide\").removeClass(\"active\");
                    \$(\".thirdguide .openguide3\").css(\"display\", \"none\");
                    \$(\".fourthguide\").addClass(\"active\");
                    \$(\".fourthguide .openguide4\").css(\"display\", \"block\");
                }
            });
            intro.onbeforeexit(function () {
                \$(\".fourthguide\").removeClass(\"active\");
                \$(\".fourthguide .openguide4\").css(\"display\", \"none\");
                \$('.leftmenu').removeClass('hovermenu');
                \$('.leftmenu').addClass('cloze');
                \$('.rightcontent').removeClass('floatdown');
                localStorage.setItem(\"menuguide\", \"seen\");
                flag_start = false;
                openPopupSupportReview();
            });
            intro.start();
        }
        flag_start = true;
        startGuide();
    </script>

    <script>
        function searchpagemain() {
            if (\$(\"#menu-page-search\").val() != \"\")
                window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
        }
        \$(document).ready(function () {
            setTimeout(showTopbanner(), 3500);
            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            // Auto Complete cho phần thanh search
            \$(\"#menu-page-search\").keyup(async function (e) {
                if (e.keyCode == 13 && \$(\"#menu-page-search\").val() != \"\")
                    window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
            })
            \$(\"#menu-page-search\").autocomplete({
                // Số kí tự sẽ kích hoạt search-> mở dropdown
                minLength: 1,
                // Source
                source: [{\"label\":\"Cài đặt tài khoản\",\"desc\":\"Cài đặt tài khoản\",\"display\":\"Cài đặt\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Danh sách bản khai tên miền\",\"desc\":\"Danh sách bản khai tên miền\",\"display\":\"Danh sách\",\"url\":\"/domains/ho-so-ten-mien\",\"scrolltoId\":null},{\"label\":\"Danh sách đơn hàng\",\"desc\":\"Danh sách đơn hàng\",\"display\":\"Danh sách\",\"url\":\"/Orders\",\"scrolltoId\":null},{\"label\":\"Danh sách hợp đồng\",\"desc\":\"Danh sách hợp đồng\",\"display\":\"Danh sách\",\"url\":\"/contracts/list-contracts\",\"scrolltoId\":null},{\"label\":\"Nạp tiền \",\"desc\":\"Nạp tiền \",\"display\":\"Nạp tiền\",\"url\":\"/cart/addfund\",\"scrolltoId\":null},{\"label\":\"Quản lý Cloud Server\",\"desc\":\"Quản lý Cloud Server\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-may-chu\",\"scrolltoId\":null},{\"label\":\"Quản lý Chili web\",\"desc\":\"Quản lý Chili web\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-chili\",\"scrolltoId\":null},{\"label\":\"Quản lý Chữ ký email Canvato\",\"desc\":\"Quản lý Chữ ký email Canvato\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-canvato\",\"scrolltoId\":null},{\"label\":\"Quản lý Dịch vụ khác\",\"desc\":\"Quản lý Dịch vụ khác\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-khac\",\"scrolltoId\":null},{\"label\":\"Quản lý Email\",\"desc\":\"Quản lý Email\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-email\",\"scrolltoId\":null},{\"label\":\"Quản lý Google Workspace\",\"desc\":\"Quản lý Google Workspace\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-google-workspace\",\"scrolltoId\":null},{\"label\":\"Quản lý Hóa đơn điện tử Mifi\",\"desc\":\"Quản lý Hóa đơn điện tử Mifi\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-einvoice\",\"scrolltoId\":null},{\"label\":\"Quản lý Hosting\",\"desc\":\"Quản lý Hosting\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-hosting\",\"scrolltoId\":null},{\"label\":\"Quản lý Office 365\",\"desc\":\"Quản lý Office 365\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-office-365\",\"scrolltoId\":null},{\"label\":\"Quản lý SSL\",\"desc\":\"Quản lý SSL\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-ssl\",\"scrolltoId\":null},{\"label\":\"Quản lý tên miền\",\"desc\":\"Quản lý tên miền\",\"display\":\"Quản lý\",\"url\":\"/domains\",\"scrolltoId\":null},{\"label\":\"Quản lý WordPress\",\"desc\":\"Quản lý WordPress\",\"display\":\"Quản lý\",\"url\":\"/services/dich-vu-wordpress\",\"scrolltoId\":null},{\"label\":\"Tài khoản Chính\",\"desc\":\"Tài khoản Chính\",\"display\":\"Tài khoản\",\"url\":\"/billing/transactionhistory\",\"scrolltoId\":null},{\"label\":\"Tài khoản Khuyến mãi \",\"desc\":\"Tài khoản Khuyến mãi \",\"display\":\"Tài khoản\",\"url\":\"/billing/promotionaccounthistory\",\"scrolltoId\":null},{\"label\":\"Tài khoản Tài khoản\",\"desc\":\"Tài khoản Tài khoản\",\"display\":\"Tài khoản\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Thanh toán \",\"desc\":\"Thanh toán \",\"display\":\"Thanh toán\",\"url\":\"/billing/Payment\",\"scrolltoId\":null},{\"label\":\"Thay đổi mật khẩu\",\"desc\":\"Thay đổi mật khẩu\",\"display\":\"Thay đổi\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-dang-nhap\"},{\"label\":\"Thay đổi thông tin tài khoản\",\"desc\":\"Thay đổi thông tin tài khoản\",\"display\":\"Thay đổi\",\"url\":\"/supports/52/ho-tro?parent_module=request&linkfrom=account\",\"scrolltoId\":null},{\"label\":\"Thông báo \",\"desc\":\"Thông báo \",\"display\":\"Thông báo\",\"url\":\"/dashboard/notification/#290_s\",\"scrolltoId\":null},{\"label\":\"Thông tin cơ bản\",\"desc\":\"Thông tin cơ bản\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-co-ban\"},{\"label\":\"Thông tin đăng nhập\",\"desc\":\"Thông tin đăng nhập\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":\"thong-tin-dang-nhap\"},{\"label\":\"Thông tin tài khoản\",\"desc\":\"Thông tin tài khoản\",\"display\":\"Thông tin\",\"url\":\"/users/account\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Coupon từ đối tác\",\"desc\":\"Ưu đãi Coupon từ đối tác\",\"display\":\"Ưu đãi\",\"url\":\"/coupons/promotions-linked-new\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Điểm thưởng\",\"desc\":\"Ưu đãi Điểm thưởng\",\"display\":\"Ưu đãi\",\"url\":\"/coupons/reward-points\",\"scrolltoId\":null},{\"label\":\"Ưu đãi Đổi quà\",\"desc\":\"Ưu đãi Đổi quà\",\"display\":\"Ưu đãi\",\"url\":\"/gifts/exchange-gifts\",\"scrolltoId\":null},{\"label\":\"Ưu đãi khuyến mãi \",\"desc\":\"Ưu đãi khuyến mãi \",\"display\":\"Ưu đãi\",\"url\":\"/coupons/promotion\",\"scrolltoId\":null}],
                // Giao diện hiển thị của dropdown ui
                create: function () {
                    \$(this).data('ui-autocomplete')._renderItem = function (ul, item) {
                        if (item.desc == \"Wiki\")
                            return \$('<li>').addClass('default')
                                .append(`<div>
                                            <p>
                                                <?xml version=\"1.0\" encoding=\"utf-8\"?>
                                                <svg fill=\"#000000\" width=\"17px\" height=\"17px\" viewBox=\"0 0 1920 1920\" xmlns=\"http://www.w3.org/2000/svg\">
                                                    <path d=\"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z\" fill-rule=\"evenodd\"/>
                                                </svg>&nbsp;
                                                <a style=\"color:#464646;text-decoration: none\" target=\"_blank\" href='https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}' >Tìm từ khóa \"\${\$(\"#menu-page-search\").val()}\"</a>
                                            </p>
                                        </div>`)
                                .appendTo(ul);
                        else
                            return \$('<li>')
                                .append('<div><p>' + item.desc + '</p></div>')
                                .appendTo(ul);
                    };
                    \$(this).data('ui-autocomplete')._resizeMenu = function () {
                        var ul = this.menu.element;
                        ul.outerWidth(this.element.outerWidth());
                    }
                },
                response: function (event, ui) {
                    ui.content.unshift({ desc: \"Wiki\", value: \"\" });
                },
                // Gắn dropdown vào div search bar
                appendTo: \"#search_bar\",
                // Click chọn 1 item nào đó
                select: function (event, ui) {
                    if (ui.item == undefined)
                        window.open(`https://wiki.matbao.net/?s=\${\$(\"#menu-page-search\").val()}`, '_blank').focus();
                    window.location.href = ui.item.url + \"?scrolltoId=\" + ui.item.scrolltoId;
                    return false;
                },
            });
            \$(window).resize(function () {
                let width = \$('.header .leftlan').width() + \$('.header .righacc').width() + 25;
                \$('.ui-autocomplete').hide();
                showTopbanner()
            });

            activeMenu();
            loadCountMenu();

            \$(\".gopy_btn\").click(function () {
                loadFeedbackMenu();
                \$(\".gopy_btn\").hide();
                \$(\".gopy_content\").fadeIn();
            });
            \$(\".gopy_content .close\").click(function () {
                \$(\".gopy_content\").hide();
                \$(\".gopy_btn\").show();
            });

            //phuong an 2
            var storedItem = localStorage.getItem(\"counter\");
            if (storedItem == undefined || storedItem == \"\") {
                setTimeout(function () {
                    \$(\"#tichdiemdoiqua\").fadeIn();
                }, 1000);
            }

            let window_verify;
            \$('body').on('click', '.btn-verify', function (e) {
                \$.get('/users/verify-digital-get-link', function (resp) {
                    if (resp.status == true) {
                        window_verify = show_window_open();
                        window_verify.location = resp.data;
                    }
                    else {
                        \$('#popup_verification').fadeIn();
                    }
                });
            })
            function show_window_open() {
                var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
                var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;

                var left = ((width / 2) - 575) + dualScreenLeft;
                var strWindowFeatures = \"toolbar=yes,scrollbars=yes,resizable=yes,fullscreen=yes,titlebar=no,dialog=yes,top=0,left=\" + left + \",width=1150,height=\" + window.screen.height;
                var elm = window.open(\"\", \"_blank\", strWindowFeatures);
                if (window.focus) { elm.focus() }
                return elm;
            }

        });
        var lg = 'VI';
        \$('#languageSelect').val(lg);
        \$('#languageSelect').on('change', function () {
            window.location.href = '/changelang?currCulture=' + this.value + '&returnUrl=' + '/dashboard/';
        });
        function closepopup() {
            \$(\"#tichdiemdoiqua\").fadeOut();
            localStorage.setItem(\"counter\", \"count\");
        }
        function getDataNoticeForYouNew() {
            \$.ajax({
                type: \"GET\",
                url: '/dashboard/get-list-notify-new/',
                async: true,
                success: function (resp) {
                    if (resp.status && resp.data.success) {
                        var arrThongBao = resp.data.list_notifys;
                        if (arrThongBao.length > 0) {
                            var cNoiticeForY = '(' + arrThongBao.length + ')';
                            var results = groupNotice(arrThongBao, \"1\");
                            \$(\"#noticeForYou\").html(cNoiticeForY);
                            \$(\"#showNoticeForYou\").html(results);
                            \$(\"#showNoticeForYou\").addClass(\"active\");

                            var countDaysforY = arrThongBao.filter(x => x.is_readed == false).length;
                            if (countDaysforY === null || countDaysforY === 0) {
                                countDaysforY = 0;
                            }
                            \$(\"#noticeRingBell\").text(countDaysforY > 0 ? countDaysforY : \"\");
                        }
                        else {
                            \$(\"#noticeForYou\").html(\"\");
                            \$(\"#showNoticeForYou\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                            \$(\".thongbaosTable\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                        }
                    }
                    else {
                        \$(\"#noticeForYou\").html(\"\");
                        \$(\"#showNoticeForYou\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");
                        \$(\".thongbaosTable\").html(\"<p class='pad-top text-center'>Không có thông báo dành cho bạn! </p>\");//thong bao o trang chu
                    }
                },
                error: function (resp) {
                    if (resp.error_code == 0) {
                        console.log(resp.message);
                    }
                }
            });
        }

        var shake10s = setInterval(shake, 3500);
        function shake() {
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"shake 0.5s\", \"animation-iteration-count\": \"infinite\", \"background-image\": \"url(../Contents/images/Navigation/B_IconHotro.svg)\" }); }, 2000);
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"\", \"background-image\": \"url(../Contents/images/Navigation/IconHotro.svg)\" }); }, 1);
        }
        function showTopbanner() {
            if (\$(\"#AADIV38\").find('img').length > 0) {
                let height = \$(\"#AADIV38\").height();
                \$(\".header\").css({
                    \"top\": height + \"px\",
                    \"transition\": \"top 0.5s ease-in\"
                });
                \$(\".leftmenu\").css({
                    \"top\": height + 60 + \"px\",
                    \"transition\": \"top 0.5s ease-in\"
                });
                \$(\".rightcontent\").css({
                    \"margin-top\": height + 60 + \"px\",
                    \"transition\": \"margin-top 0.5s ease-in\"
                });
                \$(\".leftmenu ul.menudown\").css({
                    \"bottom\": height + \"px\",
                    
                });
                let menudown = \$(\".leftmenu ul.menudown\").height() + 197;
                \$(\".leftmenu ul.menuup\").css({
                    \"height\": \"calc(105vh - \" + menudown + \"px)\",
                    
                });
                \$(\"#AADIV38\").show();
            }
            else {
                \$(\".leftmenu ul.menudown\").css({
                    
                    \"bottom\": 30 + \"px\",
                });
                let menudown = \$(\".leftmenu ul.menudown\").height() + 170;
                \$(\".leftmenu ul.menuup\").css({
                    \"height\": \"calc(105vh - \" + menudown + \"px)\",
                });
            }
        }

        function activeMenu() {
            var myURL = location.pathname.split('/');
            var myOrigin = location.origin;
            var lastUrl = (myURL[myURL.length - 1] == \"\" ? myURL[myURL.length - 2] : myURL[myURL.length - 1]).replace('-cloud', '').replace('detail-', 'dich-vu-').replace('server', 'may-chu');
            if (lastUrl == 'ssl') {
                lastUrl = 'dich-vu-ssl';
            }
            else if (lastUrl == 'office') {
                lastUrl = 'dich-vu-office-365';
            }
            var mypage = (lastUrl == myURL[1] ? lastUrl + '-' : myURL[1] + '-' + lastUrl);
            \$(\".leftmenu ul.menuup li a[href], .leftmenu ul.menudown li a[href]\").each(function () {
                var curURL = \$(this).attr('href').replace(myOrigin, '').split('/');
                var finisURL = (curURL[curURL.length - 1] == \"\" ? curURL[curURL.length - 2] : curURL[curURL.length - 1]).replace('-cloud', '');
                var curpage = (finisURL == curURL[1] ? finisURL + '-' : curURL[1] + '-' + finisURL);
                if (curpage == mypage) {
                    var parent = \$(this).parent('li').parent('ul');
                    if (parent.attr('class') == undefined || parent.attr('class').indexOf('menuup') <= -1) {
                        if (parent.attr('class') == undefined || parent.attr('class').indexOf('menudown') <= -1) {
                            \$(this).parent('li').addClass('active');
                            if (parent.attr('class') == undefined || parent.attr(\"class\").indexOf(\"box-shadow-HeThong\") <= -1) {
                                \$(this).parent('li').parent('ul').parent('li').children().children().children('i').removeClass('menu-chevron-down');
                                \$(this).parent('li').parent('ul').parent('li').children().children().children('i').addClass('menu-chevron-up');

                                \$(this).parent('li').parent('ul').parent('li').addClass('active');
                                \$(this).parent('li').parent('ul').show();

                                \$(this).parent('li').parent('ul').parent('li').parent('ul').parent('li').addClass('active');
                                \$(this).parent('li').parent('ul').parent('li').parent('ul').show();
                            }
                            else {
                                \$(this).parent('li').parent('ul').parent('li').addClass('acturl')
                            }
                        }
                        else {
                            \$(this).parent('li').addClass('active');
                        }
                    }
                    else {
                        \$(this).parent('li').addClass('active');
                    }
                }
            });
        }
        function checkDropLang() {
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
        };
        function checkHyper() {
            var checkLang = \$(\"#drlLang\").hasClass('active');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
        };
        function checkHosoThanhtoanParent() {
            if (\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            } else {
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-right\");
            }
        }
        function checkHeThong() {
            if (\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            }
            if (\$(\".myHeThong\").hasClass(\"active\")) {
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-right\");
            } else {
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-right\");
            }
            var checkLang = \$(\"#drlLang\").hasClass('active');
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkNoti = \$(\".Noti\").hasClass('show');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkNoti) {
                \$(\".Noti\").removeClass('show');
            }
            \$(\".leftmenu.cloze ul.menuup li\").removeClass(\"active\");
        };
        function checkshowNoti() {
            var checkhyper = \$(\"#myhyperlynk\").hasClass('o');
            var checkhethong = \$(\".myHeThong\").hasClass('active');
            var checkLang = \$(\"#drlLang\").hasClass('active');
            if (checkLang) {
                \$(\"#drlLang\").removeClass('active');
            }
            if (checkhyper) {
                \$(\"#myhyperlynk\").removeClass('o');
            }
            if (checkhethong) {
                \$(\".myHeThong\").removeClass('active');
            }
        };
        var hostingcount = 0;
        var servercount = 0;
        var wordpresscount = 0;
        var googlecount = 0;
        var microsoftcount = 0;
        var mbcount = 0;
        var emailcount = 0;
        var ctscount = 0;
        var sslcount = 0;
        var hddtcount = 0;
        var othercount = 0;
        var canvatocount = 0;
        var chilicount = 0;
        function loadCountMenu() {
            \$.get('https://apiida.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=DM', function (data) {
                if (data > 0) {
                    \$(\".domain-count\").html(\"<u class='alert'>\"+ data + \"</u>\");
                }
                else {
                    \$(\".domain-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".domain-count\").html(\"\");
            });

            \$.get('https://apiidb.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CLOUDSERVER', function (data) {
                servercount = data;
                if (data > 0) {
                    \$(\".server-count\").html(data);
                    \$(\".server-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".server-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".server-count\").html(\"\");
            });

            \$.get('https://apiidd.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HOSTWP', function (data) {
                wordpresscount = data;
                if (data > 0) {
                    \$(\".wordress-count\").html(data);
                    \$(\".wordress-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".wordress-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".wordress-count\").html(\"\");
            });

            \$.get('https://apiide.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=EMAIL', function (data) {
                emailcount = data;
                if (data > 0) {
                    \$(\".email-count\").html(data);
                    \$(\".email-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".email-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".email-count\").html(\"\");
            });

            \$.get('https://apiidc.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=MICROSOFT', function (data) {
                microsoftcount = data;
                if (data > 0) {
                    \$(\".microsoft-count\").html(data);
                    \$(\".microsoft-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".microsoft-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".microsoft-count\").html(\"\");
            });

            \$.get('https://apiidf.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=SSL', function (data) {
                if (data > 0) {
                    \$(\".ssl-count\").html(\"<u class='alert'>\" + data + \"</u>\");
                }
                else {
                    \$(\".ssl-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".ssl-count\").html(\"\");
            });

            \$.get('https://apiidg.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CHILI', function (data) {
                chilicount = data;
                if (data > 0) {
                    \$(\".chili-count\").html(data);
                    \$(\".chili-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".chili-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".chili-count\").html(\"\");
            });

            \$.get('https://apiidh.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HDDT', function (data) {
                hddtcount = data;
                if (data > 0) {
                    \$(\".einvoice-count\").html(data);
                    \$(\".einvoice-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".einvoice-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".einvoice-count\").html(\"\");
            });

            \$.get('https://apiida.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CANVATO', function (data) {
                canvatocount = data;
                if (data > 0) {
                    \$(\".canvato-count\").html(data);
                    \$(\".canvato-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".canvato-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".canvato-count\").html(\"\");
            });

            var count
            \$.get('https://apiidi.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=HOSTWL', function (data) {
                hostingcount = data;
                if (data > 0) {
                    \$(\".hosting-count\").html(data);
                    \$(\".hosting-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".hosting-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".hosting-count\").html(\"\");
            });

            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=OTHER', function (data) {
                othercount = data;
                if (data > 0) {
                    \$(\".other-service-count\").html(data);
                    \$(\".other-service-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".other-service-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".other-service-count\").html(\"\");
            });
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=CTS', function (data) {
                ctscount = data;
                if (data > 0) {
                    \$(\".chukyso-count\").html(data);
                    \$(\".chukyso-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".chukyso-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".chukyso-count\").html(\"\");
            });
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=GOOGLE', function (data) {
                googlecount = data;
                if (data > 0) {
                    \$(\".google-count\").html(data);
                    \$(\".google-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".google-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".google-count\").html(\"\");
            });
            setTimeout(function () {
                countContainService();
                countEmailService();
                countSecurityService();
                countUtilityService();
            }, 2000);
            \$.get('https://apiidk.matbao.com/api/countservice?customer_id=' + \"qVV+qW3igFY=\" + '&service_type=MATBAOWORKSPACE', function (data) {
                mbcount = data;
                if (data > 0) {
                    \$(\".matbao-count\").html(data);
                    \$(\".matbao-count\").addClass(\"count-service-plus\");
                }
                else {
                    \$(\".matbao-count\").html(\"\");
                }
            }).fail(function () {
                \$(\".matbao-count\").html(\"\");
            });
            var sumHoSo = 0;
            var link3 = 'https://apiidf.matbao.com/api/CountContract?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
            \$.get(link3, function (data) {
                sumHoSo = parseInt(data);

                var link5 = 'https://apiida.matbao.com/api/CountRegistrationDocument?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
                \$.get(link5, function (data) {
                    sumHoSo += parseInt(data);

                    \$(\"li a .icon.Hopdong\").html(\"<u class='alert'>\" + sumHoSo + \"</u>\");

                    \$(\"#countHoSoThanhToan\").html(sumHoSo);
                    \$(\"#countHoSoThanhToan\").removeClass(\"loading-count\");
                });
            });

            var link4 = 'https://apiidc.matbao.com/api/CountOrder?id=' + \"ttcese+GSfPa+E4mQ9rxag==\";
            \$.get(link4, function (data) {
                \$(\".count-order-processing\").removeClass(\"loading-count\");
                \$(\".count-order-processing\").html(data);
                \$(\"li a .icon.Donhang\").html(\"<u class='alert'>\" + data + \"</u>\");
            });
            function countContainService() {
                var servicecount = hostingcount + servercount + wordpresscount;
                if (servicecount > 0) {
                    \$(\".hostingservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".hostingservice-count\").html(\"\");
                }
            }
            function countEmailService() {
                var servicecount = microsoftcount + googlecount + mbcount + emailcount;
                if (servicecount > 0) {
                    \$(\".emailandwsservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".emailandwsservice-count\").html(\"\");
                }
            }
            function countSecurityService() {
                var servicecount = ctscount + sslcount + hddtcount;
                if (servicecount > 0) {
                    \$(\".sercurityservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".sercurityservice-count\").html(\"\");
                }
            }
            function countUtilityService() {
                var servicecount = othercount + canvatocount;
                if (servicecount > 0) {
                    \$(\".utilitieservice-count\").html(\"<u class='alert'>\" + servicecount + \"</u>\");
                }
                else {
                    \$(\".utilitieservice-count\").html(\"\");
                }
            }
        }

        function CheckRenew(renewType, serviceType) {
            if (serviceType == undefined || serviceType != 'SSL') {
                serviceType = '';
            }
            \$(\".nowloading\").fadeIn();
            var checkservice = \$('.checkservice:checkbox:checked');
            var data_ids = [];
            \$.each(checkservice, function (index, value) {
                data_ids.push(\$(value).val())
            });

            if (data_ids == null || data_ids.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            GiaHanDichVu(data_ids, renewType, serviceType);
        }

        function CheckRenewDetail(productCode, id, renewType, serviceType) {
            if (serviceType == undefined || serviceType != 'SSL') {
                serviceType = '';
            }

            \$(\".nowloading\").fadeIn();
            var data_ids = [];
            data_ids.push(id);
            if (id != '') {
                data_ids.indexOf(id) == -1 ? data_ids.push(id) : \"\";
            }

            if (data_ids == null || data_ids.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            GiaHanDichVu(data_ids, renewType, serviceType);
        }

        function GiaHanDichVu(data, renewType, serviceType) {
            \$(\".nowloading\").fadeIn();

            if (data == null || data.length == 0) {
                \$(\".nowloading\").fadeOut();

                new PNotify({
                    title: 'Thông Báo',
                    text: 'Chưa chọn dịch vụ cần gia hạn',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });

                return;
            }

            \$.post(\"/cart/renew-serivces/\", { data: data, type: renewType, serviceType: serviceType }, function(data) {
                \$(\".nowloading\").fadeOut();
                if (data.countFail > 0) {
                    new PNotify({
                        title: 'Thông Báo',
                        text: 'Dịch vụ không trong thời kỳ được gia hạn',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                }
                if (data.returnUrl.length > 0)
                    window.location.href = data.returnUrl;
            });
        }

        \$(\"#confirmUpgrade\").click(function () {
            var productCategoryCodeUpgrade = \$(\"#serviceUpgrade\").val();
            if (productCategoryCodeUpgrade == \"\" || productCategoryCodeUpgrade == undefined) {
                new PNotify({
                    title: 'Th&#244;ng B&#225;o',
                    text: \"Vui lòng lựa chọn dịch vụ nâng cấp!\",
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return;
            }
            var serviceRef = \$(\"#serviceId\").val();
            \$(\".nowloading\").fadeIn();
            \$.ajax({
                type: 'POST',
                url: '/services/upgrade-service',
                data:
                {
                    serviceId: serviceRef,
                    ermId: productCategoryCodeUpgrade,
                },
                success: function (resp) {
                    \$(\".nowloading\").fadeOut();
                    resp = \$.parseJSON(resp);
                    if (resp.Status == true) {
                        new PNotify({
                            title: 'Th&#244;ng B&#225;o',
                            text: resp.Message,
                            type: 'custom',
                            addclass: 'notification-success',
                            icon: 'fa fa-check'
                        });
                        window.location.href = resp.Data;
                    }
                    else {
                        new PNotify({
                            title: 'Th&#244;ng B&#225;o',
                            text: resp.Message,
                            type: 'custom',
                            addclass: 'notification-error',
                            icon: 'fa fa-exclamation'
                        });
                    }
                },
                error: function (resp) {
                    \$(\".nowloading\").fadeOut();
                    console.log(\"co loi\");
                }
            });
        });
        \$(\"#submitUpgrade\").click(function () {
            var productCategoryCodeUpgrade = (\$(\"#serviceUpgrade\").val());
            var qty = (parseInt(\$(\"#timeUpgrade\").val()) * 12);
            if (productCategoryCodeUpgrade == \"\" || productCategoryCodeUpgrade == undefined) {
                    new PNotify({
                        title: 'Th&#244;ng B&#225;o',
                        text: \"Vui lòng lựa chọn dịch vụ nâng cấp!\",
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return;
                }
                if (qty == \"\" || qty == undefined) {
                    new PNotify({
                        title: 'Th&#244;ng B&#225;o',
                        text: \"Vui lòng lựa chọn thời hạn đăng ký\",
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return;
                }
                var serviceRef = \$(\"#serviceId\").val();
                \$(\".nowloading\").fadeIn();
                \$.ajax({
                    type: 'POST',
                    url: '/services/upgrade-service',
                    data:
                    {
                        serviceId: serviceRef,
                        ermId: productCategoryCodeUpgrade,
                        time: qty
                    },
                    success: function (resp) {
                        \$(\".nowloading\").fadeOut();
                        resp = \$.parseJSON(resp);
                        if (resp.Status == true) {
                            new PNotify({
                                title: 'Th&#244;ng B&#225;o',
                                text: resp.Message,
                                type: 'custom',
                                addclass: 'notification-success',
                                icon: 'fa fa-check'
                            });
                            window.location.href = resp.Data;
                        }
                        else {
                            new PNotify({
                                title: 'Th&#244;ng B&#225;o',
                                text: resp.Message,
                                type: 'custom',
                                addclass: 'notification-error',
                                icon: 'fa fa-exclamation'
                            });
                        }
                    },
                    error: function (resp) {
                        \$(\".nowloading\").fadeOut();
                        console.log(\"co loi\");
                    }
                });
        });
        \$(\"#gobackUpgrade\").click(function () {
            \$(\"#popupConfirmUpgrade\").hide();
            \$(\"#formUpgrade\").show();
        });
        \$(\".closePopUpUpgrade\").click(function () {
            \$(\"#popupConfirmUpgrade\").hide();
            \$(\"#formUpgrade\").show();
        });
        //End

        //Feedback UI
        \$(\"#btnSendGopy\").click(function () {
            const checked = \$(\"input:radio[name=feedback_choose]:checked\").val();
            if (checked == undefined) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Vui lòng hãy cho chúng tôi biết góp ý của bạn về vấn đề gì?',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation',
                });
                return false;
            }
            var feebBack = \$(\"#txtGopy\").val();
            if (feebBack == \"\") {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Bạn chưa nhập ý kiến đóng góp! Vui lòng kiểm tra lại',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return false;
            }
            \$(\".gopy_content\").hide();
            \$(\".nowloading\").show();

            var data = new FormData();
            data.append(\"feedback_id\", checked);
            data.append(\"menuId\", \"0\");
            data.append(\"comment\", feebBack);

            var files = \$(\".FBFile\").get(0).files;
            if (files.length > 0) {
                for (var i = 0 ; i < files.length; i++) {
                    data.append(\"FileUpload[\" + i + \"]\", files[i]);
                }
            }

            var ajaxRequest = \$.ajax({
                type: \"POST\",
                url: \"/dashboard/submit-comment\",
                contentType: false,
                processData: false,
                data: data
            });

            ajaxRequest.done(function (xhr) {
                \$(\".nowloading\").hide();
                if (xhr.status == true) {
                    \$(\".gopy_btn\").show();
                    \$(\"#formGopYSuccess\").fadeIn();
                    setTimeout(function () {
                        \$(\"#formGopYSuccess\").fadeOut();
                    },5000);
                }
                else {
                    new PNotify({
                        title: 'Thông báo',
                        text: 'Đóng góp ý kiến không thành công!',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                }
            });
        });
        //end
        function showHideFeedBackUI() {
            \$.get('https://apiidb.matbao.com/api/isusercomment?id=' + \"ttcese+GSfPa+E4mQ9rxag==\", function (data) {
                console.log(data);
                if (data > 0) {
                    \$(\".gopy_home\").hide();
                    //\$(\".gopy_home_pa2\").hide();
                }
                else {
                    \$(\".gopy_home\").show();
                    //\$(\".gopy_home_pa2\").hide();
                }
            }).fail(function () {
                \$(\".gopy_home\").hide();
                //\$(\".gopy_home_pa2\").hide();
            });
        }
        \$(document).click(function (event) {
            if (!\$(\".myHeThong\").hasClass(\"active\")) {
                \$(\".myHeThong>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".myHeThong>a .fa\").removeClass(\"menu-chevron-right\");
            }
            if (!\$(\".HosoThanhtoanParent\").hasClass(\"active\")) {
                \$(\".HosoThanhtoanParent>a .fa\").addClass(\"menu-chevron-left\");
                \$(\".HosoThanhtoanParent>a .fa\").removeClass(\"menu-chevron-right\");
            }
            var \$target = \$(event.target);
            if (!\$target.closest('.gopy_home').length &&
                \$('.gopy_content').is(\":visible\")) {
                \$('.gopy_content').hide();
                \$(\".gopy_btn\").fadeIn();
            }
        });
        //UploadFile FeedBack
        \$(\"#ChooseCMFile\").click(function () {
            \$(\"#CMFile\").trigger('click');
        });
        \$(\"#CMFile\").change(function () {
            var CM_fileSize = \$(\"#CMFile\")[0].files[0].size;
            var CM_fileName = \$(\"#CMFile\")[0].files[0].name;
            if (CM_fileSize > 4 * (1024 * 1024)) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Vui lòng chọn file có dung lượng nhỏ hơn 4MB!',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                \$(\"#CMFileName\").text(\"Chưa có file được chọn\");
                return;
            }
            \$(\"#CMFileName\").text(CM_fileName);
        });

        \$(\".ChooseFBFile\").click(function () {
            \$(\".FBFile\").trigger('click');
        });
        //phuong an 1 2
        \$(\".FBFile\").change(function () {
            var tmpFile = \$(\"#fileUploadTemp\").get(0).files;
            if (tmpFile.length > 0) {
                var files = \$.merge(\$.merge([], tmpFile), this.files);
            }
            else {
                var files = this.files;
            }

            if (files.length > 5) {
                new PNotify({
                    title: 'Thông báo',
                    text: 'Chỉ được tải lên tối đa 5 tập tin, quý khách vui lòng kiểm tra lại số lượng tập tin.!',
                    type: 'custom',
                    addclass: 'notification-error',
                    icon: 'fa fa-exclamation'
                });
                return false;
            }
            //var \$thisFile = this.files;

            var str2 = \"\";//phuong an 2
            \$.each(files,function (index, value) {
                var CM_fileSize = value.size;
                if (CM_fileSize > 4 * (1024 * 1024)) {
                    new PNotify({
                        title: 'Thông báo',
                        text: 'Tập tin ' + value.name + ' có dung lượng lớn hơn 4MB!',
                        type: 'custom',
                        addclass: 'notification-error',
                        icon: 'fa fa-exclamation'
                    });
                    return false;
                }
                str2 += `
                            <div class=\"list-fileGopY-item\">
                                <a href=\"javascript:void(0);\" class=\"btn-closeimg\"><img class=\"close_img\" src=\"https://manage.matbao.net/Contents/images/Navigation/close_img.svg\" /></a>
                                <img src=\"\${URL.createObjectURL(files[index])}\" id=\"imgPreviewFileUpload\${index}\" data-view=\"\${index}\" />
                            </div>
                        `;
            });
            \$(\".list-fileGopY\").html(str2);
            \$(\".frame_previewFile\").show();

            // Copy data file to Temp
            const dtTemp = new DataTransfer();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                dtTemp.items.add(file);
            }
            \$(\".FBFile\").get(0).files = \$(\"#fileUploadTemp\").get(0).files = dtTemp.files;

        });
        \$(\".gopy_home\").on(EventClick, \".btn-closeimg\", function () {//#formGopYPhuongAn2
            const \$this = \$(this);
            \$this.parent().children(\"img\").attr(\"src\", \"\");
            var convertFilesToArray = Array.from(\$(\".FBFile\").get(0).files);
            const getFileView = \$this.parent().children(\"img\").attr(\"data-view\");
            convertFilesToArray.splice(getFileView, 1);
            \$this.parent().hide();

            /*xoa file khoi input*/
            const files = convertFilesToArray;
            \$(\".FBFile\").val(\"\");
            const dt = new DataTransfer();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                dt.items.add(file);
            }
            \$(\".FBFile\").get(0).files = \$(\"#fileUploadTemp\").get(0).files = dt.files;
        });

        //end phuong an 2
        var shake10s = setInterval(shake, 3500);
        function shake() {
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"shake 0.5s\", \"animation-iteration-count\": \"infinite\", \"background-image\": \"url(/Contents/images/Navigation/IconHotro.svg)\" }); }, 2000);
            setTimeout(() => { \$(\".leftmenu ul li a .icon.Hotro\").css({ \"animation\": \"\", \"background-image\": \"url(/Contents/images/Navigation/IconHotro.svg)\" }); }, 1);
        }
        //End

        function loadCategoriesMenu() {
            \$(\"#categoryIDPage\").select2();
            \$.ajax({
                type: 'post',
                url: '/dashboard/get-list-category-menu-ID/',
                async: true,
                success: function (resp) {
                    if (resp.status) {
                        var data = resp.data;
                        var str = \"\";
                        str = \"<option value=''>Chọn danh mục trên trang ID</option>\";
                        for (i = 0; i < data.length; i++) {
                            str += \"<option value='\" + data[i].id + \"'>\" + data[i].menu_name + \"</option>\";
                        }
                        \$(\"#categoryIDPage\").html(str);
                    }
                }
            });
        }

        function loadFeedbackMenu() {
            \$(\"#feedbackMenu\").select2();
            \$.ajax({
                type: 'post',
                url: '/dashboard/get-list-feed-menu-ID/',
                async: true,
                success: function (resp) {
                    if (resp.status) {
                        var data = resp.data;
                        var str = \"\";
                        var str2 = \"\";
                        for (const item of data) {
                            var feedback = \"\";
                            if (item.id == 1) {
                                feedback = \"B&#225;o c&#225;o sự cố\";
                            }
                            else if (item.id == 2) {
                                feedback = \"Đề xuất t&#237;nh năng\";
                            }
                            str += `<div class='col-md-12 no-padding'>
                                        <input class='feedback_menu' id=\"\${item.id}\" type=\"radio\" name=\"feedback_choose\" class=\"rd-size\" value=\"\${item.id}\" />
                                        <label for=\"\${item.id}\">\${feedback}</label>
                                    </div>`;
                            str2 += `<option value=\"\${item.id}\">\${item.feedback_name}</option>`;
                        }
                        \$(\".gopy__chklist\").html(str);
                        \$(\"#feedbackMenu\").html(str2);
                    }
                }
            });
        }

        function checkRefreshLogin() {
            setInterval (function() {
                if (getCookieByName(\"MBIDSessionLogin\") == undefined || getCookieByName(\"MBIDSessionLogin\") == '') {
                    location.reload();
                }
            }, 300000);
        }

        function getCookieByName(c_name) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(c_name + \"=\");
                if (c_start != -1) {
                    c_start = c_start + c_name.length + 1;
                    c_end = document.cookie.indexOf(\";\", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(c_start, c_end));
                }
            }
            return \"\";
        }
    </script>
</body>
</html>
", "@user/layouts/main.twig", "/var/www/html/modules/user/views/layouts/main.twig");
    }
}
