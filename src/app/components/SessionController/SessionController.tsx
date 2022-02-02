import * as SC from './SessionController.styles'
import avatar from '../../../assets/avatar.jpg'
import Button from '../Button/Button'

export interface SessionControllerProps {
  name: string
  description: string
  onLogout?: () => any

}

function SessionController (props:SessionControllerProps) {


  return <SC.Wrapper>
    <SC.Avatar src= {avatar} />
    <SC.Name> {props.name} </SC.Name>
    <SC.Description> {props.description} </SC.Description>
    <Button 
      label= {'Logout'}
      variant = {'danger'}
      onClick= {props.onLogout}
    />
  </SC.Wrapper>
}

export default SessionController