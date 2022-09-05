const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(bodyParser.json());

    let users = [
        {
            id: 1,
            name: "Violet",
            favoriteMovies: ["Star Wars"]
        },
        {
            id: 2,
            name: "Brooklyn",
            favoriteMovies: ["The Lion King"]
        }
    ]
    let movies = [
    {
        "Title":"Star Wars",
        "Description":  "This is a movie that is about A galaxy far far away.  Darth Vadar is after some stolen plans of his new great weapon called the Death Star.",
        "Genre" : {
            "Name": "Sci-Fi",
            "Description": "Science fiction is storytelling with a focus on characters dealing with advances in technology, science, the future, and space."
        },
        "Director": {
            "Name": "George Lucas",
            "Bio": "George Walton Lucas Jr. (born May 14, 1944) is an American film director, producer, screenwriter, and entrepreneur.  Lucas is best known for creating the Star Wars and Indiana Jones franchises and founding Lucasfilm, LucasArts, and Industrial Light & Magic."
        },
        "ImageURL":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png",
        "Featured":false
    },
    {
        "Title":"The Lion King",
        "Description": "Disney's The Lion King is about a young lion named Simba, who is the crown prince of an African Savanna. When his father dies in an accident staged by his uncle, Simba is made to feel responsible for his father's death and must overcome his fear of taking responsibility as the rightful heir to the throne.",
        "Genre": {
            "Name": "Family",
            "Description": "A children's film, or family film, is a film genre that contains children or relates to them in the context of home and family. "
        },
        "Director": {
            "Name": " Rob Minkoff, Roger Allers",
            "Bio": "Robert Ralph Minkoff (born August 11, 1962) is an American filmmaker.  Roger Charles Allers (born June 29, 1949) is an American film director, screenwriter, animator, storyboard artist, and playwright.",
        },
        "ImageURL":"https://resizing.flixster.com/-9O860xiuHUyNtotR_JtUrGqU3I=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FiZWI5MTcwLWE0ZTctNGQyNy05NWJlLTM3MzMxMTliZDlhNS53ZWJw",
        "Featured":false
    },    
    {
        "Title":"The Big Lebowski",
        "Description":  "Ultimate L.A. slacker Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire's missing wife.",
        "Genre" : {
            "Name": "Comedy",
            "Description": "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh."
        },
        "Director": {
            "Name": "Joel and Ethan Coen",
            "Bio": "Joel Daniel Coen (born November 29, 1954) and Ethan Jesse Coen (born September 21, 1957), collectively known as the Coen brothers are American filmmakers. Their films span many genres and styles, which they frequently subvert or parody."
        },
        "ImageURL":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQht6sLaasyuNGvc6MvheLZhXkJFipF24hn1vtrR2no8OpqjGh6",
        "Featured":false
    },
    {
        "Title":"Pulp Fiction",
        "Description":  "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "Genre" : {
            "Name": "Comedy",
            "Description": "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh."
        },
        "Director": {
            "Name": "Quentin Taranino",
            "Bio": "Quentin Tarantino (born March 27, 1963) is an American filmmaker and actor. His films are characterized by frequent references to popular culture and film genres, nonlinear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts."
        },
        "ImageURL":"https://www.filmsite.org/posters/pulpfiction.jpg",
        "Featured":false
    },
    {
        "Title":"Shrek",
        "Description":  "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
        "Genre" : {
            "Name": "Family",
            "Description": "A children's film, or family film, is a film genre that contains children or relates to them in the context of home and family."
        },
        "Director": {
            "Name": " Andrew Adamson",
            "Bio": "Andrew Ralph Adamson (born 1 December 1966) is a New Zealand film director, producer, and screenwriter based in Los Angeles, where he directed the Academy Award-winning animated films Shrek and Shrek 2."
        },
        "ImageURL":"https://static.wikia.nocookie.net/shrek/images/8/85/Shrek_2001_poster.jpg/revision/latest?cb=20201020072731",
        "Featured":false
    },
    {
        "Title":"Super Troopers",
        "Description":  "Five Vermont state troopers, avid pranksters with a knack for screwing up, try to save their jobs and out-do the local police department by solving a crime.",
        "Genre" : {
            "Name": "Comedy",
            "Description": "Professional entertainment consisting of jokes and satirical sketches, intended to make an audience laugh."
        },
        "Director": {
            "Name": "Jay Chandrasekhar",
            "Bio": "Jay Chandrasekhar was born on April 9, 1968 in Chicago, Illinois, USA. He is a director and actor, known for Super Troopers (2001), Club Dread (2004) and Beerfest (2006)."
        },
        "ImageURL":"https://www.imdb.com/title/tt0247745/mediaviewer/rm1909396480/?ref_=tt_ov_i",
        "Featured":false
    },
    {
        "Title":"The Silence of the Lambs",
        "Description":  "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "Genre" : {
            "Name": "Horror",
            "Description": " Fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience—in other words, it develops an atmosphere of horror."
        },
        "Director": {
            "Name": "Jonathan Demme",
            "Bio": "Jonathan Demme was born on February 22, 1944 in Baldwin, Long Island, New York, USA. He was a director and producer, known for The Silence of the Lambs (1991), Rachel Getting Married (2008) and Philadelphia (1993)."
        },
        "ImageURL":"https://www.imdb.com/title/tt0102926/mediaviewer/rm3242988544/?ref_=tt_ov_i",
        "Featured":false
    },
    {
        "Title":"Jaws",
        "Description":  "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
        "Genre" : {
            "Name": "Horror",
            "Description": " Fiction whose purpose is to create feelings of fear, dread, repulsion, and terror in the audience—in other words, it develops an atmosphere of horror."
        },
        "Director": {
            "Name": "Steven Spielberg",
            "Bio": "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world."
        },
        "ImageURL":"https://www.imdb.com/title/tt0073195/mediaviewer/rm1449540864/?ref_=tt_ov_i",
        "Featured":false
    },
    {
        "Title":"The Departed",
        "Description":  "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "Genre" : {
            "Name": "Thriller",
            "Description": " a novel, play, or movie with an exciting plot, typically involving crime or espionage."
        },
        "Director": {
            "Name": "Martin Scorsese",
            "Bio": "Martin Charles Scorsese was born on November 17, 1942 in Queens, New York City, to Catherine Scorsese (née Cappa) and Charles Scorsese, who both worked in Manhattan's garment district, and whose families both came from Palermo, Sicily."
        },
        "ImageURL":"https://www.imdb.com/title/tt0073195/mediaviewer/rm1449540864/?ref_=tt_ov_i",
        "Featured":false
    },
    {
        "Title":"The Godfather",
        "Description":  "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        "Genre" : {
            "Name": "Thriller",
            "Description": " a novel, play, or movie with an exciting plot, typically involving crime or espionage."
        },
        "Director": {
            "Name": "Francis Ford Coppola",
            "Bio": "Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family."
        },
        "ImageURL":"https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/?ref_=tt_ov_i",
        "Featured":false
    },
];    

