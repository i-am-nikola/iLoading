import UserItem from "@/components/users/UserItem";
import ProfileLayout from "@/layout/ProfileLayout";

const Followers = () => {
    return (
        <ProfileLayout>
            <div className="grid grid-cols-10 gap-4">
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />
                <UserItem />


            </div>
        </ProfileLayout>
    );
}

export default Followers;