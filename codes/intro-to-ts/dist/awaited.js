"use strict";
// // https://jsonplaceholder.typicode.com/users
function getRole(obj) {
    return obj.Admin;
}
console.log(getRole({ Admin: "admin" /* Role.Admin */ })); // admin
