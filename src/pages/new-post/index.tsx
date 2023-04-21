import ClientLayout from "@/layout/ClientLayout";
import { useEffect, useRef, useState } from "react";


const NewStory = () => {

    const editorRef = useRef<any>();
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false)
    const {CKEditor, ClassicEditor} = editorRef.current || {}

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        }
        setEditorLoaded(true)
    }, []);

    return (
        <ClientLayout>
            <div className="container mx-auto">
                <div className="mt-10 w-full">
                    <form>
                        <div className="relative mb-6" >
                            <input type="text" className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100" />
                            <label className="bg-white pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] mt-[0.06rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8]">Tiêu đề
                            </label>
                        </div>
                        <div className="relative mb-6">
                            {editorLoaded &&
                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""
                                    config={{}}
                                    onReady={(editor: any) => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log('Editor is ready to use!', editor);
                                    }}
                                    onChange={(event: any, editor: any) => {
                                        const data = editor.getData();
                                        console.log({ event, editor, data });
                                    }}
                                    onBlur={(event: any, editor: any) => {
                                        console.log('Blur.', editor);
                                    }}
                                    onFocus={(event: any, editor: any) => {
                                        console.log('Focus.', editor);
                                    }}
                                />
                            }
                        </div>
                    </form>
                </div>
            </div>
        </ClientLayout>
    );
}

export default NewStory;