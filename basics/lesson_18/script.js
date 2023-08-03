let user = null;

alert(user?.address); //undefind

let userAdmin = {
    admin() {
        alert("Im admin!");
    }
};
let userGuest = {}

userAdmin.admin?.();
userGuest.admin?.();
