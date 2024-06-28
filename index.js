            /* Theme Change */
function theme(){
  document.body.classList.toggle("dark")
}


function muli() {
  const arr=["red","blue","violet","aqua","tomato","green","yellow","purple","brown","black"]
  document.body.style.backgroundColor=arr[Math.ceil(Math.random()*10)]

}
function multi(){
  const hexcode="#" + Math.round(Math.random()*1000).toString(16)
  document.body.style.backgroundColor=hexcode
}

              /* Sign button */

const signDiv=document.getElementById("sin")
function openn(){
  signDiv.style.display="block"
}
function closeee(){
signDiv.style.display="none"
}
function alt(){
  alert("Logind Successfully...")
}


            /*SHOW PASSWORD */

const Fname= document.getElementById("name")
const Lname= document.getElementById("lname")
const Email= document.getElementById("email")
const Pass= document.getElementById("pass")
const CPass= document.getElementById("cpass")


Fname.addEventListener("change", update)
Lname.addEventListener("change",update)
Email.addEventListener("chane",update)
Pass.addEventListener("change",update)
// CPass.addEventListener("change",update)

function update ()
{
  document.getElementById("pass-show").addEventListener("click", function (e)
  {
    if(e.target.innerText =="Show")
    {
    Pass.type="text"
  document.getElementById("pass-show").textContent="Hide"
    }
    else if (e.target.innerText=="Hide")
    {
      Pass.type="password"
      document.getElementById("pass-show").textContent="Show"
    }

  })

}


            /* Arry and Movies Library */

