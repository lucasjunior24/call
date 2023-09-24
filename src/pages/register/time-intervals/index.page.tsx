import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'

import {
  IntervalBox, IntervalContainer, IntervalDay, IntervalInputs, IntervalItem,
} from './styles'

import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {

  return (
    <Container>
      <Header>
        <Heading as="strong">Connecte sua agenda</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">

       <IntervalContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalItem>
       </IntervalContainer>

       <Button type="submit">Proximo passo <ArrowRight/></Button>
      </IntervalBox>
    </Container>
  )
}
