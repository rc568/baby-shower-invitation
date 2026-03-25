import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="font-main text-center pb-12 mx-auto p-6 py-12 sm:px-12 sm:max-w-160">
      <h2 className="text-xl sm:text-3xl font-semibold text-foreground mb-2">
        Sugerencia de regalos
      </h2>
      <p className="text-muted-foreground">
        ¡Te mostramos una lista de regalos que creemos nos ayudarán mucho para
        Daniel!
      </p>
      <div className="py-12">
        <Button
          asChild
          className="text-sm sm:text-base py-4.5 px-4 sm:py-6 sm:px-12 border-2 bg-background/60 text-muted-foreground border-border hover:border-primary [a]:hover:bg-transparent hover:shadow-md hover:text-foreground focus-within:border-primary focus-within:bg-transparent focus-within:shadow-md focus-within:text-foreground"
        >
          <a
            href="https://onelist.pe/listas/hjbn8cas8yvqtrmy/invitado/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lista de Regalos
          </a>
        </Button>
      </div>
      <div className="pt-36 text-muted-foreground text-sm sm:text-base italic">
        <span>Hecho con mucho amor</span>
      </div>
    </footer>
  );
};