const filmData= [
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "https://i.pinimg.com/736x/8d/6e/d1/8d6ed1589e14ccd692fc4db7c4275116.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "Trailer": "Watch Trailer",
      "Tlink" : "https://youtu.be/5PSNL1qE6VY?si=PNdaB4N5I9h4cSCm",
      "Link" : "https://www.1tamilmv.im/applications/core/interface/file/attachment.php?id=112319&key=a07211390044736ab9c7294239f48fef",
      "Link2": "https://www.1tamilmv.eu/applications/core/interface/file/attachment.php?id=118941&key=fc10678455a766ec8a55f39569dc66ce",
      "Open": "Open"
      
      
    },
    {
      "Title": "Maze Runner: The Death Cure",
      "Year": "2018",
      "Released": "18 Dec 2009",
      "Runtime": "113 min",
      "Genre": "Action / Adventure / Sci-Fi / Thriller",
      "Director": "	Wes Ball",
      "Writer": "James Cameron",
      "Language": "English",
      "Poster": "https://bloximages.newyork1.vip.townnews.com/dailytitan.com/content/tncms/assets/v3/editorial/d/89/d891b691-63df-5be8-9511-0281a58da220/5f3afe5fbebcf.image.jpg?resize=337%2C500",
      "imdbRating": "6.2",
      "Trailer": "Watch Trailer",
      "Tlink" : "https://youtu.be/5PSNL1qE6VY?si=PNdaB4N5I9h4cSCm",
      "Link" : "https://www.1tamilmv.im/applications/core/interface/file/attachment.php?id=112319&key=a07211390044736ab9c7294239f48fef",
      "Open": "Open"
      
    },
    {
      "Title": "I Am Legend",
      "Year": "2007",
      "Rated": "PG-13",
      "Released": "14 Dec 2007",
      "Runtime": "101 min",
      "Genre": "Drama, Horror, Sci-Fi",
      "Director": "Francis Lawrence",
      "Writer": "Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington",
      "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
      "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
      "Language": "English",
      "Country": "USA",
      "Awards": "9 wins & 21 nominations.",
      "Poster": "https://wallpapercave.com/wp/IVcEvks.jpg",
      "imdbRating": "7.2",
    },
    {
      "Title": "300",
      "Year": "2006",
      "Rated": "R",
      "Released": "09 Mar 2007",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Fantasy",
      "Director": "Zack Snyder",
      "Writer": "Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)",
      "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
      "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      "Language": "English",
      "Country": "USA",
      "Awards": "16 wins & 42 nominations.",
      "Poster": "https://www.themoviedb.org/t/p/original/1HbVPR6KHSaXGii9whOgGRc381l.jpg",
      "Metascore": "52",
      "imdbRating": "7.7",
      "imdbVotes": "611,046",
      "imdbID": "tt0416449",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
      ]
    },
    {
      "Title": "The Avengers",
      "Year": "2012",
      "Rated": "PG-13",
      "Released": "04 May 2012",
      "Runtime": "143 min",
      "Genre": "Action, Sci-Fi, Thriller",
      "Director": "Joss Whedon",
      "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
      "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      "Language": "English, Russian",
      "Country": "USA",
      "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
      "Poster": "https://w0.peakpx.com/wallpaper/264/876/HD-wallpaper-marvel-cinematic-universe-marvel-super-heroes-the-avengers-avengers-infinity-war.jpg",
      "Metascore": "69",
      "imdbRating": "8.1",
      "imdbVotes": "1,003,301",
      "imdbID": "tt0848228",
      "Type": "movie",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      "Title": "The Wolf of Wall Street",
      "Year": "2013",
      "Rated": "R",
      "Released": "25 Dec 2013",
      "Runtime": "180 min",
      "Genre": "Biography, Comedy, Crime",
      "Director": "Martin Scorsese",
      "Writer": "Terence Winter (screenplay), Jordan Belfort (book)",
      "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "Language": "English, French",
      "Country": "USA",
      "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
      "Poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      "Metascore": "75",
      "imdbRating": "8.2",
      "imdbVotes": "786,985",
      "imdbID": "tt0993846",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
      ]
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
      "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-sScCuHvN7A8HPX71bI0e_AFQZJq3VLt9g&usqp=CAU",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "937,412",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "Game of Thrones",
      "Year": "2011–",
      "Rated": "TV-MA",
      "Released": "17 Apr 2011",
      "Runtime": "56 min",
      "Genre": "Adventure, Drama, Fantasy",
      "Director": "N/A",
      "Writer": "David Benioff, D.B. Weiss",
      "Actors": "Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington",
      "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
      "Poster": "https://w0.peakpx.com/wallpaper/971/997/HD-wallpaper-game-of-thrones-game-of-thrones-poster.jpg",
      "Metascore": "N/A",
      "imdbRating": "9.5",
      "imdbVotes": "1,046,830",
      "imdbID": "tt0944947",
      "Type": "series",
      "totalSeasons": "7",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMDk4Y2Y1MDAtNGVmMC00ZTlhLTlmMmQtYjcyN2VkNzUzZjg2XkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
      ]
    },
    {
      "Title": "Vikings",
      "Year": "2013–",
      "Rated": "TV-14",
      "Released": "03 Mar 2013",
      "Runtime": "44 min",
      "Genre": "Action, Drama, History",
      "Director": "N/A",
      "Writer": "Michael Hirst",
      "Actors": "Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick",
      "Plot": "The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.",
      "Language": "English, Old English, Norse, Old, Latin",
      "Country": "Ireland, Canada",
      "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
      "Poster": "https://w0.peakpx.com/wallpaper/813/974/HD-wallpaper-vikings-ivar-thumbnail.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.6",
      "imdbVotes": "198,041",
      "imdbID": "tt2306299",
      "Type": "series",
      "totalSeasons": "5",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      "Title": "Gotham",
      "Year": "2014–",
      "Rated": "TV-14",
      "Released": "01 Aug 2014",
      "Runtime": "42 min",
      "Genre": "Action, Crime, Drama",
      "Director": "N/A",
      "Writer": "Bruno Heller",
      "Actors": "Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee",
      "Plot": "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      "Language": "English",
      "Country": "USA",
      "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1ODk3NDczNF5BMl5BanBnXkFtZTgwODE5MDQ4NjE@._V1_.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.0",
      "imdbVotes": "133,375",
      "imdbID": "tt3749900",
      "Type": "series",
      "totalSeasons": "3",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg"
      ]
    },
    {
      "Title": "Power",
      "Year": "2014–",
      "Rated": "TV-MA",
      "Released": "N/A",
      "Runtime": "50 min",
      "Genre": "Crime, Drama",
      "Director": "N/A",
      "Writer": "Courtney Kemp Agboh",
      "Actors": "Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren",
      "Plot": "James \"Ghost\" St. Patrick, a wealthy New York night club owner who has it all, catering for the city's elite and dreaming big, lives a double life as a drug kingpin.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 win & 6 nominations.",
      "Poster": "https://img1.wsimg.com/isteam/ip/c8f95f49-6fa5-48a8-88a5-03e189f6a532/81FEAD53-5A60-4D5C-A59A-319D692F2C21.jpeg",
      "Metascore": "N/A",
      "imdbRating": "8.0",
      "imdbVotes": "14,770",
      "imdbID": "tt3281796",
      "Type": "series",
      "totalSeasons": "3",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg"
      ]
    },
    {
      "Title": "Narcos",
      "Year": "2015–",
      "Rated": "TV-MA",
      "Released": "28 Aug 2015",
      "Runtime": "49 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "N/A",
      "Writer": "Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein",
      "Actors": "Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie",
      "Plot": "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
      "Poster": "https://i.pinimg.com/550x/8f/ea/46/8fea4625e144a3cb76c6d4213802b40e.jpg",
      "Metascore": "N/A",
      "imdbRating": "8.9",
      "imdbVotes": "118,680",
      "imdbID": "tt2707408",
      "Type": "series",
      "totalSeasons": "2",
      "Response": "True",
       "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "Title": "Breaking Bad",
      "Year": "2008–2013",
      "Rated": "TV-14",
      "Released": "20 Jan 2008",
      "Runtime": "49 min",
      "Genre": "Crime, Drama, Thriller",
      "Director": "N/A",
      "Writer": "Vince Gilligan",
      "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
      "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
      "Language": "English, Spanish",
      "Country": "USA",
      "Awards": "Won 2 Golden Globes. Another 132 wins & 218 nominations.",
      "Poster": "https://i.pinimg.com/236x/48/25/ea/4825ea77e814e61148b219446a034368.jpg",
      "Metascore": "N/A",
      "imdbRating": "9.5",
      "imdbVotes": "889,883",
      "imdbID": "tt0903747",
      "Type": "series",
      "totalSeasons": "5",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NDkwNDk5NV5BMl5BanBnXkFtZTgwNDM0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NDcyNDMzMF5BMl5BanBnXkFtZTgwOTI0MTI2MDE@._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMTczMjM3NjFeQTJeQWpwZ15BbWU4MDc1MTI1MzAx._V1_SY1000_CR0,0,1495,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MTE3MTgwMF5BMl5BanBnXkFtZTgwOTQxMjUzMDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Doctor Strange",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "04 Nov 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "Scott Derrickson",
      "Writer": "Scott Derrickson (screenplay), C. Robert Cargill (screenplay), Jon Spaihts (story by), Scott Derrickson (story by), C. Robert Cargill (story by), Steve Ditko (comic book)",
      "Actors": "Rachel McAdams, Benedict Cumberbatch, Mads Mikkelsen, Tilda Swinton",
      "Plot": "After his career is destroyed, a brilliant but arrogant and conceited surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://papers.co/wp-content/uploads/papers.co-hi96-marvel-doctor-strange-art-film-poster-1-wallpaper.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt1211837",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxNTAyNTU0NV5BMl5BanBnXkFtZTgwNzMzMDY3OTE@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5NDc5NzUwNV5BMl5BanBnXkFtZTgwMDM3MDM2NzE@._V1_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "16 Dec 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Sci-Fi",
      "Director": "Gareth Edwards",
      "Writer": "Chris Weitz (screenplay), Tony Gilroy (screenplay), John Knoll (story), Gary Whitta (story), George Lucas (characters)",
      "Actors": "Felicity Jones, Riz Ahmed, Mads Mikkelsen, Ben Mendelsohn",
      "Plot": "The Rebellion makes a risky move to steal the plans to the Death Star, setting up the epic saga to follow.",
      "Language": "English",
      "Country": "USA",
      "Awards": "1 nomination.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg?width=768&mxf-ref=https://bbfc.co.uk",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNDMxMTQzMjQxM15BMl5BanBnXkFtZTgwNzAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNjkxOTk5NV5BMl5BanBnXkFtZTgwODAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNjM4MzExNDAyNl5BMl5BanBnXkFtZTgwOTAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTgxMDcyNV5BMl5BanBnXkFtZTgwMDExMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Assassin's Creed",
      "Year": "2016",
      "Rated": "N/A",
      "Released": "21 Dec 2016",
      "Runtime": "N/A",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "Justin Kurzel",
      "Writer": "Bill Collage (screenplay), Adam Cooper (screenplay), Michael Lesslie (screenplay)",
      "Actors": "Michael Fassbender, Michael Kenneth Williams, Marion Cotillard, Jeremy Irons",
      "Plot": "When Callum Lynch explores the memories of his ancestor Aguilar and gains the skills of a Master Assassin, he discovers he is a descendant of the secret Assassins society.",
      "Language": "English",
      "Country": "UK, France, USA, Hong Kong",
      "Awards": "N/A",
      "Poster": "https://i1.sndcdn.com/artworks-000059165349-fd8glp-t500x500.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt2094766",
      "Type": "movie",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOWYzOTctOTc4My00ZmJkLTgzMTctMmUxNDI5ODQzYzNjXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZTY5ZGUxMTAtYTU0OC00NGQ2LTkzNzgtZGZmNjlmNjY3MGU0XkEyXkFqcGdeQXVyNTY0MTkxMTg@._V1_SY1000_CR0,0,1500,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MWYwZTEtYzc5Yi00NGM2LTg1YTctNjY2YzQ0NDJhZDAwXkEyXkFqcGdeQXVyNDAyODU1Njc@._V1_SY1000_CR0,0,1499,1000_AL_.jpg"
      ]
    },
    {
      "ComingSoon": true,
      "Title": "Luke Cage",
      "Year": "2016–",
      "Rated": "TV-MA",
      "Released": "30 Sep 2016",
      "Runtime": "55 min",
      "Genre": "Action, Crime, Drama",
      "Director": "N/A",
      "Writer": "Cheo Hodari Coker",
      "Actors": "Mahershala Ali, Mike Colter, Frankie Faison, Erik LaRay Harvey",
      "Plot": "Given superstrength and durability by a sabotaged experiment, a wrongly accused man escapes prison to become a superhero for hire.",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://media.wired.co.uk/photos/606da0be687a704c2c36181c/master/w_1600%2Cc_limit/luke-poster.jpg",
      "Metascore": "N/A",
      "imdbRating": "N/A",
      "imdbVotes": "N/A",
      "imdbID": "tt3322314",
      "Type": "series",
      "totalSeasons": "1",
      "Response": "True",
      "Images": [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MDg3NjY2OF5BMl5BanBnXkFtZTgwNDE1NDU4OTE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BOTYzOTQyNDYxNl5BMl5BanBnXkFtZTgwNzA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMjA3MTQ5Ml5BMl5BanBnXkFtZTgwOTA1NDU4OTE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg",
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyNjg5ODYwNF5BMl5BanBnXkFtZTgwMTE1NDU4OTE@._V1_SY1000_CR0,0,1477,1000_AL_.jpg"
      ]
    }
  ]

