
import { SeriesItem } from "@/components/client/series";
import ProfileLayout from "@/layout/ProfileLayout";

const SeriesList = () => {
    return (
        <ProfileLayout>
            <div className="grid gap-4">

            <SeriesItem />
            <SeriesItem />
            <SeriesItem />
            </div>

        </ProfileLayout>
    );
}

export default SeriesList;