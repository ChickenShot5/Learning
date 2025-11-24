let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted!";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted!";
} else {
    accessLevel = "No access granted!";
}

console.log("Access level: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in in order to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status: ", authenticationStatus);

let orgRole = "Employee";
let orgAccess;

switch (orgRole) {
    case "Employee":
        orgAccess = "Dietary Services";
        break;
    case "Enrolled Member":
        orgAccess = "Dietary Services and dietician interaction";
        break;
    case "Subscriber":
        orgAccess = "Partial Dietary Services";
        break;
    default:
        orgAccess = "Please enroll first to avail this facility.";
    }

    console.log("Organisation access: ", orgAccess);