// 'use strict';

// this refers to the global object (window or global)
function invoke() {
  console.log(this);
}

invoke(); // using strict prints undefined