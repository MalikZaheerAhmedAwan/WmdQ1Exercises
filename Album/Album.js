var MusicAlbum = /** @class */ (function () {
    function MusicAlbum() {
    }
    return MusicAlbum;
}());
var obj1 = make_album("Junaid Jamshed", "Yaad E Haram");
var obj2 = make_album("Abrar-ul-Haq", "Assan Jana Mall-o-Mall");
var obj3 = make_album("Javed Bashir", "Yaara");
print_album(obj1);
print_album(obj2);
print_album(obj3);
var obj4 = make_albums("Junaid Jamshed", "Yaad E Haram", 12);
var obj5 = make_albums("Abrar-ul-Haq", "Assan Jana Mall-o-Mall");
var obj6 = make_albums("Javed Bashir", "Yaara", 7);
print_albums(obj4);
print_albums(obj5);
print_albums(obj6);
function make_album(artistname, albumtitle) {
    var obj = new MusicAlbum();
    obj.artistName = artistname;
    obj.albumTitle = albumtitle;
    return obj;
}
function make_albums(artistname, albumtitle, tracks) {
    var obj = new MusicAlbum();
    obj.artistName = artistname;
    obj.albumTitle = albumtitle;
    obj.tracks = tracks || 0;
    return obj;
}
function print_album(musicalbum) {
    console.log("\n Artist Name :" + musicalbum.artistName);
    console.log("\n Album Title :" + musicalbum.albumTitle);
}
function print_albums(musicalbum) {
    console.log("\n Artist Name :" + musicalbum.artistName);
    console.log("\n Album Title :" + musicalbum.albumTitle);
    console.log("\n No of Tracks :" + musicalbum.tracks);
}