const mainDiv = document.querySelector(".Action-film")
filmData.forEach(function(film)
{
const animediv=document.createElement("div")
animediv.classList.add("film-1")
mainDiv.appendChild(animediv)
const poste=document.createElement("img");
poste.src=film.Poster;
animediv.appendChild(poste)
const tittle=document.createElement("h1");
tittle.textContent=film.Title;
animediv.appendChild(tittle)

const yr=document.createElement("h3");
yr.textContent=film.Year;
animediv.appendChild(yr)

const release=document.createElement("h3");
release.textContent=film.Released;
animediv.appendChild(release)

const run=document.createElement("h3");
run.textContent=film.Runtime;
animediv.appendChild(run)

const directer=document.createElement("h3");
directer.textContent=film.Director;
animediv.appendChild(directer)

const language=document.createElement("h3");
language.textContent=film.Language;
animediv.appendChild(language)

const award=document.createElement("h3");
award.textContent=film.Awards;
animediv.appendChild(award)

const imb = document.createElement("h3");
imb.textContent=film.imdbRating;
animediv.appendChild(imb)

const Tanchor=document.createElement("a");
Tanchor.href=film.Tlink;
animediv.appendChild(Tanchor)
Tanchor.target="_blank";


const Traile=document.createElement("p")
Traile.textContent=film.Trailer;
Tanchor.appendChild(Traile)

const btn=document.createElement("button")
animediv.appendChild(btn)

const anchor=document.createElement("a");
anchor.href=film.Link;
btn.appendChild(anchor)

const op=document.createElement("h3");
op.textContent=film.Open;
anchor.appendChild(op)

const anchor2=document.createElement("a");
anchor2.href=film.Link2;
op.appendChild(anchor2)


}
)
const mainDiv2=document.querySelector(".Spy-film")
const filmData2= [
  {
    "Title": "Avatar",
    "Year": "2009",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Language": "English, Spanish",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "https://i.pinimg.com/736x/8d/6e/d1/8d6ed1589e14ccd692fc4db7c4275116.jpg",
    "imdbRating": "7.9",
    "Link" : "",
    "Open" : "Open"
  },
  {
    "Title": "Godzilla",
    "Year": "2014",
    "Released": "8 may 2014",
    "Runtime": "2h 3m",
    "Genre": "Action/Sci-Fi",
    "Director": "	Gareth Edwards",
    "Language": "English, HIndi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/1/10/Godzilla_%282014%29_poster.jpg",
    "imdbRating": "6.4",
    "imdbVotes": "533,874",
  },
  {
    "Title": "Top Gun: Maverick",
    "Year": "2022",
    "Released": "27 May 2022",
    "Runtime": "2h 11m",
    "Genre": "Action, Thriller",
    "Director": "Joseph Kosinski",
    "Language": "English Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
    "imdbRating": "8.3"
  },
  {
    "Title": "The Avengers",
    "Year": "2012",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Sci-Fi, Thriller",
    "Director": "Joss Whedon",
    "Language": "English, Russian",
    "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
    "Poster": "https://w0.peakpx.com/wallpaper/264/876/HD-wallpaper-marvel-cinematic-universe-marvel-super-heroes-the-avengers-avengers-infinity-war.jpg",
    "imdbRating": "8.1",
  },
  {
    "Title": "Pirates of the Caribbean: The Curse of the Black Pearl ",
    "Year": "2003",
    "Released": "28 Jone 2003",
    "Runtime": "143 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Gore Verbinski",
    "Language": "English, French",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
    "imdbRating": "8.2",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Language": "English",
    "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
    "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-sScCuHvN7A8HPX71bI0e_AFQZJq3VLt9g&usqp=CAU",
    "imdbRating": "8.6",
  },
  {
    "Title": "F9",
    "Year": "2021",
    "Released": "19 May 2021",
    "Runtime": "143 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "	Justin Lin",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/F9_film_poster.jpg",
    "imdbRating": "5.2",
  },
  {
    "Title": "Vikings",
    "Year": "2013",
    "Released": "03 Mar 2013",
    "Runtime": "44 min",
    "Genre": "Action, Drama, History",
    "Director": "N/A",
    "Language": "English, Old English, Norse, Old, Latin",
    "Country": "Ireland, Canada",
    "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
    "Poster": "https://w0.peakpx.com/wallpaper/813/974/HD-wallpaper-vikings-ivar-thumbnail.jpg",
    "imdbRating": "8.6"
  },
  {
    "Title": "Gotham",
    "Year": "2014",
    "Released": "01 Aug 2014",
    "Runtime": "42 min",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1ODk3NDczNF5BMl5BanBnXkFtZTgwODE5MDQ4NjE@._V1_.jpg",
    "imdbRating": "8.0",
  },
  {
    "Title": "X-Men",
    "Year": "2000",
    "Released": "12 July 2000",
    "Runtime": "104 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Bryan Singer",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg",
    "imdbRating": "7.3",
  },
  {
    "Title": "Narcos",
    "Year": "2015",
    "Released": "28 Aug 2015",
    "Runtime": "49 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "N/A",
    "Language": "English, Spanish",
    "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
    "Poster": "https://i.pinimg.com/550x/8f/ea/46/8fea4625e144a3cb76c6d4213802b40e.jpg",
    "imdbRating": "8.9",
  },
  {
    "Title": "Crank",
    "Year": "2006",
    "Released": "1 September 2006",
    "Runtime": "88 min",
    "Director": "	Neveldine/Taylor",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Crank_final.jpg",
    "imdbRating": "6.9",
  },
  {
    "Title": "Tenet",
    "Year": "2020",
    "Released": "26 August 2020",
    "Runtime": "150 min",
    "Director": "Christopher Nolan",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
    "imdbRating": "7.3",
  },
  {
    "ComingSoon": true,
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "Released": "16 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg?width=768&mxf-ref=https://bbfc.co.uk",
    "imdbRating": "N/A",
  },
  {
    "ComingSoon": true,
    "Title": "Assassin's Creed",
    "Year": "2016",
    "Released": "21 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Justin Kurzel",
    "Language": "English",
    "Awards": "N/A",
    "Poster": "https://i1.sndcdn.com/artworks-000059165349-fd8glp-t500x500.jpg",
    "imdbRating": "N/A",
  },
  {
    "ComingSoon": true,
    "Title": "Luke Cage",
    "Year": "2016",
    "Rated": "TV-MA",
    "Released": "30 Sep 2016",
    "Runtime": "55 min",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Writer": "Cheo Hodari Coker",
    "Language": "English",
    "Poster": "https://media.wired.co.uk/photos/606da0be687a704c2c36181c/master/w_1600%2Cc_limit/luke-poster.jpg",
    "imdbVotes": "N/A",
  }
]
filmData2.forEach(function(film2)
{
  const filmdiv2=document.createElement("div")
  filmdiv2.classList.add("action-movies")
  mainDiv2.appendChild(filmdiv2)
  const img=document.createElement("img");
  img.src=film2.Poster;
  filmdiv2.appendChild(img)

  const tittle1=document.createElement("h1");
  tittle1.textContent=film2.Title;
  filmdiv2.appendChild(tittle1)

    const yr=document.createElement("h3");
  yr.textContent=film2.Year;
  filmdiv2.appendChild(yr)

  const release=document.createElement("h3");
  release.textContent=film2.Released;
  filmdiv2.appendChild(release)

  const run=document.createElement("h3");
  run.textContent=film2.Runtime;
  filmdiv2.appendChild(run)

  const directer=document.createElement("h3");
  directer.textContent=film2.Director;
  filmdiv2.appendChild(directer)

  const language=document.createElement("h3");
  language.textContent=film2.Language;
  filmdiv2.appendChild(language)

  const award=document.createElement("h3");
  award.textContent=film2.Awards;
  filmdiv2.appendChild(award)

  const imb = document.createElement("h3");
  imb.textContent=film2.imdbRating;
  filmdiv2.appendChild(imb)

  const btn=document.createElement("button")
  filmdiv2.appendChild(btn)
  const anchor=document.createElement("a")
  anchor.href=film2.Link;
  btn.appendChild(anchor)
const open=document.createElement("h3");
open.textContent=filmdiv2.Open;
anchor.appendChild(open)

  


}
)

