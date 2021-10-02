const appointment = {

}

function makeAppointment(perference1, perference2, index) {
  const patientPerference = [perference1[index], perference2[index]]
  for (let perference of patientPerference) {
    if (!appointment[perference]) {
      appointment[perference] = true;
      if (index + 1 < perference1.length) {
        if (makeAppointment(perference1, perference2, index + 1)) {
          return true
        }
        else {
          appointment[perference] = false;
        }
      }
      else {
        return true
      }
    }
  }

  return false;
}

function solution(perference1, perference2, slotNumber) {
  for (let i = 1; i <= slotNumber; ++i) {
    appointment[i] = false
  }

  return makeAppointment(perference1, perference2, 0);
}

console.log(solution([1, 1, 3], [2, 2, 1], 3))
console.log(solution([3, 2, 3, 1], [1, 3, 1, 2], 3))
console.log(solution([2, 5, 6, 5], [5, 4, 2, 2], 8))
console.log(solution([1, 2, 1, 6, 8, 7, 8], [2, 3, 4, 7, 7, 8, 7], 10))