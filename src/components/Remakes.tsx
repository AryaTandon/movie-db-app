import { JsxElement } from "typescript";

interface IMovie {
    name: string,
    date: string | null
    abstract: string | null,
    youtube_trailer: string | null,
    wikipedia_link: string | null,
    remake_name: string,
    remake_date: string | null
    remake_abstract: string | null,
    remake_youtube_trailer: string | null,
    remake_wikipedia_link: string | null,
}

const Remakes = ({data}: {data: IMovie}) => {
    return (
        <div className="Movies-card">
            <br />
            Remake: <br />
            {data.name} <br />
            {data.date} <br />
            {data.abstract} <br />
            {data.wikipedia_link !== null ?
            <><a href={`https://en.wikipedia.org/wiki/${data.wikipedia_link}`}>Wikipedia Link</a> <br /></>
            : <></>}
            {data.youtube_trailer !== null ?
            <><iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${data.youtube_trailer}`}>
            </iframe> <br /> </>
            : <></>}
            <br />
            Original: <br />
            {data.remake_name} <br />
            {data.remake_date} <br />
            {data.remake_abstract} <br />
            {data.remake_wikipedia_link !== null ?
            <><a href={`https://en.wikipedia.org/wiki/${data.remake_wikipedia_link}`}>Wikipedia Link</a> <br /></>
            : <></>}
            {data.remake_youtube_trailer !== null ?
            <><iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${data.remake_youtube_trailer}`}>
            </iframe> <br /> </>
            : <></>}
            <br />
        </div>
    )
}

export default Remakes;