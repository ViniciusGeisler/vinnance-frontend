import Image from "next/image";
import logo from "../../public/next.svg";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex h-screen w-full">

      <div className="flex flex-col w-2/3 bg-slate-50 items-center"> 
        <div className="flex flex-col min-w-72 h-full justify-center items-start">
          <h1 className="text-4xl text-start">Bem-vindo ao 
            <Image
              src={logo}
              alt="logo"
              width={250}
            />
          </h1>
        </div>

        <div className="flex flex-col h-full justify-center gap-3 min-w-72">
          <div className="flex flex-col">
            <p className="text-lg">Login</p>
            <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"></input>
          </div>

          <div className="flex flex-col">
            <p className="text-lg">Senha</p>
            <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"></input>
          </div>

          <div className="flex w-full">
            <button className="w-full rounded-md p-2 bg-orange-300 text-xl text-white font-semibold ease-in-out duration-300 hover:bg-orange-400">
              Entrar
            </button>
          </div>

        </div>

        <div className="flex h-full items-end">
          <p className="p-10">
            Ainda não possui uma conta?
            <Link className="text-orange-300 ease-in-out duration-300 hover:underline" href="/register"> Registrar-se</Link>
          </p>
        </div>

      </div>
      {/* DIV 50% */}
      <div className="flex w-full bg-[url('../../public/fundo-fundo.jpeg')] bg-cover">
      </div>

    </div>
  );
}
