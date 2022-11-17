let map;
let Marker;
let Title;
let pos = {lat: 43.45290513984092, lng: -80.51339120287821 };

function initMap(callback) {

    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 16,
        disableDefaultUI: true,
        featureType: "poi",
            stylers: [{ visibility: "off" }],
        })

    Marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: 'img/Vector.svg',
        title: ''
    })

    const infoContent =
        '<h1 id="firstHeading" class="firstHeading">Voodoo</h1>' +
        '<div class="infoContent" id="bodyContent">' +
        "<p class='infoContent__subtitle'>137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br> Ukraine</p>" +
        '<p class="infoContent__contacts">    ' +
        '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path fillRule="evenodd" clipRule="evenodd" d="M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z" stroke="#52514F" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '    <path d="M11 3L6 6.5L1 3" stroke="#52514F" strokeLinecap="round" strokeLinejoin="round"/>\n' +
        '</svg>1-800-480-9597</p>' +
        '<p class="infoContent__contacts">    ' +
        '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path fillRule="evenodd" clipRule="evenodd" d="M11.375 9.16497V10.79C11.3762 11.095 11.2488 11.3864 11.024 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.52737 11.6922 6.92629 11.1226 5.51958 10.2104C4.21082 9.37875 3.10122 8.26915 2.26958 6.96039C1.35415 5.54729 0.784463 3.93843 0.606665 2.26414C0.579296 1.96128 0.680479 1.66086 0.885496 1.43627C1.09051 1.21167 1.38049 1.08359 1.68458 1.08331H3.30958C3.85334 1.07795 4.31681 1.47654 4.39291 2.01497C4.4615 2.53501 4.5887 3.04562 4.77208 3.53706C4.9209 3.93295 4.82571 4.37924 4.52833 4.67997L3.84041 5.36789C4.61151 6.72398 5.73433 7.8468 7.09041 8.61789L7.77833 7.92997C8.07906 7.63259 8.52536 7.53741 8.92125 7.68622C9.41269 7.8696 9.9233 7.9968 10.4433 8.06539C10.988 8.14223 11.3886 8.61507 11.375 9.16497Z" stroke="#52514F" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>info@voodoo.com</p>' +
        "</div>";

    Title = new google.maps.InfoWindow ({
        content: infoContent,
        ariaLabel: "Voodoo",
    })
    Marker.addListener("click", () => {
        Title.open({
            anchor: Marker,
            map,
        });
    });
}

window.initMap = initMap;