var access_token = 'BQBrRDF4F8C6l9RWYOpOYux56rurdLjVBdKjdYId4veaL40apYbnnrzKohNuxGVD2ug8566RgFvnnjfoPWrE-Zn3nzXVUEO-i8fM-HpfqfuVrDU7TFLrCO6-zglccgmp-Cj2rw9jce-Lrhj2wblCmTBqwZ5pIQwyJ8DQ2w';
var artistInfo = [];
var data1= [];
var data2= [];

function getAllInfo(){
    getTopTracks();
    getArtistInfo();
    
}

function getTopTracks() { //Get Json string of top tracks
  var type_name = document.getElementById("mySearch").value;
  $.ajax({
	url: "https://api.spotify.com/v1/search?q=" + type_name + "&type=track&limit=10&offset=0",
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
	success: function(res) {
		translateTopTracks(res.tracks.items);
	}
});
}


function translateTopTracks(tracks){
    for(var idx in tracks){
        data1.push(tracks[idx].name)
        data2.push(tracks[idx].popularity)

var trace1 = {
  x: data1,
  y: data2,
  type: 'bar',
  text: data2.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgb(158,202,225)',
    opacity: 0.6,
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1];

var layout = {
  title: 'Top 10 Tracks'
};


    Plotly.newPlot('myDiv1', data, layout);
}


function getArtistInfo() {  //Get Json string of artist Info
var type_name = document.getElementById("mySearch").value;
$.ajax({
    url: "https://api.spotify.com/v1/search?q=" + type_name + "&type=artist&limit=1&offset=0",
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    success: function(res) {
        translateArtistInfo(res.artists.items); 
    }
  });
}

function translateArtistInfo(artists){
    artistInfo.push({'name':artists[0].name, 'followers':artists[0].followers.total, 'genres':artists[0].genres, 'popularity':artists[0].popularity});
    var values = [
      ['Artist', 'followers', 'genres', 'popularity'],
      [artists[0].name, artists[0].followers.total, artists[0].genres, artists[0].popularity]
  ]
    var data = [{
  type: 'table',
  header: {
    values: [["Item"], ["Info"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "grey"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 12, color: ["black"]}
  }
}]
    console.log(artistInfo);
    Plotly.newPlot('myDiv2', data);
}





