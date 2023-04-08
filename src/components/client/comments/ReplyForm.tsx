const ReplyForm = () => {
    return (
        <div>
            <form action="">
                <div className="flex justify-center">
                    <div className="relative border w-full" >
                        <textarea className="text-gray-700 block min-h-[auto] w-full rounded bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all" rows={3} placeholder="Your message" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReplyForm;