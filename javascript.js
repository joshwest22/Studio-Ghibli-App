var setBanner = function(message)
{
    d3.select("#banner")
    .text(message)
}

var clearInfo = function()
{
    d3.selectAll("#infoList *")
    .remove()
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
    clearInfo(); // clears old info before printing new info
    var info = d3.select("#infoList");
    info.append("div").text(film.title + " (" + film.release_date +")").attr("id", "title")
    info.append("div").text(film.description).attr("id", "description")
    info.append("div").text("Director: " + film.director).attr("id", "director")
    info.append("div").text("Producer: " + film.producer).attr("id", "producer")
    info.append("div").text("Rotten Tomatoes: " + film.rt_score + "%").attr("id", "rtscore")
    info.style("background-color", "#d6f8d6")
}