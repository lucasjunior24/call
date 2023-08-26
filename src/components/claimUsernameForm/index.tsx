import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ClaimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClainUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }
  return (
    <Form as="form" onSubmit={handleSubmit(handleClainUsername)}>
      <TextInput
        size="sm"
        prefix="call.com/"
        placeholder="seu-usuario"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight size={24} />
      </Button>
    </Form>
  )
}
