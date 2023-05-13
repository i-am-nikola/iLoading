import TopicItem from "@/components/client/topics/TopicItem";
import ClientLayout from "@/layout/ClientLayout";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Topics = () => {
    return (
        <ClientLayout>
            <section className="px-4 py-6">
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="py-10 border-b">
                            <div className="border flex w-96 m-auto bg-white rounded-full overflow-hidden">
                                <button className="flex items-center whitespace-nowrap px-3 py-1.5 text-center rounded-full">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="h-5 w-5 text-slate-500" />
                                </button>
                                <input type="text" className="text-slate-700 block flex-auto py-4 pl-1 pr-2.5 focus:outline-none w-10 rounded-full" placeholder="Tìm kiếm chủ đề" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 py-10">
                            <TopicItem />
                            <TopicItem />
                            <TopicItem />
                            <TopicItem />
                            <TopicItem />
                            <TopicItem />
                        </div>

                    </div>
                </section>
        </ClientLayout>
    );
}

export default Topics;