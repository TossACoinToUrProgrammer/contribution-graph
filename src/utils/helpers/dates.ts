import { isSunday, nextSunday, subDays } from "date-fns"
import { CELLS_NUMBER } from "../../const"

export const getFirstDate = () => {
  //first date in the graph
  const currentDate = new Date()
  const lastDate = isSunday(currentDate) ? currentDate : nextSunday(currentDate)
  return subDays(lastDate, CELLS_NUMBER - 1)
}
