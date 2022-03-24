import { useParams } from 'react-router-dom';


export default function Hashtag() {

    const { hashtag } = useParams();
    return (
        <div> {hashtag} </div>
    );
}