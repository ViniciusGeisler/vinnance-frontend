import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

export default function Register() {
  return (
    <div className="flex h-screen w-full">

      <div className="flex flex-col w-2/3 bg-slate-50 items-center"> 
        <div className="flex flex-col h-full w-full max-w-96 justify-center items-start">
          <h1 className="text-4xl text-start">Registre-se</h1>
          <p>Crie sua conta para poder acessar.</p>
        </div>

        <div className="flex flex-col h-full w-full max-w-96 justify-center gap-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <p className="text-lg">Nome</p>
              <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Sobrenome</p>
              <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-lg">E-mail</p>
            <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
          </div>

          <div className="flex flex-col">
            <p className="text-lg">Senha</p>
            <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
          </div>

          <div className="flex flex-col">
            <p className="text-lg">Confirmar senha</p>
            <input className="border-2 border-slate-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <button className="w-full rounded-md p-2 bg-orange-300 text-xl text-white font-semibold ease-in-out duration-300 hover:bg-orange-400">
                Registar
              </button>
            </div>

            <div className="flex">
              <button className="w-full rounded-md p-2 bg-gray-200 text-xl text-gray-500 font-semibold ease-in-out duration-300 hover:bg-gray-300" >
                  Voltar
              </button>
            </div>

          </div> 

        </div>

        <div className="flex h-full w-full max-w-96 justify-center items-center">
          <Image
              src={logo}
              alt="logo"
              width={100}
            />
        </div>

      </div>
      {/* DIV 50% */}
      <div className="flex w-full bg-[url('../../public/fundo-fundo.jpeg')] bg-cover">
      </div>

    </div>
  )
}