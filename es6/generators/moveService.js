let _moveService = function(){
  return function(){
    let timeSpend = (Math.random() * 5) + 1
    return new Promise( function( resolve, reject ){
      setTimeout( resolve.bind( resolve, timeSpend ), timeSpend)
    } );
  }
}

export const task1 = _moveService();
export const task2 = _moveService();
export const task3 = _moveService();
export const task4 = _moveService();
export const task5 = _moveService();
