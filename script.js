const lordy = {
  serialNo: 1,
  chipVersion: 12,
};
const charlie = {
  serialNo: 2,
  chipVersion: 12,
};

const compareRobots = (robot1, robot2) => {
  if (Object.entries(robot1).length !== Object.entries(robot2).length) {
    return false;
  }

  for (const key in robot1) {
    if (key === 'serialNo') {
      continue;
    }

    if (robot1[key] !== robot2[key]) {
      return false;
    }
  }

  return true;
};

console.log(compareRobots(lordy, charlie));

function getLeaders(numbers) {
  const leaders = [];
  let sum = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sum) {
      leaders.unshift(numbers[i]);
    }
    sum += numbers[i];
  }

  return leaders;
}

console.log(getLeaders([16, 17, 4, 3, 5, 2]));


function getProductId(url) {
  const parts = url.split('-p-');
  const id = parts[parts.length - 1].split('-')[0];
  return id;
}

console.log(
  getProductId(
    'http://www.exampleshop.com/letter-p-book-stand-p-192837-11112011.html'
  )
);


function getRowWeights(people) {
  const result = [0, 0];
  for (let i = 0; i < people.length; i++) {
    result[i % 2] += people[i];
  }

  return result;
}


