// // ==========================q1
// function cardHide(e){
//     var cardNumber = e ;
//     var last = cardNumber.slice(cardNumber.length -4,cardNumber.length);
//     for(var i = 0; i < cardNumber.length -4; i++){
//     var star = "***********";
//     }
//     console.log(star+last)
// }
// cardHide('283724338245456434');
// ============================q2
// function potatoes(e){
//     var inp = e;
//     var count = 0
//     for(var i = 0; i < inp.length ; i++){
//         // console.log(i);
//         var check = inp.slice(i,i+6);
//         if(check === 'potato'){
//             count+= 1; 
//         }
//     }
//     console.log(`potato is ${count} time in this text`)
// }
// potatoes('potatopotatopotato') ;
// =====================q3 
// function doubleChar(e){
// var inpt = e;
// var dbl;
// for ( i = 0 ; i < inpt.length;i++ ){
// var dbc = (inpt[i]+ inpt[i]);
//  dbl = dbl + dbc
// }
// console.log(dbl)
// }
// doubleChar("Imran")
// ================q6
// function sum(num){
//     var sumOfThree = 0
//     for(var i =0 ; i < 1000; i++){
//         if ( i % num == 0){
//             sumOfThree += i; 
//         }
//     }
//     console.log(sumOfThree)
// }
// sum(5);
// =============q8
// function charCount(check, str) {
//     var count = 0;
//  for(var i = 0; i < str.length ; i++){
//     if(str[i] === check){
//         ++count
//     }
//  }
//  console.log(count)
// }
// charCount("b", "big fat bubble")
