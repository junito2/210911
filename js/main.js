//console.log("Hello World");
//let number = 123;
//let fruits = "みかん";

//for ( let count = 1; count <= 10; count ++ ){
  //  console.log('エビの数$(count)匹');
//}


for ( let i = 1; i <= 100; i++ ){
   // console.log("ループ回数" + (i) + "回目"); 
   if ( i % 2 === 0){
    console.log();
   } else if ( i % 15 === 0){
    console.log("ループ回数" + (i) + "回目" + "「私は犬なのでしょうかワン！」");
    } else if ( i % 5 === 0){
    console.log("ループ回数" + (i) + "回目" + "「犬」");
    } else if ( i % 3 === 0){
        console.log("ループ回数" + (i) + "回目" + "「アホ」");
    } else {
        console.log("ループ回数" + (i) + "回目");
    }
}