export function addMoreThanOneHandlerIfExis(cb1, cb2) {
  return () => {
    cb1 && cb1()
    cb2 && cb2()
  }
}

function* genId() {
  let id = 0
  while(true) {
    yield `generated_counter_id_${++id}`
  }
}

export const getId = genId()