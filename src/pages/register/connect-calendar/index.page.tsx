import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import {
  // Form,
  // FormError,
  ConnectBox,
  ConnectItem,
} from './styles'

// import { AxiosError } from 'axios'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {
  //   try {
  //     await api.post('/users', {
  //       name: data.name,
  //       username: data.username,
  //     })
  //   } catch (err) {
  //     if (err instanceof AxiosError && err.response?.data?.message) {
  //       alert(err.response.data.message)
  //       return
  //     }
  //     console.log(err)
  //   }
  // }
  return (
    <Container>
      <Header>
        <Heading as="strong">Connecte sua agenda</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google calendar</Text>
          <Button variant="secondary" size="sm">
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Proximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
