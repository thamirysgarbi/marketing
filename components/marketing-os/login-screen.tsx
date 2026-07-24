"use client";

import { useState } from "react";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { BrandMark } from "@/components/marketing-os/brand-mark";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginScreen({
  onAuthenticate
}: {
  onAuthenticate: (credentials: {
    username: string;
    password: string;
  }) => boolean;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const authenticated = onAuthenticate({
      username: username.trim(),
      password
    });

    if (authenticated) {
      setError("");
      return;
    }

    setError("Login ou senha incorretos.");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07070b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(130,10,209,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(72,72,84,0.2),transparent_22%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1400px] items-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,460px)] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="flex flex-col justify-center"
          >
            <BrandMark />

            <div className="mt-8 max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#c7aff6]">
                Acesso interno
              </p>
              <h1 className="mt-4 text-[clamp(2.3rem,7vw,5rem)] font-semibold leading-[0.96] tracking-[-0.07em] text-white">
                Framja Marketing OS protegido por login fixo.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#c7c0d9] sm:text-[17px] sm:leading-8">
                Essa camada bloqueia o acesso casual ao portal e mantém a
                operação editorial fora de exposição direta para quem abrir a
                URL.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#cfb6ff]">
                    <LockKeyhole className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-white">
                    Entrada única para o time
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#a99fc0]">
                  Todo o time usa o mesmo login e a mesma senha para entrar no
                  portal.
                </p>
              </Card>

              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-[#cfb6ff]">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-white">
                    Sessão salva no navegador
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#a99fc0]">
                  Depois do primeiro acesso, o navegador mantém a entrada ativa
                  até alguém sair manualmente.
                </p>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.06 }}
            className="flex items-center justify-center"
          >
            <Card className="w-full max-w-[460px] p-5 sm:p-7">
              <div className="rounded-[26px] border border-white/8 bg-white/[0.03] p-5">
                <p className="text-sm font-medium text-[#c5b2f4]">
                  Entrar no portal
                </p>
                <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.06em] text-white">
                  Login e senha
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[#aea5c3]">
                  Use as credenciais internas para liberar a navegação do
                  Marketing OS.
                </p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="mb-2 block text-sm text-[#9f95b7]">
                      Login
                    </span>
                    <Input
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder="Digite o login"
                      autoComplete="username"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-[#9f95b7]">
                      Senha
                    </span>
                    <Input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Digite a senha"
                      autoComplete="current-password"
                    />
                  </label>

                  {error ? (
                    <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                      {error}
                    </div>
                  ) : null}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!username.trim() || !password}
                  >
                    Entrar
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
