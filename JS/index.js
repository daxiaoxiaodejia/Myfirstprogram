//topbanner部分
$('#nav_box').mouseover(function () { 
	$('#bigbox1').css('display','block') 
});
$('#nav_box').mouseout(function () { 
	$('#bigbox1').css('display','none')
}); 


$('#topbanner_left_img_2').mouseover(function () { 
	$('#topbanner_left_img_t1').css('display','block') 
});
$('#topbanner_left_img_2').mouseout(function () { 
	$('#topbanner_left_img_t1').css('display','none')
});



//导航下载鼠标移入事件

function changeClass(element, oldClass, newClass){
    var classArr = element.className.split(' ');
    var index = classArr.indexOf(oldClass);
    classArr[index] = newClass;
    element.className = classArr.join(' ');
};

var code = document.getElementById('code');
var QRcode = document.getElementById('QRcode');
code.onmouseover = function(){
    changeClass(QRcode, 'hide', 'show');
};
code.onmouseout = function(){
    changeClass(QRcode, 'show', 'hide');
};


//固定定位鼠标移入事件
var fd = document.getElementById('fixed_download');
var FQ = document.getElementById('fixed_QRcode');
fd.onmouseover = function(){
    changeClass(FQ, 'hide', 'show');
};
fd.onmouseout = function(){
    changeClass(FQ, 'show', 'hide');
};


//固定导航结构
$(window).scroll(function(){
    if($(this).scrollTop()>$('#gamelist').height()) {
        $('#tnav').addClass('fixed1')
        $('#main_banner').css('marginTop', $('#tnav').height());
    } else {
        $('#tnav').removeClass('fixed1')
        $('#main_banner').css('marginTop', 0);
    }
});

$(window).scroll(function(){
    if($(this).scrollTop()>($('#gamelist').height()+$('tnav').height() + $('#main_banner').height() + $('#title_pic').height())){
        $('#title_text').addClass('fixed2');
        
    } else {
        $('#title_text').removeClass('fixed2');
    }
});


$(window).scroll(function(){
    if($(this).scrollTop()>500){   
        $('#right_btn').css('display','block').addClass('a-fadeinT');
    } else {
        $('#right_btn').css('display','none');
    };
});

//推荐图片的动效
$('.sm_pic').mouseover(function(){
    $(this).addClass('a-fadein');

})
$('.sm_pic').mouseout(function(){
    $(this).removeClass('a-fadein');

});

//下方图片动画

$('.item').mouseover(function(){
    $(this).addClass('a-flash');

})
$('.item').mouseout(function(){
    $(this).removeClass('a-flash');

});


//轮播图
var slider = document.getElementById('slider');
var ul = slider.children[0];
var lisUl = ul.children;
var ol = slider.children[1];
var lisOl = ol.children;


for(var i = 0; i < lisUl.length; i++){
    var li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = i+1;
};
lisOl[0].className = 'current';
var index = 0;
var count = 0;
for(i = 0; i < lisOl.length; i++){
    lisOl[i].index = i;
    lisOl[i].onclick = function(){
        if(count===lisUl.length-1){
            lisOl[0].className = '';
            ul.style.top = 0 + 'px';
        } else{
            lisOl[index].className = '';
        }
        this.className = 'current';
        index = this.index;
        var target = -this.index * 450;
        console.log(this.index)
        move(ul, target);         
    };
};
