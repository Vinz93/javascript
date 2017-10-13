import co from "co";
import * as moveService from "./moveService";


co(function* (){
  let time = 0;

  time += yield moveService.task1();
  time += yield moveService.task2();
  time += yield moveService.task3();
  time += yield moveService.task4();
  time += yield moveService.task5();

  return time;
}).then( (time) => console.log( `Ran 5 tasks and took ${time} segs.` ) );
