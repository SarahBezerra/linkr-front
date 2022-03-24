import Container from "./Container";
import Content from "./Content";



export default function PageLayout({children}){


    return(

        <Content>
            {children}
        </Content>

    )
}