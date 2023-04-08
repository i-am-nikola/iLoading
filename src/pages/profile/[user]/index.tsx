import PostItem from '@/components/client/posts/PostItem';
import ProfileLayout from '@/layout/ProfileLayout';

const Profile = () => {
    return (
        <ProfileLayout>
            <div className="grid grid-cols-1 gap-4">
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </ProfileLayout>
    );
};

export default Profile;
