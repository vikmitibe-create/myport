const headCase = document.getElementById('headCase');
const about = document.getElementById('about');

const family = document.getElementById('family');

function showAbout(){
    hobbies.style.display='none';
    friends.style.display='none'
    family.style.display='none'
    headCase.style.display='none';
    about.style.display='block';
}

function leaveAll(){
    hobbies.style.display='none';
    friends.style.display='none';
    family.style.display='none';
    about.style.display='none';
    headCase.style.display='block'
}

function showFamily(){
    hobbies.style.display='none';
    friends.style.display='none';
    headCase.style.display='none';
    about.style.display='none';
    family.style.display='block';
}

const mothw = document.getElementById('mothw');
const mothtxt = document.getElementById('mothtxt');

mothw.addEventListener('mouseover', () => {
    mothtxt.style.display='block'
});

mothw.addEventListener('mouseout', () => {
    mothtxt.style.display='none'
});


const fathtxt = document.getElementById('fathtxt');
const fathw = document.getElementById('fathw');

fathw.addEventListener('mouseover', () => {
    fathtxt.style.display='block';
});

fathw.addEventListener('mouseout', () => {
    fathtxt.style.display='none';
});


const nikw = document.getElementById('nikw');
const niktxt = document.getElementById('niktxt');

nikw.addEventListener('mouseover', () => {
    niktxt.style.display='block';
});

nikw.addEventListener('mouseout', () => {
    niktxt.style.display='none'
});

const friends = document.getElementById('friends');

function showFriends(){
    hobbies.style.display='none';
    headCase.style.display='none';
    about.style.display='none';
    family.style.display='none';
    friends.style.display='block';
}

const hobbies = document.getElementById('hobbies');

function showHobbies(){
    headCase.style.display='none';
    about.style.display='none';
    family.style.display='none';
    friends.style.display='none';
    hobbies.style.display='block';
}