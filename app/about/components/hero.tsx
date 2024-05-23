import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-40 flex font-bold items-center">
      <div className="container">
        <h1 className="font-bold text-primary/50 text-4xl mb-5 lg:text-6xl">hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente
          debitis esse maxime, alias fugiat ut ducimus odit dolore molestiae
          commodi ex totam saepe? Natus rem labore dicta beatae ad?
        </p>
        <Button>お問い合わせ</Button>
      </div>
    </div>
  );
}
