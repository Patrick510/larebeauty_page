# Vou criar um portifolio para a loja LareBeauty

echo "# larebeauty_page" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Patrick510/larebeauty_page.git
git push -u origin main

git remote add origin https://github.com/Patrick510/larebeauty_page.git
git branch -M main
git push -u origin main
AAAAAA


# Dinamico

```
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-pink-600 animate-fade-in-down">
        <a className="flex items-center justify-center" href="#">
          <span className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors duration-300">LAREBEAUTY</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {["Home", "Sobre Nós", "Contato"].map((item, index) => (
            <a
              key={item}
              className="text-sm font-medium text-white hover:text-yellow-400 transition-colors duration-300 hover:scale-110 transform"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in-up">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-pink-600">
                  Descubra Sua Beleza Natural
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Produtos de alta qualidade para realçar sua beleza única
                </p>
              </div>
              <div className="space-x-4 animate-fade-in-up">
                <Button className="bg-yellow-400 text-pink-600 hover:bg-yellow-300 transition-colors duration-300 hover:scale-105 transform">
                  Ver Produtos
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Sobre Nós</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A LAREBEAUTY é uma loja de cosméticos dedicada a oferecer produtos de alta qualidade que realçam a beleza natural de cada pessoa. Nossa missão é proporcionar bem-estar e autoestima através de cosméticos sustentáveis e eficazes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Entre em Contato</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aqui para ajudar. Envie-nos uma mensagem e entraremos em contato em breve.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input 
                    placeholder="Seu nome" 
                    className="border-pink-200 focus:border-pink-400 transition-colors duration-300"
                  />
                  <Input 
                    type="email" 
                    placeholder="Seu email" 
                    className="border-pink-200 focus:border-pink-400 transition-colors duration-300"
                  />
                  <Textarea 
                    placeholder="Sua mensagem" 
                    className="border-pink-200 focus:border-pink-400 transition-colors duration-300"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-400 text-pink-600 hover:bg-yellow-300 transition-colors duration-300 hover:scale-105 transform"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-pink-200 bg-white animate-fade-in-up">
        <p className="text-xs text-gray-500">© 2024 LAREBEAUTY. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          {[
            { icon: Phone, text: "(11) 1234-5678" },
            { icon: Mail, text: "contato@larebeauty.com" },
            { icon: MapPin, text: "São Paulo, SP" },
            { icon: Instagram, text: "@larebeauty31", href: "https://www.instagram.com/larebeauty31" }
          ].map((item, index) => (
            <a
              key={item.text}
              className="text-xs hover:text-pink-600 transition-colors duration-300 text-gray-500 flex items-center hover:scale-110 transform"
              href={item.href || "#"}
            >
              <item.icon className="h-4 w-4 mr-1" />
              {item.text}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  )
}
```