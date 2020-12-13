//The bad way
/*
const list_a = [1, 2,3 ,4 ,7 ,10 ,11];
const list_b = [4,10,1,77];

const theIntersResult = [];
const notTheSameEl = [];

function calcIntersec(theFirstList, theSecondList){
  for(let i=0; i<theFirstList.length; i++){
    for(let j=0; j<theSecondList.length ;j++){
      if(theFirstList[i] == theSecondList[j]){
        theIntersResult.push(theFirstList[i]);
      }else{
        notTheSameEl.push(theFirstList[i])
      }
    }
  }
  return theIntersResult;
}

document.getElementById("app").innerHTML = "The intersection is: " + calcIntersec(list_a, list_b); 
*/

//The good way
const list_a = [1, 20, 2,3 ,4 ,7 ,10 ,11];
const list_b = [4,10,1,77, 20];

const numericSort = (a,b) =>{
  return a<b ? -1 : 1;
};
const calcIntersec = (theFirstList, theSecondList) =>{
  
  const result = [];
  
  const theFirstListSorted = [...theFirstList].sort(numericSort);
  const theSecondListSorted = [...theSecondList].sort(numericSort);
  
  let theFirstIterator = 0;
  let theSecondIterator = 0;
  
  while(theFirstIterator<theFirstListSorted.length && theSecondIterator<theSecondListSorted.length){
    if(theFirstListSorted[theFirstIterator] === theSecondListSorted[theSecondIterator]){
      result.push(theFirstListSorted[theFirstIterator]);
      theFirstIterator++;
      theSecondIterator++;
    }else {
      if(theFirstListSorted[theFirstIterator] < theSecondListSorted[theSecondIterator]){
        theFirstIterator++;
      } else{
        theSecondIterator++;
      }
    }
}
  return result;
}
document.getElementById("app").innerHTML = "The intersection is: " + calcIntersec(list_a, list_b); 
