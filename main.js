// define the make album function
function make_Album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling theree function and creating 3 variables with diferent values
let album1 = make_Album("Fiza", "Album title 1");
let album2 = make_Album("Ayesha", "Album title 2");
let album3 = make_Album("Habiba", "Album title 3", 10);
// printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
export {};
