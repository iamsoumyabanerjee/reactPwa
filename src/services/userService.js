import Axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

const userService = () =>  Axios.get(url)

export default userService

