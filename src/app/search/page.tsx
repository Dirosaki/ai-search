import { ArrowLeft, Brain, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { SearchForm } from '@/app/search/components/search-form'
import { Button } from '@/components/ui/button'

export default function Search() {
  return (
    <>
      <header className="flex h-40 w-full flex-col items-center justify-center bg-primary/20 px-4">
        <Button className="absolute left-0 top-3 text-foreground lg:top-4" variant="link" asChild>
          <Link href="/">
            <ArrowLeft /> Voltar
          </Link>
        </Button>
        <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary">
          <Brain className="size-6" />
        </span>
        <h1 className="text-center text-lg font-semibold sm:text-2xl">
          Busca com Inteligência Artificial
        </h1>
      </header>
      <main className="flex w-full flex-1 flex-col bg-primary/20 px-2 pb-2 sm:px-5 sm:pb-5 lg:px-8 lg:pb-8 xl:pb-12">
        <div className="mx-auto flex w-full max-w-screen-lg flex-1 rounded-md bg-background px-4">
          <SearchForm />
        </div>
      </main>
      <footer className="absolute top-4 mt-auto hidden space-x-2 sm:bottom-auto sm:right-5 sm:top-5 lg:block">
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
    </>
  )
}
