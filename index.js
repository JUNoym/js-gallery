

function clickBtn1() {
    const parent = document.getElementById('mb');
    parent.classList.remove('container3pic-1ver', 'change-position', 'container4pic', 'change-position2', 'container5pic-3side', 'change-position3')
    const img = document.querySelector('.a')
    const img2 = document.querySelector('.b')
    const img3 = document.querySelector('.c')
    const img4 = document.querySelector('.d')
    const img5 = document.querySelector('.e')
    img.setAttribute('id', 'itemA')
    img2.setAttribute('id', 'itemB')
    parent.classList.add('main-box', 'container')
    img4.remove()
    img5.remove()
    img3.remove()



}
function clickBtn2() {
    const parent = document.getElementById('mb');
    parent.classList.remove('main-box', 'container', 'container4pic', 'change-position2', 'container5pic-3side', 'change-position3')
    const img = document.querySelector('.a')
    const img2 = document.querySelector('.b')
    const img3 = document.querySelector('.c')
    const img4 = document.querySelector('.d')
    const img5 = document.querySelector('.e')
    img.setAttribute('id', 'itemE')
    img2.setAttribute('id', 'itemF')
    img3.setAttribute('id', 'itemG')
    parent.classList.add('container3pic-1ver', 'change-position')
    img4.remove()
    img5.remove()


}
function clickBtn3() {
    const parent = document.getElementById('mb');
    const img = document.querySelector('.a')
    const img2 = document.querySelector('.b')
    const img3 = document.querySelector('.c')
    const img4 = document.querySelector('.d')
    const img5 = document.querySelector('.e')
    img.setAttribute('id', 'itemo')
    img2.setAttribute('id', 'itemp')
    img3.setAttribute('id', 'itemq')
    img4.setAttribute('id', 'itemr')
    parent.classList.add('container4pic', 'change-position2')
    img5.remove()



}
function clickBtn4() {
    const parent = document.getElementById('mb');
    const img = document.querySelector('.a')
    const img2 = document.querySelector('.b')
    const img3 = document.querySelector('.c')
    const img4 = document.querySelector('.d')
    const img5 = document.querySelector('.e')
    img.setAttribute('id', 'item9')
    img2.setAttribute('id', 'item10')
    img3.setAttribute('id', 'item11')
    img4.setAttribute('id', 'item12')
    img5.setAttribute('id', 'item13')
    parent.classList.add('container5pic-3side', 'change-position3')



}