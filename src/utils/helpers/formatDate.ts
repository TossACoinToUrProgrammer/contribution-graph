import { format } from "date-fns"
import { ru } from "date-fns/locale"

export const formatDate = (date: Date) => {
  return format(date, "EEEE, MMMM dd, yyyy", { locale: ru })
}
