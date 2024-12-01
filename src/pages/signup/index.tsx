import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { MailIcon } from "@/icons/MailIcon";
import { PeopleIcon } from "@/icons/PeopleIcon";
import { LockIcon } from "@/icons/LockIcon";
import { GoogleIcon } from "@/icons/GoogleIcon";
import { ArrowLeftIcon } from "@/icons/ArrowLeftIcon";
import { useState } from "react";
import { useSignUpUser } from "@/hooks/useSignUpUser";

export function SignUpPage() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useSignUpUser();

  const handleSubmit = async () => {
    await mutate({ name, lastName, email, password });
  };

  return (
    <div className="flex w-screen h-screen bg-[url('/assets/background.svg')]">
      <div className="flex flex-col w-2/5 h-screen bg-slate-100 rounded-r-3xl shadow-2xl shadow-slate-600 items-center justify-around">
        <div className="flex flex-row w-7/12 h-12 items-center justify-between">
          <Button 
            isIconOnly 
            aria-label="Google"
            radius="full"
            className="bg-white border"
            onClick={() => window.history.back()}
          >
            <ArrowLeftIcon width={28} />
          </Button>
          <p>Já é um usuário?<a href="/" className="pl-1 text-green-500">Entrar</a></p>
        </div>
        <form
          className="flex flex-col w-3/4 items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-3/4 mb-8">
            <h2 className="text-3xl font-bold text-black">Registre-se</h2>
            <div className="flex flex-row">
              <p className="text-sm text-gray-400">
                Organize suas finanças de uma maneira simples.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-3/4">
            <Input
              isRequired
              type="text"
              variant="underlined"
              placeholder="Digite o seu Nome"
              onChange={(e) => setName(e.target.value)}
              startContent={<PeopleIcon width={24} />}
            />
            <Input
              isRequired
              type="text"
              placeholder="Digite o seu Sobrenome"
              variant="underlined"
              onChange={(e) => setLastName(e.target.value)}
              startContent={<PeopleIcon width={24} />}
            />
            <Input
              isRequired
              type="email"
              placeholder="Digite o seu e-mail"
              variant="underlined"
              onChange={(e) => setEmail(e.target.value)}
              startContent={<MailIcon width={24} />}
            />
            <Input
              isRequired
              type="password"
              placeholder="Digite a sua senha"
              variant="underlined"
              onChange={(e) => setPassword(e.target.value)}
              startContent={<LockIcon width={24} />}
            />
            <Input
              isRequired
              type="password"
              placeholder="Repita a sua senha"
              variant="underlined"
              startContent={<LockIcon width={24} />}
            />
          </div>
          <div className="flex w-3/4 mt-8 items-center gap-4 justify-center">
            <Button
              radius="full"
              className="w-2/4 bg-gradient-to-tr from-green-500 to-emerald-500 text-white shadow-lg"
              type="submit"
            >
              Registrar
            </Button>
            <p>ou</p>
            <Button
              isIconOnly
              aria-label="Google"
              radius="full"
              className="bg-white border"
            >
              <GoogleIcon width={28} />
            </Button>
          </div>
        </form>
        <div/>
      </div>
      <div className="flex flex-col w-3/4 h-screen" />
    </div>
  );
}
