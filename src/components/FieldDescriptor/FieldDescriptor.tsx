import * as FD from './FieldDescriptor.styles'

export interface FieldDescriptorProps {
  field: string
  value: string
}

export default function FieldDescriptor (props:FieldDescriptorProps) {
  return <FD.Wrapper>
    <FD.Field className = 'label'>{props.field}</FD.Field>
    <FD.Value className = 'description'>{props.value}</FD.Value>
  </FD.Wrapper>
}