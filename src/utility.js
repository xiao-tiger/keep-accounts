export const LIST_VIEW = 'list';
export const CHART_VIEW = 'chart';


export function padLeft(num) {
  return +num < 10 ? '0' + num : num
}


export function range(size, startAt) {
  let arr = []
  for (let i = 0; i < size; i++) {
    arr[i] = startAt + i
  }
  return arr
}

