import * as moveService from "./moveService.js"

let totalTimeSpend = 0;
moveService.task1()
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.task2()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.task3()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.task4()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    return moveService.task5()
  } )
  .then( (time) => {
    totalTimeSpend += time;
    console.log( `ran 5 tasks and took  ${totalTimeSpend} seg.` );
  } )
