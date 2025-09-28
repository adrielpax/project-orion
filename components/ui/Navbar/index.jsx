import Link from "next/link";
import { TableProperties, HandCoins,HeartHandshake, FlaskConical } from 'lucide-react';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const router = useRouter();
  const { events } = useRouter();

  const navigation = [
    // { icon: <TableProperties/>, title: "Projetos", path: "/paginas/projetos" },
    // { icon: <HandCoins/>, title: "Serviços", path: "/paginas/servicos" },
    // { icon: <FlaskConical/>, title: "Gerador de Conteudo", path: "/pagina-produto/page-two" },
  ];

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };
    events.on("routeChangeStart", () => handleState());
    events.on("hashChangeStart", () => handleState());
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header className="bg-transparent top-0 left-0 w-full z-40 bg-blur-md backdrop-blur-md">
      <nav
        className={` w-full md:static md:text-sm ${
          state ? "fixed z-10 h-full bg-zinc-800" : ""
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex ">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-white hover:text-white"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="bg-zync-900 z-100 text-white justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:text-white md:font-medium">
      
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      router.pathname == item.path && "text-indigo-500"
                    } duration-150 hover:text-indigo-500`}
                  >
                    <Link
                      href={item.path}
                      className="flex justify-center items-center gap-2"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {!router.pathname.includes("/paginas/get-started") && (
                <li>
                  <div className="flex justify-center items-center space-x-4">
                    {/* <NavLink
                      href="/paginas/get-started"
                      className="text-white border-2 border-indigo-500 bg-gradient-to-tr 
                    rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-indigo-100 
                    hover:text-white hover:border-indigo-100 hover:scale-105 hover:shadow-xl 
                    hover:bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 
                    hover:shadow-indigo-500/50 flex gap-2 items-center justify-center"
                    >
                      <HeartHandshake/> Vamos Colaborar 🚀
                    </NavLink> */}
                    
                         <NavLink
                      href="/paginas/get-started"
                      className="text-white border-2 border-transparent bg-transparent
                    rounded-lg px-6 py-3 transition-all duration-300 ease-in-out active:bg-indigo-100 
                    hover:text-white hover:border-cyan-100 hover:scale-105 hover:shadow-xl 
                    hover:bg-cyan-400
                    hover:shadow-cyan-500/50 flex gap-2 items-center justify-center"
                    >
                      <HeartHandshake/> Vamos Colaborar 🚀
                    </NavLink>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
