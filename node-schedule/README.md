# node-schedule

> node-schedule 定时任务

GitHub地址：https://github.com/node-schedule/node-schedule

Node Schedule是Node.js的一个灵活的类似cron的任务调度程序。它允许您调度任务(任意函数)在特定日期执行，使用可选的递归规则。它只在任何给定时间使用一个计时器(而不是每秒钟/分钟重新评估即将进行的任务)。

支持版本：Node6.0+

### 概述

Node Schedule 支持某个时刻（time）的执行，而非某个时间段（interval）的执行。如果你想每五分钟执行一次，那么应该使用[toad-scheduler](https://github.com/kibertoad/toad-scheduler)。注意，Node Schedule是为进程内调度而设计的，也就是说，被调度的任务只会在脚本运行时触发，当执行完成时，调度就会消失。如果您需要调度即使在脚本未运行时也会持续存在的作业，请考虑使用实际的cron。如果您需要跨重启和与多节点部署兼容的锁定系统的持久作业，请尝试[agenda](https://github.com/agenda/agenda) 或 [bree](https://github.com/breejs/bree)。

### 使用

安装：

```sh
npm install node-schedule
```

Node Schedule中的每个计划任务都由一个Job对象表示，可以手动的创建多个Job，然后执行`schedule()`方法。

The cron format consists of: 

```sh
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

```

**注意：如果只有五个位置，那么保留后五位置，比如：——没有设置，该位置不生效**

```sh
const schedule = require('node-schedule');

const job = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});

```

Execute a cron job when the minute is 42 (e.g. 19:42, 20:42, etc.).

而如果是：`* 10 * * * *`，每到10分时，每秒执行一次，执行60次，比如：05:10:00——05:10:59

**明白了：设置`*`，就取默认值，比如秒设置`*`，就取 [0, 59]；分钟设置`*`，就取[0, 59]分；小时设置`*`，就取[0, 23]小时。**



下面的：周日周四到周六的17:00执行

```sh
const job = schedule.scheduleJob('0 17 ? * 0,4-6', function(){
  console.log('Today is recognized by Rebecca Black!');
});

```

下面的：分钟是5的倍数时执行

```sh
 */5 * * * *
```

