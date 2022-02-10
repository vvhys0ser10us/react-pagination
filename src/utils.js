const paginate = (data) => {
  const itemPerPage = 10
  const pages = Math.ceil(data.length / itemPerPage)

  const newData = Array.from({ length: pages }, (_, index) => {
    const start = index * itemPerPage
    return data.slice(start, start + itemPerPage)
  })

  return newData
}

export default paginate
