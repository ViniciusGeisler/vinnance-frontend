import { LockIcon } from "@/icons/LockIcon";
import { MailIcon } from "@/icons/MailIcon";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox"
import { useNavigate } from "react-router-dom";

export function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen bg-[url('/assets/background.svg')]">
      <div className="flex flex-col w-2/5 h-screen bg-slate-100 rounded-r-3xl shadow-2xl shadow-slate-600 items-center justify-center">
        <form className="flex flex-col w-3/4 items-center">
          <div className="flex flex-col w-3/4 mb-8">
            <h2 className="text-3xl font-bold text-black">
              Entre na sua conta
            </h2>
            <div className="flex flex-row">
              <p className="text-sm text-gray-400">
                Bem-vindo(a) de volta! Selecione o método de login:
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 w-3/4">
            <Input
              isRequired
              type="email"
              placeholder="Digite o seu e-mail"
              variant="underlined"
              startContent={<MailIcon width={24} />}
            />
            <Input
              isRequired
              type="password"
              placeholder="Digite a sua senha"
              variant="underlined"
              startContent={<LockIcon width={24} />}
            />
            <div className="flex flex-row justify-between">
              <Checkbox size="md" color="success" className="text-sm">Lembrar-me</Checkbox>
              <a className="text-sm text-green-500" href="/forgot">Esqueci minha senha</a>
            </div>
          </div>
          <div className="flex w-3/4 mt-8 items-center gap-4 justify-center">
            <Button
              size="lg"
              radius="full"
              className="w-full bg-gradient-to-tr from-green-500 to-emerald-500 text-white shadow-lg"
              type="submit"
              onClick={() => {
                navigate("/home");
              }}
            >
              Entrar
            </Button>
          </div>
          <div className="flex mt-8">
              <p className="text-sm text-gray-400">Não tem uma conta? <a href="/signup" className="text-green-500 font-semibold">Criar conta</a></p>
          </div>
        </form>
        <div />
      </div>
      <div className="flex flex-col w-3/4 h-screen" />
    </div>
  );
}
