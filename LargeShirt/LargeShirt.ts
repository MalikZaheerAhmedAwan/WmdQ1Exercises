let size: string="Large";
let msg : string ="14th August, Independance Day ";

make_shirt(size,msg);
size="14";
make_shirt(size,msg);
size="Medium";
make_shirt(size,msg);

size="12";
make_shirt(size,msg);

size="Large";
make_shirt(size,msg);

function make_shirt (size : string, msg : string, defaultMsg : string=" I Live TypeScript")  {

if (size=="Large" || size=="Medium")
console.log("\n"+defaultMsg);
else
    return console.log("\nThe size of T-Shirt is "+size+" with printed message "+msg+".");
}