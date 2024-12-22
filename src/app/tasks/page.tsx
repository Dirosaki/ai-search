import { ArrowLeft, ListTodo } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { TaskForm } from './_components/task-form'

export default function Tasks() {
  return (
    <>
      <header className="flex h-40 w-full flex-col items-center justify-center bg-primary/20 px-4">
        <Button className="absolute left-0 top-3 text-foreground lg:top-4" variant="link" asChild>
          <Link href="/">
            <ArrowLeft /> Voltar
          </Link>
        </Button>
        <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-primary">
          <ListTodo className="size-6" />
        </span>
        <h1 className="text-center text-lg font-semibold sm:text-2xl">Lista de tarefas</h1>
      </header>
      <main className="flex w-full flex-1 flex-col bg-primary/20 px-2 pb-2 sm:px-5 sm:pb-5 lg:px-8 lg:pb-8 xl:pb-12">
        <div className="mx-auto flex w-full max-w-screen-lg flex-1 rounded-md bg-background px-4">
          <TaskForm />
        </div>
      </main>
    </>
  )
}
