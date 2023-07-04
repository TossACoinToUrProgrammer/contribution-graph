import axios from "axios"

const url = "https://dpg.gg/test/calendar.json"

export const fetchCalendarData = async (): Promise<{ [k: string]: number } | undefined> => {
  let result
  try {
    const res = await axios.get(url)
    result = res.data
  } catch (error) {
    console.log("Something went wrong", error)
  }
  return result
}
