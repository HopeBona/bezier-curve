
function bezierCurveFunction() {
    // Получение координат точек
    var coordInput =
        document.getElementById("coordinatesInput").value;

    let arr = coordInput.split(' ');

    // Проверка корректности координат
    if (arr.length === 8) {
        var draw = SVG().addTo('body');

        // Построение кривой
        var bezierCurve = draw.path().m({x: arr[0], y: arr[1]}).C({x: arr[2], y: arr[3]}, {x: arr[4], y: arr[5]}, {x: arr[6], y: arr[7]}).fill('white').stroke('black');

        // Надпись по траектории кривой Безье
        var textPathBezier = ('M ' + arr[0] + ' ' + (+arr[1] + 30) + ' C ' + arr[2] + ' ' + (+arr[3] + 30) + ' ' + arr[4] + ' ' + (+arr[5] + 30) + ' ' + arr[6] + ' ' + (+arr[7] + 30));
        var textpath = draw.textPath('Кривая Безье', textPathBezier);

        // Отображение точек
        for (let i = 0; i < 7; i++ ) {
            draw.circle(4).move(arr[i] - 2, arr[i+1] - 2).fill('#f06');
            i++;
        }
    } else {
       document.getElementById("inputWarning").innerHTML = ('Проверьте корректность введенных данных');
    }

}
