class MusicAlbum {
    artistName : string ;
    albumTitle : string ;
    tracks : number;
}


let obj1 = make_album("Junaid Jamshed","Yaad E Haram");
let obj2 =make_album("Abrar-ul-Haq","Assan Jana Mall-o-Mall");
let obj3 =make_album("Javed Bashir","Yaara");

print_album(obj1);
print_album(obj2);
print_album(obj3);

let obj4 = make_albums("Junaid Jamshed","Yaad E Haram",12);
let obj5 =make_albums("Abrar-ul-Haq","Assan Jana Mall-o-Mall");
let obj6 =make_albums("Javed Bashir","Yaara",7);

print_albums(obj4);
print_albums(obj5);
print_albums(obj6);

function make_album(artistname : string ,albumtitle : string ) : MusicAlbum {
    let obj = new MusicAlbum();
    obj.artistName=artistname;
obj.albumTitle=albumtitle;
    return obj;
}
function make_albums(artistname : string ,albumtitle : string , tracks ?: number) : MusicAlbum {
    let obj = new MusicAlbum();
    obj.artistName=artistname;
obj.albumTitle=albumtitle;
obj.tracks=tracks||0;
return obj;
}

function print_album(musicalbum :  MusicAlbum) {
    console.log("\n Artist Name :"+musicalbum.artistName );
    console.log("\n Album Title :"+musicalbum.albumTitle ); 
    }

function print_albums(musicalbum :  MusicAlbum) {
console.log("\n Artist Name :"+musicalbum.artistName );
console.log("\n Album Title :"+musicalbum.albumTitle ); 
console.log("\n No of Tracks :"+musicalbum.tracks ); 
}



