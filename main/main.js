module.exports = function main(kilo,waitMin) {
    var str = 0;
    if( kilo <=2 ){
        str = 6;
    }
    else if(kilo > 2 && kilo < 8){
        str = 6 + (kilo -2) * 0.8;
    }
    else{
        str = 6 + (8-2) * 0.8 +(kilo - 8)*(0.8+0.8/2);
    }
    str += waitMin*0.25;
    console.log(Math.round(str));
    return 'Hello World!';
};