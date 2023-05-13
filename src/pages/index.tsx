import PostItemTrending from '@/components/client/posts/PostItemTrending';
import ClientLayout from '@/layout/ClientLayout';
import PostCard from '@/components/client/posts/PostCard';
import CrayonsLayout from '@/layout/CrayonsLayout';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const topics = [
    {
        name: 'All',
    },
    {
        name: 'Following',
    },
    {
        name: 'Docker',
    },
    {
        name: 'Javascript',
    },
    {
        name: 'ReactJs',
    },
    {
        name: 'PHP',
    },
    {
        name: 'AI',
    },
    {
        name: 'Blockchain',
    },
    {
        name: 'Web3',
    },
    {
        name: 'Angular',
    },
    {
        name: 'Redis',
    },
    {
        name: 'AWS',
    },
    {
        name: 'AWS',
    },
    {
        name: 'Web3',
    },
    {
        name: 'Angular',
    },
    {
        name: 'Redis',
    },
    {
        name: 'AWS',
    },
    {
        name: 'AWS',
    }
]

export default function Home() {

    /**
     * Scroll document
     */
    useEffect(() => {
        const handleScroll = () => {
            const headerElement: HTMLElement = document.querySelector('.js-header')!;
            const headerRect: DOMRect = headerElement?.getBoundingClientRect();
            const contentElement: HTMLElement = document.querySelector('#content')!
            const commentBoxRect: DOMRect = contentElement?.getBoundingClientRect();
            const topicsHeaderElement: HTMLElement = document.querySelector('#topics-header')!
            if (commentBoxRect.top - topicsHeaderElement.offsetHeight < headerRect.bottom) {
                topicsHeaderElement.classList.add('bg-white');
            } else {
                topicsHeaderElement.classList.remove('bg-white');
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    // TODO
    useEffect(() => {
        // Get references to the topics container and left/right buttons
        var topicsContainer = document.getElementById("topics-container")!;
        var topicsToLeft = document.getElementById("topics-to-left")!;
        var topicsToRight = document.getElementById("topics-to-right")!;

        // Add event listeners to the left and right buttons
        topicsToLeft.addEventListener("click", scrollTopicsToLeft);
        topicsToRight.addEventListener("click", scrollTopicsToRight);

        function scrollTopicsToLeft() {
            // Calculate the new scroll position by subtracting the container width
            var newPosition = topicsContainer.scrollLeft - 100;
            // Scroll to the new position
            topicsContainer.scrollTo({ left: newPosition, behavior: "smooth" });
        }

        function scrollTopicsToRight() {
            // Calculate the new scroll position by adding the container width
            var newPosition = topicsContainer.scrollLeft + 100;
            // Scroll to the new position
            topicsContainer.scrollTo({ left: newPosition, behavior: "smooth" });
        }
    }, [])

    return (
        <>
            <ClientLayout>
                <section>
                    <div className="bg-cover bg-center h-60 sm:h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
                        <div className="container mx-auto items-center">
                            <div className="text-white font-bold text-xl text-center">Welcome to my website</div>
                        </div>
                    </div>
                </section>
                <section className="px-4 py-6 border-b">
                    <div className="container mx-auto max-w-screen-xl">
                        <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                            <PostItemTrending />
                        </div>
                    </div>
                </section>
                <CrayonsLayout>
                    <header className="sticky top-16 mb-5 z-10 border-b" id="topics-header">
                        <div className="overflow-hidden h-10 leading-5">
                            <div className="flex items-center h-10 leading-5">
                                <button className="py-5" id="topics-to-left">
                                    <FontAwesomeIcon icon={faChevronLeft} size="sm" className="h-5 w-5 text-slate-500" />
                                </button>
                                <div className="overflow-x-auto scroll-mx-1 py-5 mx-4 scroll-smooth" id="topics-container">
                                    {
                                        topics.map((topic, index) => {
                                            return (
                                                <Link key={index} href="#" className="p-2 js-topic-item text-slate-500 hover:text-slate-700">{topic.name}</Link>
                                            )
                                        })
                                    }
                                </div>
                                <button className="py-5" id="topics-to-right">
                                    <FontAwesomeIcon icon={faChevronRight} size="sm" className="h-5 w-5 text-slate-500" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <section className="grid grid-cols-1 gap-5" id="content">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </section>
                </CrayonsLayout>
            </ClientLayout>
        </>
    )
}
