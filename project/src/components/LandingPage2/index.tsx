import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingBag, Phone, Mail, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center gap-2" href="#">
          <ShoppingBag className="h-6 w-6" />
          <span className="">Beleza Natural</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#home">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#sobre">
            Sobre Nós
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contato">
            Contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-pink-50 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Beleza Natural Cosméticos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Descubra a beleza natural com nossos produtos de alta qualidade
                </p>
              </div>
              <div className="space-x-4">
                <Button>Ver Produtos</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre Nós</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A Beleza Natural é uma loja de cosméticos dedicada a oferecer produtos de alta qualidade que realçam a beleza natural de cada pessoa. Fundada em 2010, nossa missão é proporcionar bem-estar e autoestima através de cosméticos sustentáveis e eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos em contato em breve.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Seu nome" />
                  <Input type="email" placeholder="Seu email" />
                  <Textarea placeholder="Sua mensagem" />
                  <Button type="submit">Enviar Mensagem</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Beleza Natural Cosméticos. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 flex items-center" href="#">
            <Phone className="h-4 w-4 mr-1" />
            (11) 1234-5678
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 flex items-center" href="#">
            <Mail className="h-4 w-4 mr-1" />
            contato@belezanatural.com
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 flex items-center" href="#">
            <MapPin className="h-4 w-4 mr-1" />
            São Paulo, SP
          </a>
        </nav>
      </footer>
    </div>
  )
}