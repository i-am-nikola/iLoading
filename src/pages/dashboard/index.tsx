import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/dashboard/posts/published')
    }, [])
    return <></>;
}

export default Dashboard;