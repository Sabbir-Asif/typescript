
// // https://jsonplaceholder.typicode.com/users

// async function fetchUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json(); // returns Promise<any> unless typed
// }

// type FetchedUsers = Awaited<ReturnType<typeof fetchUsers>>;

// const load = async () => {
//     const users: FetchedUsers = await fetchUsers();
//     console.log(users);
// };

// load().catch((error) => console.error("Error fetching users:", error));

// let newusers: FetchedUsers = [ "sabbir", "niloy" ];



// async function getUsers(): Promise<Array<unknown>> { 
//     const response = await fetch( 
//         "https://jsonplaceholder.typicode.com/users"); 
//     return response.json(); 
// } 
  
// type User = Awaited<ReturnType<typeof getUsers>>[0]; 
  
// async function getUserNames() { 
//     const users = await getUsers(); 
//     console.log(users);
//     const names: Array<string> = await Promise.all( 
//         users.map(async (user: User) => { 
//             const name = user.name; 
//             return name; 
//         }) 
//     ); 
//     console.log(names); 
// } 
  
// getUserNames();


 const enum Role {
    Admin = "admin",
    User = "User",
    Guest = "guest",
}

function getRole(obj : { Admin : string }) {
    return obj.Admin;
}

console.log(getRole({ Admin: Role.Admin })); // admin