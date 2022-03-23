import HeaderImage from './HeaderImage';
import { ArrowDown, ArrowUp } from './Arrows/Arrows';
import { useEffect, useRef } from 'react'
import DropDownMenu from './DropDownMenu/DropDownMenu'

let useClickOutside = (handler) => {
    let menuRef = useRef();
    console.log(menuRef.current);
    

    useEffect(() => {

        let maybeHandler = (event) => {
            console.log(event.target);
            if(!menuRef.current.contains(event.target)){
                if(event.target.innerText !== 'Logout'){
                    handler()
                }
            }
        }

        document.addEventListener('mousedown', maybeHandler)

        return () => {
            document.removeEventListener('mousedown', maybeHandler)
        }
    })

    return menuRef
}

function HeaderMenu({menuSelect, setMenuSelect}){
    
    let menuRef = useClickOutside(() => {
        setMenuSelect(false);
    })

    return(
            <div ref={menuRef} style={{position:'relative', backgroundColor:'#151515'}} >
                {menuSelect === false ?
                        <ArrowDown color={'#FFF'} onClick={() => {setMenuSelect(true)}}/>
                    :
                        <ArrowUp color={'#FFF'} onClick={() => {setMenuSelect(false)}}/>
                }
            
                <HeaderImage height={'50px'} onClick={() => { menuSelect === false ? setMenuSelect(true) : setMenuSelect(false)}}/>
                

            </div>
            
    )
}





export default HeaderMenu