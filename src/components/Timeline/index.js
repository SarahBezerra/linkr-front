import { LoadingContainer, LoadingText, InfiniteLoading } from "./style";

export default function LoadingAnimation({size, display}){

    return(
        <LoadingContainer display={display}>
            <InfiniteLoading size={size}/>

            <LoadingText>
                Loading more posts
            </LoadingText>

        </LoadingContainer>
    )
}