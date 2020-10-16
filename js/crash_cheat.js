///崩溃欺骗
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        //  $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '|ω･`) 暗中观察 ~ ~ ';
         clearTimeout(titleTime);
     }
     else {
        //  $('[rel="icon"]').attr('href', "/favicon.png");
         document.title = ' ◕ ں ◕ 来了老弟 ~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });