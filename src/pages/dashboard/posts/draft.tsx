import { PostsTableView} from "@/components/client/posts";
import ClientDashboardLayout from "@/layout/ClientDashboardLayout";


const DraftPosts = () => {
    return (
        <ClientDashboardLayout>
            <PostsTableView />
        </ClientDashboardLayout>
    );
}

export default DraftPosts;