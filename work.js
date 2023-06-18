const menutoggle = document.querySelector('.menutoggle');
const navigation = document.querySelector('.navigtaion');
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',this.window.scrollY>0);
})