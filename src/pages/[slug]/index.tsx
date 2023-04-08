import ClientLayout from "@/layout/ClientLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faEllipsisVertical, faFont, faLink, faTextHeight, } from '@fortawesome/free-solid-svg-icons'
import { faShareFromSquare, faBookmark } from '@fortawesome/free-regular-svg-icons'
import CommentSystem from "@/components/client/comments";
import { useEffect, useState } from "react";
import Aside from "./components/Aside";
const Content = () => {
    const [isSticky, setIsSticky] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const headerElement: HTMLElement = document.querySelector('.js-header')!;
            let headerRect: DOMRect = headerElement?.getBoundingClientRect();
            const contentElement: HTMLElement = document.querySelector('#content')!
            let commentBoxRect: DOMRect = contentElement?.getBoundingClientRect();
            commentBoxRect?.bottom >= headerRect?.bottom ? setIsSticky(true) : setIsSticky(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <ClientLayout>
            <section className="px-4 py-6">
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-12">
                        <div className="sm:col-span-1 text-center">
                            <div id="content-action" className={isSticky ? 'sticky top-20' : ''}>
                                <div className="mt-4">
                                    <button className="text-slate-400">
                                        <FontAwesomeIcon className="w-10 h-10" icon={faCaretUp} />
                                    </button>
                                    <p className=" text-slate-400">+24</p>
                                    <button className=" text-slate-400">
                                        <FontAwesomeIcon className="w-10 h-10" icon={faCaretDown} />
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <button className="text-slate-400">
                                        <FontAwesomeIcon className="w-6 h-6" icon={faBookmark} />
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <button className=" text-slate-400">
                                        <FontAwesomeIcon className="w-6 h-6" icon={faFont} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <section className="col-span-1 sm:col-span-7">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="p-4">
                                    <header className="grid sm:grid-cols-2">
                                        <div className="col-span-1">
                                            <div className="flex items-center gap-4">
                                                <a href="#">
                                                    <img src="/images/avatar-generations_prsz.jpeg" alt="your-image-alt" className="w-12 h-12 rounded-full" />
                                                </a>
                                                <div>
                                                    <a href="#" className="text-lg font-medium text-blue-600 hover:text-blue-700">Guodong (Troy) Zhao</a>
                                                    <div className="flex py-1">
                                                        <span className="text-sm text-slate-500 mr-2">Mar 27</span>
                                                        <span className="text-sm text-slate-500">10 minute read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex col-span-1 justify-end">
                                            <button className="ml-5">
                                                <FontAwesomeIcon icon={faLink} />
                                            </button>
                                            <button className="ml-5">
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </button>
                                            <button className="ml-5">
                                                <FontAwesomeIcon icon={faEllipsisVertical} />
                                            </button>

                                        </div>
                                    </header>
                                    <section id="content">
                                        <div className="mb-4 text-justify">
                                            <h2 className="text-2xl font-semibold my-5 text-slate-900">It’s Been 20 Years Since We Invaded Iraq. I Am Still in the Desert.</h2>
                                            <p className="leading-6 text-slate-800">
                                                lorem*100Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore nostrum non. Fugit tempore ad animi fugiat necessitatibus maiores laudantium quo impedit eum. Numquam facilis consectetur doloremque, obcaecati veritatis dolorum?
                                                Veritatis natus error labore quo, ipsum unde culpa, molestiae odit quis delectus reiciendis pariatur, commodi ducimus quibusdam repudiandae. Cumque error nesciunt eius reprehenderit sunt cupiditate magni facilis sint deserunt quos!
                                                Nam nesciunt pariatur quas! Culpa similique officia veritatis, nisi illum sed qui iste? Ipsam fugiat rerum ullam vero optio repellat, exercitationem magni saepe dolore aut sed asperiores alias minima. Saepe?
                                                Adipisci vero eius quibusdam quas, accusamus itaque minus rerum voluptate ullam reprehenderit quae iste sint sit, hic asperiores laborum ducimus dignissimos quos magni necessitatibus, consectetur repudiandae aperiam alias eligendi? Molestiae.
                                                Omnis earum, distinctio, voluptatum magnam est nostrum molestiae sequi tempora pariatur cum expedita, tempore adipisci totam incidunt exercitationem id consequuntur eius accusamus consequatur velit odit numquam praesentium! Deleniti, cumque explicabo?
                                                Aperiam cum deserunt incidunt, tenetur nulla numquam aut rerum repellendus sit soluta odio beatae libero hic molestias eum dignissimos repellat reiciendis optio vitae! Iusto eaque fugit aliquam culpa, vel facere.
                                                Ducimus nemo quam amet rerum! Eveniet nostrum cum magni illum accusantium quae repellendus corrupti, doloribus animi quia iusto inventore accusamus aperiam fugiat suscipit nihil. Qui aspernatur quam fugiat numquam libero?
                                                Culpa vero ipsum dolorem velit consequuntur quod doloribus vitae alias expedita. Suscipit itaque iste pariatur eos facilis cumque commodi culpa dolore! Fugiat laboriosam inventore ipsa, officiis excepturi nam rem. Deserunt?
                                                Pariatur nam minus iusto ut magni excepturi vel voluptate unde impedit soluta. Esse saepe voluptates iste praesentium repellat eligendi odio ea, nobis aliquid quasi quos. Ad adipisci ab quod beatae.
                                                Nam exercitationem voluptas beatae itaque! Dolores labore autem vel fugit laborum rerum placeat, facere, officia modi aperiam error officiis, nobis sed voluptates atque incidunt blanditiis. Velit, cumque! Id, repellat similique!
                                                Inventore eum odit voluptatum eaque, molestiae veniam labore, tenetur accusantium architecto libero, doloribus aperiam corporis adipisci? A debitis blanditiis commodi ut aut fugit. Molestiae, quo autem porro cumque asperiores iusto.
                                                Dicta ad perferendis doloremque suscipit! Consectetur esse sequi quae corporis officia aliquid repellendus error nostrum dolor eaque fugit unde tempora porro aperiam laboriosam ratione fugiat, hic odio cupiditate velit. At.
                                                Delectus, sunt voluptatum explicabo fugiat, libero aut laboriosam perferendis maiores beatae, quod recusandae ipsum! Eum optio nesciunt eaque at voluptatum? Ut delectus consequuntur placeat dolorum aut labore explicabo repellendus est!
                                                Rem repudiandae magni placeat nihil saepe assumenda, soluta commodi enim velit nesciunt eum odit quia iste fugit, iusto aliquid accusantium excepturi ducimus vero veritatis eius maxime! Earum provident sit pariatur!
                                                Excepturi, repudiandae, velit ex quas magnam nisi esse voluptatum similique vitae laudantium ratione fugiat. Natus sed reiciendis dolores quam similique, animi facilis in voluptatem vitae culpa nostrum harum ad ut.
                                                Ut veritatis recusandae voluptas atque. Aliquam consectetur quam exercitationem temporibus quae doloribus fuga soluta! Suscipit ab, doloribus animi accusantium molestiae numquam ullam quasi dolor beatae, perferendis voluptatum laborum facilis autem!
                                                Cum hic est quaerat animi laborum quos repellendus, maiores veritatis voluptate dicta, ipsum aspernatur explicabo aperiam expedita deserunt reprehenderit. Doloremque eum modi officia sit adipisci illo ab voluptatum quasi iure?
                                                Distinctio exercitationem aperiam suscipit voluptates? Reiciendis enim magnam nisi quibusdam quod, quia sit recusandae ullam vitae excepturi cum provident eligendi fuga voluptatum quam? Doloribus quaerat vero velit. Deserunt, similique architecto.
                                                Fugiat nisi corporis eveniet impedit. Quis praesentium deserunt doloribus maxime excepturi in aspernatur deleniti placeat, explicabo numquam molestias pariatur iusto provident atque expedita voluptate illum ad! Incidunt, dolor. Repudiandae, iusto?
                                                Commodi ullam error at, rerum voluptatibus a soluta exercitationem. Sint alias ex sunt excepturi nobis quaerat! Pariatur sapiente excepturi quisquam modi nesciunt quaerat velit ipsum doloremque voluptate tenetur. Nostrum, enim.
                                                Harum asperiores quas ad repellat quia vitae est, eaque laudantium praesentium delectus exercitationem minus, omnis ipsam laborum, tempora dolorem eius dolor dignissimos sit enim ea? Quo inventore sint totam accusantium?
                                                Laudantium, dolore illum quos molestias iste voluptas voluptatem minima omnis provident eaque tenetur eos hic eveniet nisi maiores? Dolores soluta voluptate nihil quidem laborum ex inventore accusamus cumque fuga dolorem!
                                                Quibusdam temporibus similique ipsum rerum praesentium, placeat dolorem, nulla numquam, harum consectetur itaque cumque deleniti alias illo! Tenetur voluptatibus, repellat architecto blanditiis consequatur debitis. Harum inventore at odit earum cupiditate.
                                                Fugiat, nesciunt doloremque nemo adipisci maiores qui libero neque tempore quibusdam totam dolor culpa cumque? Laborum neque assumenda nam necessitatibus amet quod eos consequuntur hic aliquid asperiores. Fuga, accusamus quaerat.
                                                Neque officiis repellendus nesciunt iusto saepe error iste, harum facere molestiae, culpa, omnis quo exercitationem reprehenderit maxime eum. Eum soluta quas vel iure magni, aliquam harum laboriosam aperiam voluptas a!
                                                Eum odio inventore dolores ipsam cumque non possimus pariatur officiis recusandae est necessitatibus rem saepe adipisci praesentium iste deleniti ad ipsa nobis velit assumenda delectus, qui ab. Accusantium, sint minus!
                                                Ullam eos sint perferendis labore impedit facilis odit animi obcaecati ipsam dicta odio ipsum consectetur perspiciatis blanditiis similique ex aspernatur excepturi reiciendis temporibus dolore maxime officiis dolor, quo a? Repudiandae!
                                                Nulla commodi ab corporis vel tempora recusandae maiores, necessitatibus odit animi, repellat corrupti dolor voluptatum veniam eaque sint nobis iusto ullam repellendus, vitae distinctio laudantium ex sunt quibusdam! Sapiente, minima!
                                                Incidunt aperiam quod, atque odio sunt nisi velit expedita quidem impedit cum. Iusto, natus ipsam. Deserunt harum tempora nisi dicta excepturi eos illo odio ex quibusdam. Aliquam dolorem accusantium vel!
                                                Necessitatibus dolor tenetur voluptas consequuntur deleniti, illo voluptatibus sed perspiciatis reprehenderit velit hic error quo porro est eius perferendis. Velit soluta voluptate quibusdam natus at? Facere deserunt quidem autem totam.
                                                Repudiandae laboriosam nesciunt quaerat perferendis sequi commodi obcaecati magni, dolorum quo repellendus. Voluptatibus incidunt quod minima totam? Beatae reprehenderit ab corporis omnis, eos tempora veniam impedit porro, sit nam delectus!
                                                Ipsum sit vero explicabo dignissimos reiciendis unde autem, velit cum illum voluptates odio consectetur eligendi ipsam beatae commodi itaque! Autem amet officia obcaecati sapiente minus vitae nulla voluptatem quo dolore!
                                                Quo saepe repellat non odio commodi distinctio mollitia obcaecati aliquid aperiam veritatis suscipit perspiciatis beatae at dignissimos tenetur, nihil sit, maxime cupiditate blanditiis nulla eligendi. Porro minima quidem obcaecati maiores.
                                                Iste, dignissimos. Libero nulla doloremque beatae, perferendis quam consequatur nemo fuga fugiat soluta. Aperiam inventore quas eligendi fugiat obcaecati minima amet veniam sint eius nostrum? Magni, nihil velit. Aspernatur, architecto.
                                                Ratione beatae quidem non molestiae reiciendis placeat cupiditate, fugit officia at eius amet veniam suscipit temporibus magni repellat dolorum, corrupti eligendi atque neque dolore quaerat aut nihil modi quas! Tempora.
                                                Consequuntur repellat delectus qui quaerat est consectetur voluptatibus dignissimos obcaecati quis, ut dolores nulla optio voluptatem cum perspiciatis nobis suscipit vel minima dolor laudantium doloremque accusamus, ab dolorem illum! Officia?
                                                Quia, esse! Sit eaque ratione nam tempora laudantium repellendus, quasi quod rem reiciendis eum! Enim atque et veniam, libero, unde, ducimus ex blanditiis natus at pariatur minima voluptate soluta voluptatibus.
                                                Nisi, velit aut eum dolor odio ab voluptatibus assumenda. Excepturi dicta maxime sed ab, necessitatibus minima aut quos suscipit praesentium tempora quisquam eveniet laudantium sit voluptas incidunt deserunt modi culpa?
                                                Ab explicabo esse dolore ipsam a laboriosam sunt, eveniet, eaque inventore tenetur architecto minima ea perspiciatis. Asperiores explicabo iste officia ipsa, facere deserunt iure consequuntur dolorem, totam esse quaerat fugit.
                                                Praesentium voluptas earum assumenda mollitia dolor sit ipsum at tenetur natus facere esse excepturi minima modi quod reiciendis consequatur architecto error et accusamus, deleniti ea sint facilis rem! Magni, et.
                                                Minima vitae vero voluptatibus laudantium assumenda rem animi impedit consequuntur quas! Maxime sapiente eligendi enim distinctio voluptate at necessitatibus excepturi nesciunt nemo, aliquam blanditiis! Qui distinctio ratione temporibus veniam. Quod.
                                                Pariatur ab distinctio cupiditate culpa dolore repellat corrupti perferendis consequuntur? Minus error, tempore delectus voluptatem voluptatibus nisi et molestiae, possimus provident, reprehenderit tempora laborum esse sapiente expedita quia aperiam pariatur?
                                                Beatae iusto molestias eveniet debitis sapiente pariatur laudantium nostrum repellendus ratione totam tempore aliquam perferendis, id ad ullam vero consequuntur hic repellat nobis quia voluptatem optio. Excepturi ratione totam quo.
                                                Excepturi, sunt at odit nam quas ab dolores quis quibusdam voluptas assumenda deserunt itaque aliquid tempora neque optio, amet molestias quae placeat veritatis, cumque provident eius! Praesentium rem explicabo earum.
                                                Debitis ipsa cum quibusdam. Qui aliquam nobis odit cumque voluptate ducimus unde deserunt, fugiat provident amet at eius quis iure facilis voluptatibus distinctio in minima numquam nisi reiciendis quas illo.
                                                Corrupti molestias inventore rerum laboriosam asperiores, vero expedita, culpa optio eum eius dolorum ea? Ipsam autem amet aperiam repellendus nemo exercitationem, itaque optio numquam, praesentium cumque delectus, cupiditate ea dignissimos.
                                                Repellat, doloremque ut blanditiis, incidunt dolor libero beatae, aliquam vitae deserunt aperiam optio possimus cum adipisci error harum laboriosam est laborum maxime voluptas alias nulla! Non illum in architecto veritatis!
                                                Dolore quis labore earum iusto, nemo at veniam. Unde illo porro esse nam neque itaque minima reiciendis est praesentium voluptatum sequi dolore, necessitatibus explicabo. Magni ipsam atque corporis tenetur voluptatem.
                                                Odit eveniet harum distinctio at cum doloremque vel accusamus delectus quibusdam ex laudantium dolorum vero corporis aliquid, consequuntur quisquam possimus atque, impedit blanditiis. Libero, voluptatum necessitatibus sit commodi esse eos?
                                                Voluptatum, cum corporis mollitia doloremque et sint omnis necessitatibus. Aliquid, ut cupiditate. Nam tempore eligendi ut, adipisci ea voluptates id et eaque sint at, harum explicabo reiciendis! Autem, nulla expedita!
                                            </p>
                                        </div>
                                    </section>
                                    <div className="mt-10">
                                        <div className="mt-10">
                                            <a href="#" className="px-5 py-2 text-sm bg-gray-200 rounded-2xl mr-5">Software</a>
                                            <a href="#" className="px-5 py-2 text-sm bg-gray-200 rounded-2xl mr-5">Development</a>
                                            <a href="#" className="px-5 py-2 text-sm bg-gray-200 rounded-2xl mr-5">Development</a>
                                            <a href="#" className="px-5 py-2 text-sm bg-gray-200 rounded-2xl mr-5">Development</a>
                                            <a href="#" className="px-5 py-2 text-sm bg-gray-200 rounded-2xl mr-5">Development</a>
                                        </div>
                                        <div className="mt-10">
                                            <div className="col-span-5 flex justify-end">
                                                <button className="mr-5">
                                                    <FontAwesomeIcon icon={faShareFromSquare} />
                                                </button>
                                                <button className="mr-5">
                                                    <FontAwesomeIcon icon={faBookmark} />
                                                </button>
                                                <button>
                                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <CommentSystem />
                                    </div>

                                </div>

                            </div>
                        </section>
                        <aside className="col-span-1 sm:col-span-4 border-l">
                            <div className="sticky top-20 h-screen">
                                <Aside />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </ClientLayout>
    );
}

export default Content;