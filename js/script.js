var Relt                ={
    nickname            :'Relt.exe',
    age                 :14,
    firstName           :'Dima',
    email               :'example@exmp.le',
    pass                :'********'
};
var X4ris               ={
    nickname            :'X4ris',
    age                 :14,
    firstName           :'Andrey',

};

alert ('Привет, User');
var nickSet             = prompt('Какой твой ник?');
var searchUser          = prompt('Кого ищете?');
var searchTypeUser      = prompt('Что вы хотите узнать?');


alert('Привет, ' + nickSet);


var searchingUser   = function searchUser(searchUser) {
    var trueFalse = confirm('Вы искали ' + searchUser + '?');
    if (trueFalse == true) {
        alert(Relt.nickname);
        alert(searchingUser.nickname);
        alert(searchUser.age);
    } else {
        var retrySearch = prompt ('Повторите поиск');
    }
}





