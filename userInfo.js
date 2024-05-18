function createUserProfiles(names, modifiedNames){
    const userProfiles = names.map((name, index) => {
        return{
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 11108321
        };
    });
    return userProfiles;
}

// Test example
const names = ["Samuel", "Anna", "Marion"];
const modifiedNames = ["SAMUEL", "ANNA", "MARION"];
console.log(createUserProfiles(names, modifiedNames));