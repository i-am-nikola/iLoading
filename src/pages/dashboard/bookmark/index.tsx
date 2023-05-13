import { useRouter } from "next/router";
import { useEffect } from "react";

const Bookmark = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/dashboard/bookmark/posts')
    }, [])
    return <></>
}

export default Bookmark;