import axios from 'axios'

// Interfaces.
import { IUser } from '@hubee/core'

interface IFetchRegisterProps {
  newUser: IUser
}

interface IFetchRegisterResponse {
  statusCode: number
  message: string
}

export async function fetchRegisterHubee(
  props: IFetchRegisterProps,
): Promise<IFetchRegisterResponse> {
  let statusCode = 0
  const url = ''

  try {
    const { username, nickname, email, password, birthday } = props.newUser

    const response = await axios.post(url, {
      username,
      nickname,
      email,
      password,
      birthday,
    })

    if (response.status === 409) {
      throw new Error('user already exists.')
    } else if (response.status === 505) {
      throw new Error('internal server error')
    } else if (response.status !== 201) {
      throw new Error('lacks options or some error ocurred with function.')
    }

    statusCode = response.status

    return {
      statusCode,
      message: 'sucessfully created.',
    }
  } catch (err) {
    return {
      statusCode,
      message: (err as Error).message,
    }
  }
}
