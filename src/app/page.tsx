import { Brain, Github, Instagram, Linkedin, ListTodo } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main
      className="flex w-full flex-1 flex-col items-center justify-center gap-2 bg-primary/20 px-2 pb-2 sm:gap-8
        sm:px-5 sm:pb-5 lg:px-8 lg:pb-8 xl:pb-10 2xl:pb-12"
    >
      <Card className="w-full max-w-screen-sm">
        <CardHeader>
          <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/20">
            <Brain className="size-6" />
          </span>
          <CardTitle>Busca com IA</CardTitle>
          <CardDescription>
            Uma página de busca que utiliza IA para encontrar resultados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full" asChild>
            <Link href="/search">Visualizar página</Link>
          </Button>
        </CardContent>
      </Card>
      <Card className="w-full max-w-screen-sm">
        <CardHeader>
          <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary/20">
            <ListTodo className="size-6" />
          </span>
          <CardTitle>Lista de Tarefas</CardTitle>
          <CardDescription>Uma página de lista de tarefas que você deve realizar</CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full" asChild>
            <Link href="/tasks">Visualizar página</Link>
          </Button>
        </CardContent>
      </Card>

      <footer className="absolute bottom-4 mt-auto space-x-2 sm:bottom-auto sm:right-5 sm:top-5">
        <Button size="icon" variant="outline">
          <a href="https://github.com/dirosaki" rel="noreferrer" target="_blank">
            <Github className="size-6" />
          </a>
        </Button>

        <Button size="icon" variant="outline">
          <a href="https://www.linkedin.com/in/diegosgomes96/" rel="noreferrer" target="_blank">
            <Linkedin className="size-6" />
          </a>
        </Button>
        <Button size="icon" variant="outline">
          <a href="https://instagram.com/soydiego.dev" rel="noreferrer" target="_blank">
            <Instagram className="size-6" />
          </a>
        </Button>
      </footer>
    </main>
  )
}
