let person = {
    firstName: "Ivan",
    lastName: "Petrov",
    get fullName(){
            return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        let valuename = value.split(" ");
        this.firstName = valuename[0];
        this.lastName = valuename[1]; 
    }
}