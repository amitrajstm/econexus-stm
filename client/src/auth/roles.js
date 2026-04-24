export function getUserRole(user) {
  if (!user) return null;
  return user.role === "admin" ? "admin" : "user";
}

export function isAdmin(user) {
  return getUserRole(user) === "admin";
}

export function isUser(user) {
  return getUserRole(user) === "user";
}
