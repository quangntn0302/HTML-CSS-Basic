console.log("hello");
var x = document.querySelector('.n');
x.addEventListener('click', function(){
    console.log("Ban vua click vao toi");
    document.querySelector('.anh').classList.toggle('sangphai');

})
var y = document.querySelector('.n2');
y.addEventListener('click', function(){
    console.log('h3');
})