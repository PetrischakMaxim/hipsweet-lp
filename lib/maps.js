ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [50.00291507324128,36.240589499999984],
            zoom: 16,
            controls: []
        });

        myPlacemark = new ymaps.Placemark([50.00291507324128,36.240589499999984], { 
            hintContent: 'HipSweet', 
            balloonContent: 'Кондитерская' 
        }, {
        	iconLayout: 'default#image',
        	iconImageHref: 'img/map/map-icon.png',
        	iconImageSize: [42, 59],
        	iconImageOffset: [-10, -70]
        });

        myMap.behaviors
    // Отключаем некоторые включенные по умолчанию поведения:
    //  - drag - перемещение карты при нажатой левой кнопки мыши;
    //  - rightMouseButtonMagnifier - увеличение области, выделенной
    //    правой кнопкой мыши.
    .disable([ 'rightMouseButtonMagnifier','scrollZoom'])

        myMap.geoObjects.add(myPlacemark);
    }