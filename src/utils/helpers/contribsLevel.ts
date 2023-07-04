export const contribsLevel = (contribs: number) => {
  if(contribs >= 1 && contribs < 10) return 2
  if(contribs >= 10 && contribs < 20) return 3
  if(contribs >= 20 && contribs < 30) return 4
  if(contribs >= 30) return 5
  return 1
}
