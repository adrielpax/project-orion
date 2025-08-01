import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const router = useRouter();
  const { events } = useRouter();

  const navigation = [
    // { title: "Projetos", path: "/projetos" },
    // { title: "Serviços", path: "/serviços" },
    { title: "Soluções", path: "#solucoes" },
    { title: "Sobre nós", path: "#sobre" },
    { title: "Resultados", path: "#resultados" },
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
    <header className="bg-zinc-900 top-0 left-0 w-full z-50 bg-blur-md backdrop-blur-md">
      <nav
        className={`bg-zinc-900 w-full md:static md:text-sm ${
          state ? "fixed z-10 h-full" : ""
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex bg-zinc-900">
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
              <li className="duration-150 hover:text-indigo-600">
                <Link href={"/projetos"} className="block">
                  Projetos
                </Link>
              </li>
              <li className="duration-150 hover:text-indigo-600">
                <Link href={"/servicos"} className="block">
                  Serviços
                </Link>
              </li>
              <li className="duration-150 hover:text-indigo-600">
                <Link href={"/Blog"} className="block">
                  Blog
                </Link>
              </li>
              {router.pathname === "/" &&
                navigation.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className="duration-150 hover:text-indigo-600"
                    >
                      <Link href={item.path} className="block">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              {!router.pathname.includes("/get-started") && (
                <li>
                  <div className="flex justify-center items-center space-x-4">
                    <NavLink
                      href="/get-started"
                      className="text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 
                    rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-indigo-100 
                    hover:text-white hover:border-indigo-100 hover:scale-105 hover:shadow-xl 
                    hover:bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 
                    hover:shadow-indigo-500/50"
                    >
                      Vamos Colaborar 🚀
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
