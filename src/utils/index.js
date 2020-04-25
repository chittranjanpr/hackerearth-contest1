export function sortArray(data, name) {
  function compare(a, b) {
    if (name == "up") {
      if (a.score > b.score) return 1;
      if (b.score > a.score) return -1;
    }
    if (name == "down") {
      if (a.score < b.score) return 1;
      if (b.score < a.score) return -1;
    }
    return 0;
  }
  return data.sort(compare);
}

export async function filterArray(data, name) {
  let result = await data.filter((data) => data.platform === name);

  return result;
}
