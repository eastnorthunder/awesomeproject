function carousel(){
    var div1 = document.getElementById('div1');
    var ul = document.getElementsByTagName('ul')[0];//因为标签不唯一，[0]表示获取第一个Ul的信息
    var Li = ul.getElementsByTagName('li');
    ul.innerHTML += ul.innerHTML;//看下方ul.style.left，如果只有一倍的innerHTML初始left将使ul的后面一半露在左边，另一半是白板
    ul.style.width = Li[0].offsetWidth*Li.length+'px';//length代表对应元素的数目
    var speed = 2;
    function move(){
        if (ul.offsetLeft<-ul.offsetWidth/speed) {//这里ul.style.width和ul.offsetWidth的区别是一个是px一个是数值
            ul.style.left = '0';
        }
        else if (ul.offsetLeft>0){
            ul.style.left = -ul.offsetWidth/speed+'px';
        }
        ul.style.left = ul.offsetLeft+speed+'px';//类似x+=spped，不过由于px的性质，就这样写了
    }
    console.log(ul.style.left);
    console.log(ul.offsetLeft);
    var timer = setInterval(move,30)//30毫秒
    div1.onmouseover=function(){
        clearInterval(timer);
    }	
    div1.onmouseout=function(){
        timer = setInterval(move,30);//周期调用Move函数
    }
}

function jojo1(){
    window.open('./jo1.html');
}

function jojo2(){
    window.open('./jo2.html');
}

function jojo3(){
    window.open('./jo3.html');
}

function jojo4(){
    window.open('./jo4.html');
}
