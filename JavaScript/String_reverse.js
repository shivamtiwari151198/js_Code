var string="Welcome to this Code";
var reverseEntireSentance=reaversebySeparator(string," ");
var reverseWorld=reaversebySeparator(reverseEntireSentance," ");

function reaversebySeparator(string, separator){
    return string.split(separator).reverse().join(separator);
}

