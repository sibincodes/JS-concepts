const user1 ={ 
    id :1,
    username :'luke123',
    dateOfBirth : '1990-02-20',
}

const user2 ={ 
    id :2,
    username :'sibin123',
    dateOfBirth : '1992-09-02',
}

const yearToday = new Date().getFullYear();
const user1Year = new Date(user1.dateOfBirth).getFullYear();
const user2Year = new Date(user2.dateOfBirth).getFullYear();

const calculateAge = (yToday, yOfBirth) => {
    return yToday - yOfBirth;
}
console.log('CALL');
console.log("Normal",calculateAge(yearToday, user1Year));
console.log(calculateAge.call(user1, yearToday, user1Year));
