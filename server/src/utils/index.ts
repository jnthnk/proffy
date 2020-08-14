//
const timeInMinutes = (time: string) => {
  const [hour, minutes] = time.split(':').map(Number)
  const total = hour * 60 + minutes
  return total
}

// Export utils
export { timeInMinutes }
