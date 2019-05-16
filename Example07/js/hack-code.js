let codesContainer = document.getElementById('container');
let codes = document.getElementById('codes');

let elementsFragment = document.createDocumentFragment();
//代码下落分为 前、中、后 三层效果
//前
for (let i = 0; i < 10; i++) {
    let codesClone = codes.cloneNode(true);
    codes.classList.add('codes', 'codes-front');
    codes.style.left = Math.random() * 100 + '%';
    codes.style.top = Math.random() * -70 + 'px';
    codes.style.animationDelay = Math.random() * 4 + 's';
    elementsFragment.appendChild(codesClone);
}

//中
for (let j = 0; j < 10; j++) {
    let codesClone = codes.cloneNode(true);
    codes.classList.add('codes', 'codes-middle');
    codes.style.left = Math.random() * 100 + '%';
    codes.style.top = Math.random() * -70 + 'px';
    codes.style.animationDelay = Math.random() * 4 + 's';
    elementsFragment.appendChild(codesClone);
}

//后
for (let k = 0; k < 10; k++) {
    let codesClone = codes.cloneNode(true);
    codes.classList.add('codes', 'codes-behind');
    codes.style.left = Math.random() * 100 + '%';
    codes.style.top = Math.random() * -70 + 'px';
    codes.style.animationDelay = Math.random() * 4 + 's';
    elementsFragment.appendChild(codesClone);
}
codesContainer.appendChild(elementsFragment);