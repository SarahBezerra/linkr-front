import { LoadingContainer, LoadingText, InfiniteLoading } from "./style";

export default function LoadingAnimation({size}){

    return(
        <LoadingContainer>
            <InfiniteLoading size={size}/>

            <LoadingText>
                Loading more posts
            </LoadingText>

        </LoadingContainer>
    )
}