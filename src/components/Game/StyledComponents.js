import styled from 'styled-components'

export const GameContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
min-height:100vh;
background-color:#223a5f;
font-family:Roboto;
padding:24px;

`
export const PlayViewContainer = styled.div`
    display:flex;
flex-direction:column;
align-items:center;
background-color:transparent;
width:100%;

`
export const Card = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    color:#ffffff;
    justify-content:space-between;
    border-style:solid;
    border-color:#ffffff;
    border-radius:14px;
    min-width:100%;
    font-family:Bree Serif;
    padding:25px 10px 25px 10px;
    line-height:0.5;
`
export const Ul = styled.ul`
    padding:0px;
    display:flex;
    flex-direction:row;
    align-items:center;
    
`
export const Li = styled.li`
    list-style-type:none;
    font-size:20px;
`
export const ScoreCard = styled.div`
    background-color:#ffffff;
    color:#223a5f;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    width:50%;
    border-radius:10px;
`
export const RockScissorContainer = styled.div`
    display:flex;

   flex-direction:row;
   justify-content:center;
   align-items:center;
    width:50%;
    
    padding:2px;
    
    flex-wrap:wrap;

`
export const RockScissorLi = styled.li`

    list-style-type:none;
    width:30%;
    height:90px;
     
   margin:10px;
   padding:6px;
    
`
export const RSPImage = styled.img`
    height:100px;
    width:100px;
`
export const Buutton = styled.button`
    border-style:none;
    background-color:${props =>
      props.rules === 'rules' ? '#ffffff' : 'transparent'};
    color:${props => (props.rules === 'rules' ? '#223a5f' : '#ffffff')};
   border-radius:${props => props.rules === 'rules' && '4px'};
    
    
`
export const RulesContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`

export const RulesImage = styled.img`
    height:100%;
    width:100%;
    border-radius:8px;
`
export const PopupContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    padding:12px;
    height:80vh;
    width:90%;
    border-radius:8px;
`
export const PopupClose = styled.button`
    align-self:flex-end;
`
