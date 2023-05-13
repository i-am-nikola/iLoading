import { StatsItem } from "@/components/client/posts";
import { Tooltip } from "@/components/ui";
import { faEdit, faHistory, faPen, faPenToSquare, faRotate, faRotateBackward, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const PostsTableViews = () => {
    return (
        <div className="p-5">
            <table className="table-auto border-collapse border-y border-slate-400">
                <tbody>
                    <tr>
                        <td className="border-y border-slate-300 p-2 w-1/12 text-center">
                            <div className="m-auto w-full">
                                <input type="checkbox" className="block w-4 h-4 text-blue-600 border border-gray-100 rounded " />

                            </div>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-6/12">
                            <Link href="/baiviet" className="text-blue-500 hover:text-blue-700">
                                A step-by-step guide to building a chatbot based on your own documents with GPT
                            </Link>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-1/12 text-center">
                            <Tooltip content="Lịch sử chỉnh sửa">
                                <button className="p-1 relative text-gray-700">
                                    <FontAwesomeIcon icon={faRotateBackward} size="sm" className="w-6 h-6" />
                                    <FontAwesomeIcon icon={faPen} size="sm" className=" w-2 h-2 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
                                </button>
                            </Tooltip>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-3/12">
                            <StatsItem itemShow={['views', 'bookmark', 'comments', 'heart']} />
                        </td>
                        <td className="border-y border-slate-300 p-2 w-1/12">
                            <div className="flex justify-between items-center">
                                <Tooltip content="Sửa">
                                    <button className="p-1">
                                        <FontAwesomeIcon icon={faPenToSquare} size="sm" className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                                    </button>
                                </Tooltip>

                                <Tooltip content="Xóa">

                                    <button className="p-1">
                                        <FontAwesomeIcon icon={faTrashCan} size="sm" className="w-4 h-4 text-red-500 hover:text-red-700" />

                                    </button>
                                </Tooltip>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="border-y border-slate-300 p-2 w-1/12 text-center">
                            <div className="m-auto w-full">
                                <input type="checkbox" className="block w-4 h-4 text-blue-600 border border-gray-100 rounded " />
                            </div>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-6/12">
                            <Link href="/baiviet" className="text-blue-500 hover:text-blue-700">
                                A step-by-step guide to building a chatbot based on your own documents with GPT, A step-by-step guide to building a chatbot based on your own documents with GPT
                            </Link>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-2/12 text-center">
                            <Tooltip content="Lịch sử chỉnh sửa">
                                <button className="p-1 relative text-gray-700">
                                    <FontAwesomeIcon icon={faRotateBackward} size="sm" className="w-6 h-6" />
                                    <FontAwesomeIcon icon={faPen} size="sm" className=" w-2 h-2 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2" />
                                </button>
                            </Tooltip>
                        </td>
                        <td className="border-y border-slate-300 p-2 w-2/12">
                            <StatsItem itemShow={['views', 'bookmark', 'comments', 'heart']} />
                        </td>
                        <td className="border-y border-slate-300 p-2 w-1/12">
                            <div className="flex justify-between">
                                <Tooltip content="Sửa">
                                    <button className="p-1">
                                        <FontAwesomeIcon icon={faPenToSquare} size="sm" className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                                    </button>
                                </Tooltip>

                                <Tooltip content="Xóa">

                                    <button className="p-1">
                                        <FontAwesomeIcon icon={faTrashCan} size="sm" className="w-4 h-4 text-red-500 hover:text-red-700" />

                                    </button>
                                </Tooltip>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PostsTableViews;