ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [41.259286, 69.226099],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Метка, содержимое балуна которой загружается с помощью AJAX.
        placemark = new ymaps.Placemark([41.259286, 69.226099], {
            iconContent: 'Optimum fruits',
            hintContent: "Перетащите метку и кликните, чтобы узнать адрес"
        }, {
            // Запретим замену обычного балуна на балун-панель.
            balloonPanelMaxMapArea: 0,
            draggable: "true",
            preset: "islands#blueStretchyIcon",
            // Заставляем балун открываться даже если в нем нет содержимого.
            openEmptyBalloon: true
        });

    // Обрабатываем событие открытия балуна на геообъекте:
    // начинаем загрузку данных, затем обновляем его содержимое.
    placemark.events.add('balloonopen', function (e) {
        placemark.properties.set('balloonContent', "Идет загрузка данных...");

        // Имитация задержки при загрузке данных (для демонстрации примера).
        setTimeout(function () {
            ymaps.geocode(placemark.geometry.getCoordinates(), {
                results: 1
            }).then(function (res) {
                var newContent = res.geoObjects.get(0) ?
                        res.geoObjects.get(0).properties.get('name') :
                        'Не удалось определить адрес.';

                // Задаем новое содержимое балуна в соответствующее свойство метки.
                placemark.properties.set('balloonContent', newContent);
            });
        }, 1500);
    });

    myMap.geoObjects.add(placemark);
}