// CREATE

app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser)
  } else {
    res.status(400).send('users need names')
  }
})

//CREATE

app.post('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;
  
    let user = users.find( user => user.id == id ); //search user by id
  
    if (user) {
       user.favoriteMovies.push(movieTitle);
      res.status(200).send(`${movieTitle} has been added to ${user.name}'s array`);
    } else {
      res.status(400).send('No such user found!');
    }
  });
  

//UPDATE

app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const updatedUser = req.body;

    let user = users.find(user => user.id == id);

    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    } else {
        res.status(400).send('User not found')
    }
})

//GET REQUEST
 app.get('/', (req, res) => {
    res.send('Welcome to My Movie app!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', {root: __dirname });
});

//READ
app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

//READ

app.get('/movies/:title', (req, res) => {
    const {title} = req.params;
    const movie = movies.find( movie => movie.Title === title );
  
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(400).send('No such movie!');
    }
  });

//READ

app.get('/movies/genre/:genreName', (req, res) => {
    const {genreName} = req.params;
    const genre = movies.find( movie => movie.Genre.Name === genreName ).Genre;

    if (genre) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('Genre not found');
    }
});

app.get('/movies/director/:directorName', (req, res) => {
    const {directorName} = req.params;
    const director = movies.find( movie => movie.Director.Name === directorName ).Director;
    
    if (director) {
        res.status(200).json(director);
    } else {
        res.status(400).send('Director not found!');
    }
});


//ERROR HANDLING CODE
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
});

//DELETE

app.delete('/users/:id/:movieTitle', (req, res) => {
    const { id, movieTitle } = req.params;

    let user = users.find( user => user.id == id );

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
        res.status(200).send(`${movieTitle} has been removed from ${user.name}'s array`);
    } else {
        res,status (400).send('No such user found!');
    }
});

//DELETE

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    let user = users.find( user => user.id == id );

    if (user) {
        users = users.filter(user => user.id != id);
        res.status(200).send(`user ${id} has been deleted`);
    } else {
        res.status(400).send('No such user found!');
    }
});

//LISTEN FOR REQUEST
app.listen(8080, () => console.log("listening on 8080"))
