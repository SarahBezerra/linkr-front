import { ChevronUpOutline, ChevronDownOutline } from 'react-ionicons'

export function ArrowUp({color, height, width, onClick}){

    return(
        <ChevronUpOutline
            color={color} 
            height={height}
            width={width}
            onClick={onClick}
        />
    )
}

export function ArrowDown({color, height, width, onClick}){

    return(
        <ChevronDownOutline
            color={color} 
            height={height}
            width={width}
            onClick={onClick}
        />
    )
}