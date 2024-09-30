import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-pink-200">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-pink-600">LAREBEAUTY</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:text-pink-600 transition-colors"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:text-pink-600 transition-colors"
            href="#sobre"
          >
            Sobre Nós
          </a>
          <a
            className="text-sm font-medium hover:text-pink-600 transition-colors"
            href="#contato"
          >
            Contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-pink-600 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Descubra Sua Beleza Natural
                </h1>
                <p className="mx-auto max-w-[700px] text-pink-100 md:text-xl">
                  Produtos de alta qualidade para realçar sua beleza única
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-400 text-pink-600 hover:bg-yellow-300">
                  Ver Produtos
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">
                  Sobre Nós
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A LAREBEAUTY é uma loja de cosméticos dedicada a oferecer
                  produtos de alta qualidade que realçam a beleza natural de
                  cada pessoa. Nossa missão é proporcionar bem-estar e
                  autoestima através de cosméticos sustentáveis e eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-pink-50 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">
                  Entre em Contato
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos
                  em contato em breve.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input
                    placeholder="Seu nome"
                    className="border-pink-200 focus:border-pink-400"
                  />
                  <Input
                    type="email"
                    placeholder="Seu email"
                    className="border-pink-200 focus:border-pink-400"
                  />
                  <Textarea
                    placeholder="Sua mensagem"
                    className="border-pink-200 focus:border-pink-400"
                  />
                  <Button
                    type="submit"
                    className="bg-pink-600 text-white hover:bg-pink-500"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-pink-200">
        <p className="text-xs text-gray-500">
          © 2024 LAREBEAUTY. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:text-pink-600 text-gray-500 flex items-center"
            href="#"
          >
            <Phone className="h-4 w-4 mr-1" />
            (11) 1234-5678
          </a>
          <a
            className="text-xs hover:text-pink-600 text-gray-500 flex items-center"
            href="#"
          >
            <Mail className="h-4 w-4 mr-1" />
            contato@larebeauty.com
          </a>
          <a
            className="text-xs hover:text-pink-600 text-gray-500 flex items-center"
            href="#"
          >
            <MapPin className="h-4 w-4 mr-1" />
            São Paulo, SP
          </a>
          <a
            className="text-xs hover:text-pink-600 text-gray-500 flex items-center"
            href="https://www.instagram.com/larebeauty31"
          >
            <Instagram className="h-4 w-4 mr-1" />
            @larebeauty31
          </a>
        </nav>
      </footer>
    </div>
  );
}
