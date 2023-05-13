import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type PriorityTopicsPropsType = {
    topics: Array<{
        name: string,
        url: string
    }>,
    title?: string
}
const PriorityTopics = (props: PriorityTopicsPropsType) => {
    const { topics = [], title } = props;
    return (
        <>
            <header className='flex items-center justify-between'>
                <h2 className="text-slate-600 font-bold p-2">{title}</h2>
                <Link href="/dashboard/topics" className="block p-2 text-blue-500 rounded-lg hover:text-blue-600 hover:underline hover:bg-white">
                    <FontAwesomeIcon icon={faTag} size="sm" className="w-5 h-5" />
                </Link>
            </header>
            <div className="h-60 overflow-y-auto scroll-my-1">
                {
                    topics.map((topic, index) => {
                        return (
                            <Link key={index} href={topic.url} className="flex items-center text-slate-600 p-2 mt-2 rounded-md hover:bg-white">
                                <FontAwesomeIcon icon={faTag} size="sm" className="w-4 h-4 mr-2" />
                                {topic.name}
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default PriorityTopics;