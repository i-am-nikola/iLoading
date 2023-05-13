import { PostsTableView } from "@/components/client/posts";
import ClientDashboardLayout from "@/layout/ClientDashboardLayout";

const PublishedPosts = () => {
    return (
        <ClientDashboardLayout>
            <PostsTableView />
        </ClientDashboardLayout>
    );
}

export default PublishedPosts;