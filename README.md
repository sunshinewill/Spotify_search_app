# spotifySearchApp
A Spotify Web App allows to look up artist information and top 10 popular tracks of an artist.

1, The data set that I chose:
    Through Spotify’s web API I can get JSON formatted dataset for artist object, which includes the basic information about that artist. Also I can get JSON formatted dataset for track object.
    

2, How I processed the data on my server: 
    Using bottle to host files of my web app and host the data for the visualization. Extract the basic information from artist object (for example, popularity, followers, genres etc.) and get the popularity from each track of the artist and sort them to get the top 10.


3, How I visualized the data (explain both visuals)
    Using the bar chart to show the top 10 tracks of the artist, and table to show the basic information of the artist.

4, Other implementations
   I have added communication between user and my web app, which is a search bar and can show the search results after the user type an artist and click search.
