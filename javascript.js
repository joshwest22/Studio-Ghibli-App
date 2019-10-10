var setBanner = function(message)
{
    d3.select("#banner")
    .text(message)
}

var filmPromise = 
    d3.json("https://ghibliapi.herokuapp.com/films")
filmPromise.then(
function(films)
    {
        setBanner("Choose A Film");
        getFilmList(films);
        console.log("films", films)
    },
function(err)
    {
        setBanner("No Films Found");
        console.log("ERROR", err)
    })

var getFilmList = function(films)
{
    d3.select("#filmList")
    .selectAll("div")
    .data(films)
    .enter()
    .append("div")
    .text(function(film){return film.title})
    .on("click", function(d){getInfoList(d)})
}

var getInfoList = function(film)
{
    var info = d3.select("#infoList");
    info.append("div").text(film.title)
}