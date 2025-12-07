let i = 0;
setTimeout(() => {
  console.log(++i);
}, 1000);
setTimeout(() => {
  console.log(++i);
}, 1000);
//进行过程是：主线程-》任务队列中的第一个settimeout-》再走主线程-》没有任务-》任务队列
//任务是一个一个执行的
