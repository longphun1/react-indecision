var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function GetPetName() {
    var petName = 'Hal';
    return petName;
}

const petname = GetPetName;
GetPetName();
console.log(petname);

var fullname = 'Jen Mead';

if(fullname) {
    const firstname = fullname.split(' ')[0];
    console.log(firstname);
}