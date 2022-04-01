
import { SpinnerCircularFixed } from "spinners-react"
import styled from 'styled-components'

export function InfiniteLoading({size}){
    return(
        <SpinnerCircularFixed size={size} 
            thickness={100} 
            speed={100} 
            color="rgba(109, 109, 109, 1)" 
            secondaryColor="rgba(0, 0, 0, 0.44)" 
        />
    )
}

const LoadingContainer = styled.div`

display: ${props => props.display};
flex-direction: column;
align-items: center;

gap: 10px;

`
const LoadingText = styled.span`

color: #6D6D6D;
font-size: 22px;

`
export {LoadingContainer, LoadingText}