const mainDiv3=document.querySelector(".Horror-film")
const filmData3= [
  {
    "Title": "Don't Breathe",
    "Year": "2016",
    "Released": "12 March 2016",
    "Runtime": "88 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Fede Álvarez",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/4/41/Don%27t_Breathe_%282016_film%29.png",
    "imdbRating": "6.5",
  },
  {
    "Title": "Evil Dead Rise",
    "Year": "2023",
    "Released": "15 march 2023",
    "Runtime": "97 min",
    "Genre": "Horror",
    "Director": "	Lee Cronin",
    "Language": "English, HIndi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg",
    "imdbRating": "6.4",
    "imdbVotes": "533,874",
  },
  {
    "Title": "Masooda",
    "Year": "2022",
    "Released": "18 Novermber 2022",
    "Runtime": "160 min",
    "Genre": "Horror",
    "Director": "	Sai Kiran",
    "Language": "Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/6/63/Masooda_Movie_Poster.jpg",
    "imdbRating": "7.2"
  },
  {
    "Title": "The Avengers",
    "Year": "2012",
    "Released": "04 May 2012",
    "Runtime": "143 min",
    "Genre": "Action, Sci-Fi, Thriller",
    "Director": "Joss Whedon",
    "Language": "English, Russian",
    "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
    "Poster": "https://w0.peakpx.com/wallpaper/264/876/HD-wallpaper-marvel-cinematic-universe-marvel-super-heroes-the-avengers-avengers-infinity-war.jpg",
    "imdbRating": "8.1",
  },
  {
    "Title": "Pirates of the Caribbean: The Curse of the Black Pearl ",
    "Year": "2003",
    "Released": "28 Jone 2003",
    "Runtime": "143 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Gore Verbinski",
    "Language": "English, French",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
    "imdbRating": "8.2",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Language": "English",
    "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
    "Poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-sScCuHvN7A8HPX71bI0e_AFQZJq3VLt9g&usqp=CAU",
    "imdbRating": "8.6",
  },
  {
    "Title": "F9",
    "Year": "2021",
    "Released": "19 May 2021",
    "Runtime": "143 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "	Justin Lin",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/2/2b/F9_film_poster.jpg",
    "imdbRating": "5.2",
  },
  {
    "Title": "Vikings",
    "Year": "2013",
    "Released": "03 Mar 2013",
    "Runtime": "44 min",
    "Genre": "Action, Drama, History",
    "Director": "N/A",
    "Language": "English, Old English, Norse, Old, Latin",
    "Country": "Ireland, Canada",
    "Awards": "Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.",
    "Poster": "https://w0.peakpx.com/wallpaper/813/974/HD-wallpaper-vikings-ivar-thumbnail.jpg",
    "imdbRating": "8.6"
  },
  {
    "Title": "Gotham",
    "Year": "2014",
    "Released": "01 Aug 2014",
    "Runtime": "42 min",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1ODk3NDczNF5BMl5BanBnXkFtZTgwODE5MDQ4NjE@._V1_.jpg",
    "imdbRating": "8.0",
  },
  {
    "Title": "X-Men",
    "Year": "2000",
    "Released": "12 July 2000",
    "Runtime": "104 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Bryan Singer",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/8/81/X-MenfilmPoster.jpg",
    "imdbRating": "7.3",
  },
  {
    "Title": "Narcos",
    "Year": "2015",
    "Released": "28 Aug 2015",
    "Runtime": "49 min",
    "Genre": "Biography, Crime, Drama",
    "Director": "N/A",
    "Language": "English, Spanish",
    "Awards": "Nominated for 2 Golden Globes. Another 4 nominations.",
    "Poster": "https://i.pinimg.com/550x/8f/ea/46/8fea4625e144a3cb76c6d4213802b40e.jpg",
    "imdbRating": "8.9",
  },
  {
    "Title": "Crank",
    "Year": "2006",
    "Released": "1 September 2006",
    "Runtime": "88 min",
    "Director": "	Neveldine/Taylor",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/2/26/Crank_final.jpg",
    "imdbRating": "6.9",
  },
  {
    "Title": "Tenet",
    "Year": "2020",
    "Released": "26 August 2020",
    "Runtime": "150 min",
    "Director": "Christopher Nolan",
    "Language": "English, Hindi, Telugu",
    "Poster": "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
    "imdbRating": "7.3",
  },
  {
    "ComingSoon": true,
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "Released": "16 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Gareth Edwards",
    "Language": "English",
    "Country": "USA",
    "Awards": "1 nomination.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg?width=768&mxf-ref=https://bbfc.co.uk",
    "imdbRating": "N/A",
  },
  {
    "ComingSoon": true,
    "Title": "Assassin's Creed",
    "Year": "2016",
    "Released": "21 Dec 2016",
    "Runtime": "N/A",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Justin Kurzel",
    "Language": "English",
    "Awards": "N/A",
    "Poster": "https://i1.sndcdn.com/artworks-000059165349-fd8glp-t500x500.jpg",
    "imdbRating": "N/A",
  },
  {
    "ComingSoon": true,
    "Title": "Luke Cage",
    "Year": "2016",
    "Rated": "TV-MA",
    "Released": "30 Sep 2016",
    "Runtime": "55 min",
    "Genre": "Action, Crime, Drama",
    "Director": "N/A",
    "Writer": "Cheo Hodari Coker",
    "Language": "English",
    "Poster": "https://media.wired.co.uk/photos/606da0be687a704c2c36181c/master/w_1600%2Cc_limit/luke-poster.jpg",
    "imdbVotes": "N/A",
  }
]
filmData3.forEach(function(film)
{
  const filmdiv=document.createElement("div")
  filmdiv.classList.add("Horror-movies")
  mainDiv3.appendChild(filmdiv)
  const img=document.createElement("img");
  img.src=film.Poster;
  filmdiv.appendChild(img)
  const tittle1=document.createElement("h1");
  tittle1.textContent=film.Title;
  filmdiv.appendChild(tittle1)
  const yr=document.createElement("h3");
  yr.textContent=film.Year;
  filmdiv.appendChild(yr)
  const release=document.createElement("h3");
  release.textContent=film.Released;
  filmdiv.appendChild(release)
  const run=document.createElement("h3");
  run.textContent=film.Runtime;
  filmdiv.appendChild(run)
  const directer=document.createElement("h3");
  directer.textContent=film.Director;
  filmdiv.appendChild(directer)
  const language=document.createElement("h3");
  language.textContent=film.Language;
  filmdiv.appendChild(language)
  const award=document.createElement("h3");
  award.textContent=film.Awards;
  filmdiv.appendChild(award)
  const imb = document.createElement("h3");
  imb.textContent=film.imdbRating;
  filmdiv.appendChild(imb)
  const btn=document.createElement("button")
  filmdiv.appendChild(btn)
  const anchor=document.createElement("a")
  anchor.href=film.Link;
  btn.appendChild(anchor)
  const open=document.createElement("h3");
  open.textContent=filmdiv.Open;
  anchor.appendChild(open)


}
) 

