import myaxios from "@/utils/myaxios";

export function userLogin(userName, pwd) {
  return myaxios({
    url: "userLogin.json",
    method: "GET",
    data: {
      userName: userName,
      pwd: pwd,
    },
  });
}

export function getUserInfo() {
  return myaxios({
    url: "loginRespond.json",
    method: "GET",
  });
}
