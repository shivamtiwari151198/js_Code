function modifayArray(arr, callback){
    arr.push(100);
    callback();
}
var arr=[1,2,3,4,5,6];
modifayArray(arr,function(){
    console.log("Array has been Modified",arr)
});