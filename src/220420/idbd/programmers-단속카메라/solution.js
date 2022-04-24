export default function solution(routes) {
  let camCount = 1;
  let camPoint = 0;
  routes.sort((a, b) => a[0] - b[0]);
  camPoint = routes[0][1];

  for (let i = 1; i < routes.length; i++) {
    if (camPoint >= routes[i][0]) {
      if (camPoint > routes[i][1]) {
        camPoint = routes[i][1];
      }
    } else {
      camPoint = routes[i][1];
      camCount++;
    }
  }

  return camCount;
}
