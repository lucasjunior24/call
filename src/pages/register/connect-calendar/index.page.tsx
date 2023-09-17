import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'

import { signIn, useSession } from 'next-auth/react'
import {
  AuthError,
  // Form,
  // FormError,
  ConnectBox,
  ConnectItem,
} from './styles'

// import { AxiosError } from 'axios'
import { ArrowRight, Check } from 'phosphor-react'
import { Container, Header } from '../styles'
import { useRouter } from 'next/router'

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

  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }
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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}
        <Button type="submit" disabled={!isSignedIn}>
          Proximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
