const buildTower = (num) => {
  let tower = [];
  let starString = "*";
  for (let i = 0; i < num; i++) {
    tower.push(starString);
    starString += "**";

    for (let j = 0; j < i; j++) {
      tower[j] = ` ${tower[j]} `;
    }
  }
  console.log(tower);
};
buildTower(3);
