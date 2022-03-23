const user3={ 
    id :1,
    username :'luke123',
    dateOfBirth : '1990-02-20',
}

const user4 ={ 
    id :2,
    username :'sibin123',
    dateOfBirth : '1992-09-02',
}

const currentYear = new Date().getFullYear();
const user3Year = new Date(user3.dateOfBirth).getFullYear();
const user4Year = new Date(user4.dateOfBirth).getFullYear();

// const calculateAge = (yToday, yOfBirth) => {
//     return yToday - yOfBirth;
// }
console.log('APPLY');
console.log("Normal",calculateAge(currentYear, user4Year));
console.log("APPLY",calculateAge.apply(user4,[currentYear, user4Year]));
