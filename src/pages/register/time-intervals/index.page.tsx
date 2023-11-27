import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'

import {
  IntervalBox, IntervalContainer, IntervalDay, IntervalInputs, IntervalItem,
} from './styles'

import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Container, Header } from '../styles'
import { getWeekDays } from '@/src/utils/get-week-days'

const timeIntervalsFormSchema = z.object({

})

export default function TimeIntervals() {

  const { register, handleSubmit, control, watch, formState: { errors, isSubmitting }} = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ]
    }
  })

  const weekDays = getWeekDays()
  const { fields } = useFieldArray({
     name: 'intervals', control
  })

  const intervals = watch('intervals')

  async function handleSetTimeIntervals() {

  }
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de hórarios que você está disponivel em cada dia da semana.s
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
       <IntervalContainer>
          {fields.map((field, i) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller name={`intervals.${i}.enabled`} control={control} render={({field}) => {
                    return (
                      <Checkbox
                        onCheckedChange={(checked) => {
                          field.onChange(checked === true)
                        }}
                        checked={field.value}
                      />
                    )
                  }} />
  
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs>
                  <TextInput 
                    size="sm" 
                    type="time" 
                    step={60} 
                    {...register(`intervals.${i}.startTime`)} 
                    disabled={intervals[i].enabled === false}
                  />
                  <TextInput size="sm" type="time" step={60} {...register(`intervals.${i}.endTime`)} disabled={intervals[i].enabled === false} />
                </IntervalInputs>
              </IntervalItem>
            )
          })}
       </IntervalContainer>

       <Button type="submit">Proximo passo <ArrowRight/></Button>
      </IntervalBox>
    </Container>
  )
}
