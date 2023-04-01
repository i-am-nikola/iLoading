import AuthModal from '@/components/client/auth/AuthModal';
import SignInModal from '@/components/client/SignInForm';
import ClientLayout from '@/layout/ClientLayout';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Cosmos Code</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/logo.png" />
            </Head>

            <ClientLayout>
                <section>
                    <div className="bg-cover bg-center h-60 sm:h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
                        <div className="container mx-auto items-center">
                            <div className="text-white font-bold text-xl text-center">Welcome to my website</div>
                        </div>
                    </div>

                </section>
                <section className="px-4 py-6 border-b">
                    <div className="container mx-auto max-w-screen-xl">
                        <h2 className="text-2xl font-bold mb-4">Featured Articles</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                            <div className="overflow-hidden shadow-md">
                                <div className="p-4">
                                    <a href="#" className="flex items-center gap-4">
                                        <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                        <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                    </a>
                                    <h3 className="text-lg font-bold my-3">A step-by-step guide to building a chatbot based on your own documents with GPT</h3>
                                    <div className="rounded-tr-md">
                                        <span className="text-xs mr-2 text-gray-500">100 views</span>
                                        <span className="text-xs text-gray-500">March 15, 2023</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="px-4 py-6">
                    <div className="container mx-auto max-w-screen-xl">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
                            <section className="col-span-1 sm:col-span-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-gray-100 p-4 flex flex-col sm:flex-row">
                                        <div className="w-full sm:w-3/4 sm:pl-4">
                                            <a href="#" className="flex items-center gap-4">
                                                <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                                <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                            </a>
                                            <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                                            <div className="rounded-tr-md">
                                                <span className="text-xs mr-2 text-gray-500">100 views</span>
                                                <span className="text-xs text-gray-500">March 15, 2023</span>
                                            </div>
                                        </div>
                                        <div className="object-right w-full sm:w-1/4 flex justify-end">
                                            <img src="	https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" className="object-contain w-60 h-36" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 flex flex-col sm:flex-row">
                                        <div className="w-full sm:w-3/4 sm:pl-4">
                                            <a href="#" className="flex items-center gap-4">
                                                <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                                <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                            </a>
                                            <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                                            <div className="rounded-tr-md">
                                                <span className="text-xs mr-2 text-gray-500">100 views</span>
                                                <span className="text-xs text-gray-500">March 15, 2023</span>
                                            </div>
                                        </div>
                                        <div className="object-right w-full sm:w-1/4 flex justify-end">
                                            <img src="	https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" className="object-contain w-60 h-36" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 flex flex-col sm:flex-row">
                                        <div className="w-full sm:w-3/4 sm:pl-4">
                                            <a href="#" className="flex items-center gap-4">
                                                <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                                <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                            </a>
                                            <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                                            <div className="rounded-tr-md">
                                                <span className="text-xs mr-2 text-gray-500">100 views</span>
                                                <span className="text-xs text-gray-500">March 15, 2023</span>
                                            </div>
                                        </div>
                                        <div className="object-right w-full sm:w-1/4 flex justify-end">
                                            <img src="	https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" className="object-contain w-60 h-36" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 flex flex-col sm:flex-row">
                                        <div className="w-full sm:w-3/4 sm:pl-4">
                                            <a href="#" className="flex items-center gap-4">
                                                <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                                <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                            </a>
                                            <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                                            <div className="rounded-tr-md">
                                                <span className="text-xs mr-2 text-gray-500">100 views</span>
                                                <span className="text-xs text-gray-500">March 15, 2023</span>
                                            </div>
                                        </div>
                                        <div className="object-right w-full sm:w-1/4 flex justify-end">
                                            <img src="	https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" className="object-contain w-60 h-36" />
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 p-4 flex flex-col sm:flex-row">
                                        <div className="w-full sm:w-3/4 sm:pl-4">
                                            <a href="#" className="flex items-center gap-4">
                                                <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-6 h-6 rounded-2xl" />
                                                <h4 className="text-sm font-medium">Guodong (Troy) Zhao</h4>
                                            </a>
                                            <h2 className="text-lg font-semibold my-3">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="text-gray-600 mb-4">Even though many veterans came home physically from Iraq, we never fully returned home</p>
                                            <div className="rounded-tr-md">
                                                <span className="text-xs mr-2 text-gray-500">100 views</span>
                                                <span className="text-xs text-gray-500">March 15, 2023</span>
                                            </div>
                                        </div>
                                        <div className="object-right w-full sm:w-1/4 flex justify-end">
                                            <img src="	https://img-b.udemycdn.com/course/480x270/3616978_b3f2_4.jpg" alt="Hình ảnh" className="object-contain w-60 h-36" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <aside className="col-span-1 sm:col-span-2">
                                <div className="sticky top-20">
                                    <div className="p-2 border-b">
                                        <a href="#" className="border border-gray-500 text-gray-500 py-2 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                            <span>Programing</span>
                                        </a>
                                        <a href="#" className="border border-gray-500 text-gray-500 py-2 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                            <span>Writing</span>
                                        </a>
                                        <a href="#" className="border border-gray-500 text-gray-500 py-2 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                            <span>Javascript</span>
                                        </a>
                                        <a href="#" className="border border-gray-500 text-gray-500 py-2 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                            <span>English</span>
                                        </a>
                                        <a href="#" className="border border-gray-500 text-gray-500 py-2 px-4 inline-flex items-center hover:bg-gray-50 m-1">
                                            <span>Nextjs</span>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            Help
                                        </a>
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            About
                                        </a>
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            Blog
                                        </a>
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            Help
                                        </a>
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            Privacy
                                        </a>
                                        <a href="" className="text-gray-500 py-2 px-4 my-1 inline-flex items-center">
                                            Terms
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </ClientLayout>
        </>
    )
}
