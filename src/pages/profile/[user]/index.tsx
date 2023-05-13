import PostCard from '@/components/client/posts/PostCard';
import ProfileLayout from '@/layout/ProfileLayout';

const Profile = () => {
    return (
        <ProfileLayout>
            <div className="grid grid-cols-1 gap-4">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </ProfileLayout>
    );
};

export default Profile;
